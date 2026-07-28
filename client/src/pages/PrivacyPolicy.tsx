import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <>
      <ScrollToTop />

      {/* Simple Header with Back Button */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-24 h-8 relative">
              <img
                src="/images/vb-tech-logo.png"
                alt="VB Tech"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-primary px-4 py-2 rounded-md transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Voltar para Home
          </Link>
        </div>
      </header>

      <Section className="py-32 relative min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
              Política de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Tratamento de Dados Pessoais pela VB Tech
            </p>
            <p className="text-sm text-muted-foreground">
              VB Tech Consultoria de TI Ltda &nbsp;|&nbsp; Versão 1.3 &nbsp;|&nbsp; Código P-007 &nbsp;|&nbsp; Classificação: Público
            </p>
          </div>

          <GlassCard className="p-8 md:p-12 space-y-10 text-white/80 leading-relaxed">

            {/* 1. Objetivo */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. Objetivo</h2>
              <p>
                1.1. Esta Política de Privacidade tem como objetivo estabelecer diretrizes e princípios para a coleta, o tratamento, o uso e a retenção de dados pessoais pela VB Tech Consultoria de TI Ltda, aplicando-se a todas as informações pessoais recebidas pela empresa, independentemente do formato em que se apresentem, seja eletrônico, físico ou verbal.
              </p>
              <p>
                1.2. Esta política é aplicável a todos os colaboradores, fornecedores, parceiros de negócio, clientes e visitantes do site que, de alguma forma, tratem, coletem, armazenem, utilizem ou tenham acesso a dados pessoais no contexto da relação com a VB Tech.
              </p>
              <p>
                1.3. Além das regras e princípios aqui previstos, a VB Tech espera que clientes e parceiros tratem os dados pessoais com cuidado, observando a legislação vigente no Brasil, bem como parâmetros éticos e sociais.
              </p>
              <p>
                1.4. Este documento foi elaborado de forma clara e acessível, com o objetivo de demonstrar como o tratamento de dados pessoais é realizado pela VB Tech, em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
              </p>
            </div>

            {/* 2. Dois Papéis */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. Dois Papéis da VB Tech no Tratamento de Dados</h2>
              <p>
                2.1. A VB Tech pode atuar sob dois papéis distintos perante a LGPD, a depender do contexto:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-white">Controladora:</strong> quando trata dados pessoais coletados diretamente por meio do site institucional, de formulários de contato, ou de sua própria relação comercial e administrativa com clientes, fornecedores e colaboradores.
                </li>
                <li>
                  <strong className="text-white">Operadora:</strong> quando trata dados pessoais em nome de um cliente, no âmbito da prestação de serviços de TI contratados (ex.: gestão de infraestrutura, suporte técnico, backup), seguindo as instruções e finalidades definidas pelo cliente controlador. Nesses casos, aplicam-se também as cláusulas específicas de proteção de dados e confidencialidade previstas no Contrato de Prestação de Serviço firmado com o cliente.
                </li>
              </ul>
              <p>
                2.2. Esta Política de Privacidade trata principalmente do papel da VB Tech como Controladora, especialmente em relação aos visitantes do site e à sua própria base de contatos comerciais.
              </p>
            </div>

            {/* 3. Como Coletamos */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. Como Coletamos seus Dados</h2>
              <p>
                3.1. Os dados pessoais podem ser coletados diretamente do titular por meio do website da VB Tech (formulários de contato e orçamento), de forma indireta por intermédio de terceiros (ex.: indicações comerciais), ou automaticamente por meio de cookies e tecnologias semelhantes durante a navegação no site.
              </p>
              <p>
                3.2. Com o objetivo de garantir transparência, a VB Tech descreve abaixo as finalidades pelas quais os dados pessoais poderão ser tratados:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-white">Contratação dos serviços da VB Tech:</strong> os dados pessoais são tratados para fornecimento de informações sobre preços, condições e para viabilizar a contratação dos serviços de TI oferecidos (terceirização de TI, infraestrutura de redes, cloud e segurança da informação).
                </li>
                <li>
                  <strong className="text-white">Execução dos serviços contratados:</strong> os dados pessoais de contatos técnicos e administrativos do cliente são tratados para viabilizar o suporte técnico, o atendimento de chamados e a gestão da infraestrutura contratada.
                </li>
                <li>
                  <strong className="text-white">Prevenção e combate à fraude:</strong> os dados pessoais podem ser tratados para garantir a segurança do site, prevenir fraudes e manter a integridade dos serviços prestados.
                </li>
                <li>
                  <strong className="text-white">Oferta de novos serviços e envio de informações:</strong> os dados pessoais poderão ser tratados para ofertar novos serviços e transmitir informações comerciais relevantes aos clientes da VB Tech.
                </li>
                <li>
                  <strong className="text-white">Avaliação de desempenho e melhoria contínua:</strong> os dados poderão ser tratados para avaliação da qualidade dos serviços prestados e desenvolvimento de melhorias.
                </li>
                <li>
                  <strong className="text-white">Redes sociais:</strong> a VB Tech poderá tratar dados pessoais quando o titular interagir com suas páginas em redes sociais, com a finalidade de divulgar produtos e serviços de interesse, podendo o titular se opor por meio das configurações da plataforma utilizada.
                </li>
                <li>
                  <strong className="text-white">Cookies e navegação no site:</strong> a VB Tech poderá tratar dados coletados automaticamente por meio de cookies estritamente necessários ao funcionamento do site. A VB Tech ainda não publica uma Política de Cookies específica; até sua publicação, esta seção descreve o tratamento aplicável, limitado a cookies técnicos essenciais, sem uso para publicidade direcionada.
                </li>
              </ul>
            </div>

            {/* 4. Quem Faz o Tratamento */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. Quem Faz o Tratamento dos Dados Pessoais</h2>
              <p>
                4.1. A VB Tech Consultoria de TI Ltda é, na maior parte das situações descritas nesta política, a controladora dos dados pessoais tratados, sendo responsável por assegurar que o tratamento ocorra em conformidade com esta política e com a legislação aplicável.
              </p>
              <p>
                4.2. A empresa compromete-se a garantir que qualquer pessoa, física ou jurídica, envolvida no tratamento de dados em seu nome cumpra as diretrizes desta política e da política interna de segurança da informação da VB Tech.
              </p>
              <p>
                4.3. Os dados pessoais serão tratados exclusivamente para as finalidades previstas nesta política ou em contratos e acordos comerciais, sendo vedado o uso para fins pessoais ou diversos dos aqui estabelecidos.
              </p>
            </div>

            {/* 5. Dados Sensíveis */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. Tratamento de Dados Sensíveis</h2>
              <p>
                5.1. A VB Tech poderá, excepcionalmente e apenas quando estritamente necessário à prestação de determinado serviço contratado, tratar dados pessoais sensíveis, conforme definidos pela LGPD (art. 5º, II), sempre com base em hipótese legal aplicável e sob medidas de segurança reforçadas.
              </p>
              <p>
                5.2. Quando a VB Tech atuar como operadora de dados sensíveis em nome de um cliente (ex.: dados de saúde tratados por clientes do setor de medicina ocupacional), o tratamento segue estritamente as instruções e finalidades definidas pelo cliente controlador, sem uso próprio desses dados pela VB Tech para quaisquer outras finalidades.
              </p>
            </div>

            {/* 6. Crianças e Adolescentes */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. Dados de Crianças e Adolescentes</h2>
              <p>
                6.1. Os serviços da VB Tech são destinados a pessoas jurídicas e a seus representantes maiores de idade. Não há coleta intencional de dados pessoais de crianças ou adolescentes por meio do site institucional ou dos serviços prestados.
              </p>
              <p>
                6.2. Caso, de forma incidental, dados dessa natureza sejam identificados no contexto da prestação de serviços a um cliente, a VB Tech adotará as medidas de proteção reforçada ou eliminação aplicáveis, conforme a LGPD e as instruções do cliente controlador.
              </p>
            </div>

            {/* 7. Compartilhamento */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">7. Compartilhamento de Dados</h2>
              <p>7.1. A VB Tech poderá compartilhar dados pessoais nas seguintes hipóteses:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-white">Prestadores de serviço e parceiros tecnológicos:</strong> os dados pessoais poderão ser compartilhados com fornecedores que auxiliam na execução das atividades contratadas, como as plataformas Microsoft 365, GoTo Connect, Bitdefender, TeamViewer e Milvus, sempre limitados ao necessário para a prestação do serviço e sob obrigação contratual de confidencialidade.
                </li>
                <li>
                  <strong className="text-white">Obrigação legal ou regulatória:</strong> os dados pessoais poderão ser compartilhados para cumprimento de obrigações legais, regulatórias ou mediante determinação judicial.
                </li>
                <li>
                  <strong className="text-white">Parceiros de negócio:</strong> os dados pessoais poderão ser compartilhados com parceiros de negócio quando necessário para a execução de serviços que envolvam infraestrutura ou sistemas fora do ambiente direto da VB Tech, sempre com base contratual.
                </li>
              </ul>
            </div>

            {/* 8. Transferência Internacional */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">8. Transferência Internacional de Dados</h2>
              <p>
                8.1. Para viabilizar a prestação de seus serviços, a VB Tech utiliza ferramentas de nuvem (Microsoft 365, e, quando aplicável ao contrato, AWS/Azure) que podem envolver a transferência internacional de dados pessoais para outros países.
              </p>
              <p>
                8.2. Toda transferência internacional é realizada em conformidade com as exigências da LGPD, adotando as medidas e garantias contratuais aplicáveis previstas nos termos de uso desses fornecedores.
              </p>
            </div>

            {/* 9. Direitos do Titular */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">9. Direitos do Titular de Dados Conforme a LGPD</h2>
              <p>
                9.1. O titular dos dados pessoais poderá exercer, a qualquer momento, os direitos previstos no artigo 18 da Lei nº 13.709/2018, entre eles: confirmação da existência de tratamento, acesso aos dados pessoais, correção de dados incompletos ou desatualizados, solicitação de anonimização, bloqueio ou eliminação de dados, portabilidade, oposição ao tratamento, e revisão de decisões automatizadas.
              </p>
              <p>
                9.2. A VB Tech poderá solicitar informações adicionais para confirmação da identidade do titular e se reserva o direito de rejeitar solicitações ilegítimas ou ilegais, observada a legislação vigente.
              </p>
              <p>
                9.3. As solicitações poderão ser realizadas por meio do e-mail:{" "}
                <a href="mailto:privacidade@vbtech.com.br" className="text-primary hover:underline">
                  privacidade@vbtech.com.br
                </a>
                , e serão tratadas conforme os prazos definidos no procedimento interno de atendimento a titulares da VB Tech.
              </p>
            </div>

            {/* 10. Ciclo de Vida */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">10. Ciclo de Vida dos Dados Pessoais</h2>
              <p>
                10.1. A VB Tech manterá os dados pessoais somente pelo período necessário para cumprir as finalidades para as quais foram coletados, inclusive para cumprimento de obrigações legais, contratuais ou regulatórias.
              </p>
              <p>
                10.2. Ao término de um contrato de prestação de serviços, os dados pessoais tratados no âmbito daquele contrato seguem o procedimento interno de encerramento de contrato da VB Tech, que define os prazos de devolução e exclusão segura.
              </p>
            </div>

            {/* 11. Segurança da Informação */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">11. Segurança da Informação</h2>
              <p>
                11.1. A VB Tech adota medidas técnicas e organizacionais de segurança da informação alinhadas às melhores práticas de mercado, detalhadas em políticas internas de segurança da informação e de continuidade de negócios, com o objetivo de proteger a privacidade e os dados pessoais tratados contra acessos não autorizados e incidentes de segurança.
              </p>
            </div>

            {/* 12. Contato e Dúvidas */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">12. Contato e Dúvidas</h2>
              <p>
                12.1. O titular poderá entrar em contato com o Encarregado de Proteção de Dados (DPO) da VB Tech, <strong className="text-white">Vagner Laurindo Borges</strong>, por meio do e-mail:{" "}
                <a href="mailto:privacidade@vbtech.com.br" className="text-primary hover:underline">
                  privacidade@vbtech.com.br
                </a>
              </p>
            </div>

            {/* 13. Alterações */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">13. Alterações desta Política</h2>
              <p>
                13.1. Esta Política de Privacidade poderá ser atualizada a qualquer tempo, visando sua adequação às melhores práticas de privacidade e proteção de dados pessoais, ou a alterações na legislação aplicável.
              </p>
              <p>
                13.2. Em caso de alterações relevantes, a VB Tech publicará a versão atualizada em seu site institucional, indicando a data da última atualização.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 mt-4 text-center text-sm text-muted-foreground">
              Última atualização: julho de 2026.
            </div>

            <div className="flex justify-center pt-4">
              <Link href="/" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-2 rounded-md font-medium transition-colors">
                <ArrowLeft className="w-4 h-4" /> Voltar para Página Inicial
              </Link>
            </div>
          </GlassCard>
        </div>
      </Section>
    </>
  );
}
