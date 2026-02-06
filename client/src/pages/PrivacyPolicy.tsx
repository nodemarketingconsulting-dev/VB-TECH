import { Section } from "@/components/ui/section";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export function PrivacyPolicy() {
  return (
    <>
      <ScrollToTop />
      <Section className="py-32 relative min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              Política de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground">
              Entenda como tratamos e protegemos seus dados pessoais
            </p>
          </div>

          <GlassCard className="p-8 md:p-12 space-y-8 text-white/80 leading-relaxed">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">1. OBJETIVO</h2>
              <p>
                1.1. Esta Política de Privacidade tem como objetivo estabelecer diretrizes e princípios para a coleta, o tratamento, o uso e a retenção de dados pessoais pela VBTech, aplicando-se a todas as informações pessoais recebidas pela empresa, independentemente do formato em que se apresentem, seja eletrônico, físico ou verbal.
              </p>
              <p>
                1.2. Esta política é aplicável a todos os empregados, colaboradores, fornecedores, parceiros de negócios e clientes que, de alguma forma, tratem, coletem, armazenem, utilizem ou tenham acesso a informações e dados de qualquer natureza.
              </p>
              <p>
                1.3. Além das regras e princípios aqui previstos, a VBTech espera que clientes e parceiros tratem os dados pessoais com cuidado, observando a legislação vigente no Brasil, bem como parâmetros éticos e sociais.
              </p>
              <p>
                1.4. A VBTech entende que relações empresariais duradouras somente são possíveis quando existe confiança entre as partes, reafirmando seu compromisso em resguardar a privacidade e proteger os dados pessoais tratados.
              </p>
              <p>
                1.5. Este documento foi elaborado de forma clara e acessível, com o objetivo de demonstrar como o tratamento de dados pessoais é realizado pela VBTech.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">2. QUAIS OS PROCESSOS DE COLETA DE SEUS DADOS</h2>
              <p>
                2.1. Os dados pessoais podem ser coletados diretamente do titular por meio do website da VBTech, de forma indireta por intermédio de terceiros ou automaticamente por meio de dispositivos eletrônicos, mediante a utilização de cookies.
              </p>
              <p>
                2.2. Com o objetivo de garantir transparência no tratamento de dados pessoais, a VBTech descreve abaixo as finalidades pelas quais os dados poderão ser tratados:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">2.2.1. Contratação dos serviços da VBTech:</strong> Os dados pessoais são tratados para fornecimento de informações sobre preços, condições e para viabilizar a contratação dos serviços oferecidos.
                </li>
                <li>
                  <strong className="text-white">2.2.2. Prevenção e combate à fraude:</strong> Os dados pessoais podem ser tratados para garantir a segurança do website, prevenir fraudes e manter a integridade dos serviços prestados.
                </li>
                <li>
                  <strong className="text-white">2.2.3. Oferta de novos serviços e envio de informações:</strong> Os dados pessoais poderão ser tratados para ofertar novos serviços e transmitir informações relevantes aos clientes da VBTech.
                </li>
                <li>
                  <strong className="text-white">2.2.4. Avaliação de desempenho, pesquisa e inovação:</strong> Os dados pessoais poderão ser tratados para avaliação de desempenho dos serviços, realização de pesquisas estatísticas, inovação e desenvolvimento de novos produtos.
                </li>
                <li>
                  <strong className="text-white">2.2.5. Execução dos serviços contratados:</strong> Os dados pessoais poderão ser tratados para execução dos serviços contratados, sendo necessária a identificação do titular, como, por exemplo, na realização de exames ocupacionais.
                </li>
                <li>
                  <strong className="text-white">2.2.6. Redes sociais:</strong> A VBTech poderá tratar dados pessoais quando o titular interagir com funcionalidades de redes sociais, com a finalidade de divulgar produtos e serviços de interesse, podendo o titular se opor por meio das configurações da plataforma utilizada.
                </li>
                <li>
                  <strong className="text-white">2.2.7. Informações de dispositivos:</strong> A VBTech poderá tratar dados pessoais coletados automaticamente por meio de cookies em dispositivos móveis ou computadores conectados à internet, conforme previsto em sua Política de Cookies.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">3. QUEM FAZ O TRATAMENTO DOS DADOS PESSOAIS</h2>
              <p>
                3.1. A VBTech é a controladora dos dados pessoais tratados e é responsável por assegurar que o tratamento ocorra em conformidade com esta política e com a legislação aplicável.
              </p>
              <p>
                3.2. A empresa compromete-se a garantir que qualquer pessoa, física ou jurídica, envolvida no tratamento de dados cumpra as diretrizes desta política.
              </p>
              <p>
                3.3. Os dados pessoais serão tratados exclusivamente para as finalidades previstas nesta política, em contratos ou acordos comerciais, sendo vedado o uso para fins pessoais ou diversos dos aqui estabelecidos.
              </p>
              <p>
                3.4. A VBTech assegura que os tratamentos de dados estejam alinhados às leis de privacidade e proteção de dados, bem como às suas políticas internas de segurança da informação.
              </p>
              <p>
                3.5. Os dados pessoais serão tratados apenas para execução das obrigações previstas no escopo da contratação ou conforme definido pela VBTech, por meio de contratos e aditivos.
              </p>
              <p>
                3.6. Em relação aos dados pessoais sensíveis, a VBTech adota maior rigor, utilizando medidas técnicas e organizacionais adequadas para garantir a confidencialidade, integridade e disponibilidade das informações.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">4. TRATAMENTO DE DADOS SENSÍVEIS</h2>
              <p>
                4.1. A VBTech poderá coletar e tratar dados pessoais sensíveis, conforme definidos pela Lei Geral de Proteção de Dados Pessoais (LGPD), incluindo, mas não se limitando a, dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação sindical, dados referentes à saúde ou à vida sexual, dados genéticos ou biométricos.
              </p>
              <p>
                4.2. A VBTech também poderá tratar dados pessoais que, direta ou indiretamente, possam revelar informações sensíveis.
              </p>
              <p>
                4.3. O tratamento de dados sensíveis será realizado exclusivamente com base nas hipóteses legais previstas na LGPD, observando rigorosamente as medidas de segurança aplicáveis.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">5. TRATAMENTO DE DADOS DE CRIANÇAS E ADOLESCENTES</h2>
              <p>
                5.1. Durante a prestação de seus serviços, a VBTech poderá coletar dados pessoais de crianças e adolescentes menores de 18 (dezoito) anos.
              </p>
              <p>
                5.2. Nesses casos, a VBTech buscará sempre a autorização do representante legal ou de pelo menos um dos pais ou responsáveis legais, conforme exigido pela LGPD.
              </p>
              <p>
                5.3. O tratamento desses dados será realizado exclusivamente para finalidades legítimas relacionadas à prestação dos serviços, observando o melhor interesse do menor.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">6. COMPARTILHAMENTO DE DADOS</h2>
              <p>6.1. A VBTech poderá compartilhar dados pessoais nas seguintes hipóteses:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-white">6.1.1. Prestadores de Serviços:</strong> Os dados pessoais poderão ser compartilhados com prestadores de serviços que auxiliam na execução das atividades contratadas, tais como prestadores da rede credenciada, empresas de suporte, atendimento ao cliente, detecção de fraudes, pesquisas de mercado, cobranças e serviços correlatos, sendo tais prestadores contratualmente obrigados a manter a confidencialidade das informações.
                </li>
                <li>
                  <strong className="text-white">6.1.2. Obrigação Legal ou Regulatória:</strong> Os dados pessoais poderão ser compartilhados para cumprimento de obrigações legais, regulatórias ou mediante determinação judicial, bem como para investigação ou combate à fraude.
                </li>
                <li>
                  <strong className="text-white">6.1.3. Parceiros de Negócio:</strong> Os dados pessoais poderão ser compartilhados com parceiros de negócio quando necessário para a execução de serviços fora da estrutura da VBTech, com base contratual e no legítimo interesse.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">7. TRANSFERÊNCIA INTERNACIONAL DE DADOS</h2>
              <p>
                7.1. Para viabilizar a prestação de seus serviços, a VBTech poderá realizar a transferência internacional de dados pessoais para outros países.
              </p>
              <p>
                7.2. Toda transferência internacional será realizada em conformidade com as exigências da Lei Geral de Proteção de Dados Pessoais, adotando medidas adequadas de proteção.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">8. DIREITOS DO TITULAR DE DADOS CONFORME A LGPD</h2>
              <p>
                8.1. O titular dos dados pessoais poderá exercer, a qualquer momento, os direitos previstos no artigo 18 da Lei nº 13.709/2018.
              </p>
              <p>
                8.2. São direitos do titular, entre outros: confirmação da existência de tratamento, acesso aos dados pessoais, correção de dados incompletos ou desatualizados, solicitação de anonimização, bloqueio ou eliminação de dados, portabilidade, oposição ao tratamento, retirada do consentimento e revisão de decisões automatizadas.
              </p>
              <p>
                8.3. A VBTech poderá solicitar informações adicionais para confirmação da identidade do titular e se reserva o direito de rejeitar solicitações ilegítimas ou ilegais, observada a legislação vigente.
              </p>
              <p>
                8.4. As solicitações poderão ser realizadas por meio do e-mail: <a href="mailto:privacidade@vbtech.com.br" className="text-primary hover:underline">privacidade@vbtech.com.br</a>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">9. CICLO DE VIDA DOS DADOS PESSOAIS</h2>
              <p>
                9.1. A VBTech manterá os dados pessoais somente pelo período necessário para cumprir as finalidades para as quais foram coletados, inclusive para cumprimento de obrigações legais, contratuais, regulatórias ou requisições de autoridades competentes.
              </p>
              <p>
                9.2. Para definição do prazo de retenção, são considerados a natureza dos dados, sua sensibilidade, os riscos envolvidos, as finalidades do tratamento e os requisitos legais aplicáveis.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">10. FUNCIONALIDADES DE SEGURANÇA DA INFORMAÇÃO</h2>
              <p>
                10.1. A VBTech adota medidas técnicas e organizacionais de segurança da informação, alinhadas às melhores práticas de mercado, com o objetivo de proteger a privacidade e os dados pessoais tratados.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">11. CONTATO E DÚVIDAS</h2>
              <p>
                11.1. O titular poderá entrar em contato com o Encarregado de Proteção de Dados Pessoais da VBTech, Ricardo Barros, por meio do e-mail: <a href="mailto:privacidade@vbtech.com.br" className="text-primary hover:underline">privacidade@vbtech.com.br</a>
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">12. MUDANÇAS NA POLÍTICA DE PRIVACIDADE</h2>
              <p>
                12.1. Esta Política de Privacidade poderá ser atualizada a qualquer tempo, visando sua adequação às melhores práticas de privacidade e proteção de dados pessoais.
              </p>
              <p>
                12.2. Em caso de alterações relevantes, a VBTech publicará a versão atualizada, indicando a data da última atualização e garantindo o acesso à nova versão.
              </p>
            </div>
          </GlassCard>
        </div>
      </Section>
    </>
  );
}
