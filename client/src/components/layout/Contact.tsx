import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { GlassCard } from "@/components/ui/glass-card";
import { Phone, Mail } from "lucide-react";
import { revealVariants } from "@/lib/motion";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(8, "Telefone inválido"),
  message: z.string().min(10, "Mensagem muito curta"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mensagem enviada!",
      description: "A VB Tech retornará em breve.",
    });
    form.reset();
  }

  return (
    <Section id="contato" className="py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
        <motion.div
           variants={revealVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Vamos conversar sobre o seu cenário
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Conte rapidamente como está sua TI hoje. A VB Tech retorna com um direcionamento objetivo e próximos passos.
          </p>
          
          <div className="space-y-4">
             <div className="flex items-center gap-4 text-white/80">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                 <Mail size={20} />
               </div>
               <span>Resposta rápida em horário comercial.</span>
             </div>
             
             <Button 
               variant="outline" 
               className="w-full md:w-auto gap-2 border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
               onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
             >
               <Phone size={16} /> Falar no WhatsApp
             </Button>
          </div>
        </motion.div>

        <motion.div
           variants={revealVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
        >
          <GlassCard className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} className="bg-white/5 border-white/10 text-white focus:border-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">E-mail</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" {...field} className="bg-white/5 border-white/10 text-white focus:border-primary/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Telefone/WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="(11) 99999-9999" {...field} className="bg-white/5 border-white/10 text-white focus:border-primary/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Como podemos ajudar?" 
                          {...field} 
                          className="bg-white/5 border-white/10 text-white focus:border-primary/50 min-h-[120px]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 shadow-[0_0_20px_rgba(45,169,225,0.3)]">
                  Enviar Mensagem
                </Button>
              </form>
            </Form>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
