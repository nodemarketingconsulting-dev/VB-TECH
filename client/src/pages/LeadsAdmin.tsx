import { useState, useEffect, useCallback } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Shield, Search, Download, Trash2, User, Phone, Mail, MessageSquare, Calendar, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { Lead } from "@shared/schema";

export default function LeadsAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/leads", {
        headers: { "x-admin-password": adminPassword },
      });
      if (!res.ok) throw new Error("Falha ao carregar");
      const data = await res.json();
      setLeads(data);
    } catch (e) {
      toast({ variant: "destructive", title: "Erro", description: "Falha ao carregar leads." });
    } finally {
      setLoading(false);
    }
  }, [adminPassword, toast]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated, fetchLeads]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setAdminPassword(password);
        setIsAuthenticated(true);
        toast({ title: "Acesso Permitido", description: "Bem-vindo ao painel de leads." });
      } else {
        toast({ variant: "destructive", title: "Acesso Negado", description: "Senha incorreta." });
      }
    } catch {
      toast({ variant: "destructive", title: "Erro", description: "Falha na conexão." });
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: "DELETE",
        headers: { "x-admin-password": adminPassword },
      });
      if (!res.ok) throw new Error();
      setLeads(prev => prev.filter(lead => lead.id !== id));
      toast({ title: "Lead removido", description: "O registro foi apagado com sucesso." });
    } catch {
      toast({ variant: "destructive", title: "Erro", description: "Falha ao remover lead." });
    }
  };

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.phone.includes(searchTerm) ||
    (lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleExport = () => {
    if (leads.length === 0) {
      toast({ title: "Sem dados", description: "Não há leads para exportar.", variant: "destructive" });
      return;
    }

    const headers = ["Data", "Nome", "Telefone", "Email", "Origem", "Mensagem"];
    const csvContent = [
      headers.join(","),
      ...leads.map(lead => {
        const date = new Date(lead.createdAt).toLocaleString('pt-BR');
        const cleanName = `"${lead.name.replace(/"/g, '""')}"`;
        const cleanMessage = lead.message ? `"${lead.message.replace(/"/g, '""').replace(/\n/g, ' ')}"` : '""';
        const cleanEmail = lead.email ? `"${lead.email}"` : '""';
        return [
          `"${date}"`,
          cleanName,
          `"${lead.phone}"`,
          cleanEmail,
          `"${lead.source}"`,
          cleanMessage
        ].join(",");
      })
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `vbtech_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({ title: "Exportação concluída", description: "O arquivo CSV foi baixado com sucesso." });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0077be_1px,transparent_1px),linear-gradient(to_bottom,#0077be_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
        <GlassCard className="w-full max-w-md p-8 border-primary/20">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/30">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-white font-heading" data-testid="text-admin-title">Área Restrita</h1>
            <p className="text-muted-foreground mt-2">Painel de Gestão de Leads VB Tech</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Senha de acesso"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/5 border-white/10 text-white text-center tracking-widest"
                data-testid="input-admin-password"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" data-testid="button-admin-login">
              <Shield className="w-4 h-4 mr-2" /> Acessar Painel
            </Button>
          </form>
          <p className="text-xs text-center text-muted-foreground mt-6">
            Ambiente Seguro
          </p>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0077be_1px,transparent_1px),linear-gradient(to_bottom,#0077be_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-10 pointer-events-none fixed" />
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/30">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white font-heading">Gestão de Leads</h1>
              <p className="text-muted-foreground">Monitoramento em tempo real</p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 bg-white/5 border-white/10 text-white"
                data-testid="input-search-leads"
              />
            </div>
            <Button
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10"
              onClick={() => fetchLeads()}
              data-testid="button-refresh-leads"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} /> Atualizar
            </Button>
            <Button
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10"
              onClick={handleExport}
              data-testid="button-export-leads"
            >
              <Download className="w-4 h-4 mr-2" /> Exportar
            </Button>
          </div>
        </header>

        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <GlassCard className="p-6 border-l-4 border-l-primary flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total de Leads</p>
                <h3 className="text-3xl font-bold text-white" data-testid="text-total-leads">{leads.length}</h3>
              </div>
              <User className="w-8 h-8 text-primary/50" />
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-l-[#25D366] flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Via WhatsApp</p>
                <h3 className="text-3xl font-bold text-white">{leads.filter(l => l.source === 'WhatsApp').length}</h3>
              </div>
              <MessageSquare className="w-8 h-8 text-[#25D366]/50" />
            </GlassCard>
            <GlassCard className="p-6 border-l-4 border-l-cyan-400 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Via Site</p>
                <h3 className="text-3xl font-bold text-white">{leads.filter(l => l.source === 'Site Contact Form').length}</h3>
              </div>
              <Mail className="w-8 h-8 text-cyan-400/50" />
            </GlassCard>
          </div>

          <GlassCard className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-muted-foreground uppercase text-xs">
                  <tr>
                    <th className="p-4 font-medium">Data</th>
                    <th className="p-4 font-medium">Nome</th>
                    <th className="p-4 font-medium">Contato</th>
                    <th className="p-4 font-medium">Origem</th>
                    <th className="p-4 font-medium">Mensagem</th>
                    <th className="p-4 font-medium text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {loading ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-muted-foreground">
                        Carregando...
                      </td>
                    </tr>
                  ) : filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-muted-foreground">
                        Nenhum lead encontrado.
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-white/5 transition-colors group" data-testid={`row-lead-${lead.id}`}>
                        <td className="p-4 text-white/70 whitespace-nowrap text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {new Date(lead.createdAt).toLocaleString('pt-BR')}
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-medium text-white">{lead.name}</span>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-col gap-1 text-sm">
                            <div className="flex items-center gap-2 text-white/80">
                              <Phone className="w-3 h-3" /> {lead.phone}
                            </div>
                            {lead.email && (
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Mail className="w-3 h-3" /> {lead.email}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            lead.source === 'WhatsApp'
                              ? 'bg-[#25D366]/20 text-[#25D366]'
                              : 'bg-primary/20 text-primary'
                          }`}>
                            {lead.source}
                          </span>
                        </td>
                        <td className="p-4 max-w-xs">
                          <p className="text-sm text-muted-foreground truncate" title={lead.message || ''}>
                            {lead.message || '-'}
                          </p>
                        </td>
                        <td className="p-4 text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            onClick={() => handleDelete(lead.id)}
                            data-testid={`button-delete-lead-${lead.id}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
