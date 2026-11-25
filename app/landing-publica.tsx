import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Bot,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  MessageCircle,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import styles from "./landing-publica.module.css";

export function LandingPublica({ nome }: { nome: string }) {
  return (
    <div className={styles.site} id="inicio">
      <header className={styles.header}>
        <div className={styles.container + " " + styles.headerInner}>
          <a className={styles.brand} href="#inicio">
            <span className={styles.brandMark}>✳</span>
            <span>{nome}</span>
          </a>
          <nav className={styles.navigation} aria-label="Navegação principal">
            <a href="#solucao">A solução</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <div className={styles.headerActions}>
            <Link className={styles.login} href="/login">
              Entrar
            </Link>
            <a className={styles.headerCta} href="https://jbagent.com.br/">
              Conheça a JB Agent <MoveUpRight size={15} />
            </a>
          </div>
        </div>
      </header>
      <main id="conteudo">
        <section className={styles.hero}>
          <div className={styles.container + " " + styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.heroTag}>
                <span /> CRM + INTELIGÊNCIA ARTIFICIAL
              </div>
              <h1>
                Boas conversas.
                <br />
                <em>Grandes negócios.</em>
              </h1>
              <p>
                Seu atendimento, suas oportunidades e sua equipe trabalhando juntos. Com
                inteligência artificial para transformar cada conversa em um próximo passo.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primary} href="https://jbagent.com.br/">
                  Conheça a JB Agent <ArrowRight size={18} />
                </a>
                <a className={styles.secondary} href="#solucao">
                  Explorar o CRM <ArrowDownRight size={18} />
                </a>
              </div>
              <div className={styles.heroNote}>
                <span className={styles.noteIcon}>
                  <Sparkles size={16} />
                </span>{" "}
                Feito para negócios que crescem conversando.
              </div>
            </div>
            <div className={styles.productWrap}>
              <div className={styles.productTop}>
                <span>UMA VISÃO DA SUA OPERAÇÃO</span>
                <span>EXEMPLO ILUSTRATIVO</span>
              </div>
              <div
                className={styles.product}
                aria-label="Exemplo ilustrativo do acompanhamento de oportunidades"
              >
                <div className={styles.productHeader}>
                  <div className={styles.productLogo}>
                    <span>✳</span> {nome}
                  </div>
                  <div className={styles.productDots}>
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className={styles.productBody}>
                  <div className={styles.productSidebar}>
                    <span className={styles.activeSide}>
                      <ChartNoAxesColumnIncreasing size={17} /> Visão geral
                    </span>
                    <span>
                      <MessageCircle size={17} /> Conversas
                    </span>
                    <span>
                      <CalendarDays size={17} /> Agenda
                    </span>
                    <span>
                      <Bot size={17} /> Agentes de IA
                    </span>
                  </div>
                  <div className={styles.dashboard}>
                    <div className={styles.dashHeading}>
                      <div>
                        <small>SEU ESPAÇO DE TRABALHO</small>
                        <h2>Oportunidades</h2>
                      </div>
                      <span>Funil comercial</span>
                    </div>
                    <div className={styles.board}>
                      <div>
                        <div className={styles.columnTitle}>
                          Novos contatos <span>02</span>
                        </div>
                        <div className={styles.lead}>
                          <b>Marina Costa</b>
                          <small>Interesse em serviços</small>
                          <span>Nova conversa</span>
                        </div>
                        <div className={styles.lead}>
                          <b>Lucas Oliveira</b>
                          <small>Quer saber mais</small>
                        </div>
                      </div>
                      <div>
                        <div className={styles.columnTitle}>
                          Em conversa <span>01</span>
                        </div>
                        <div className={styles.lead}>
                          <b>Camila Almeida</b>
                          <small>Conhecendo a solução</small>
                          <span className={styles.greenTag}>IA em atendimento</span>
                        </div>
                      </div>
                      <div>
                        <div className={styles.columnTitle}>
                          Próximo passo <span>01</span>
                        </div>
                        <div className={styles.lead}>
                          <b>Rafael Santos</b>
                          <small>Reunião agendada</small>
                          <span>Equipe comercial</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.productCaption}>
                <span className={styles.captionIcon}>
                  <Sparkles size={18} />
                </span>
                <div>
                  <strong>Mais contexto em cada conversa.</strong>
                  <small>Pessoas e IA, no mesmo fluxo de trabalho.</small>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroBottom}>
            <div className={styles.container}>
              <span>ATENDIMENTO MAIS CONECTADO</span>
              <strong>WhatsApp</strong>
              <strong>Agentes de IA</strong>
              <strong>Funil de vendas</strong>
              <strong>Agenda</strong>
            </div>
          </div>
        </section>
        <section className={styles.solutions + " " + styles.container} id="solucao">
          <div className={styles.sectionHeader}>
            <div>
              <span>UMA OPERAÇÃO, MUITAS POSSIBILIDADES</span>
              <h2>
                Seu comercial merece
                <br />
                mais do que ferramentas soltas.
              </h2>
            </div>
            <p>
              Do primeiro contato ao próximo passo: acompanhe o que importa e dê à sua equipe o
              contexto para agir.
            </p>
          </div>
          <div className={styles.featureGrid}>
            <article>
              <MessageCircle />
              <h3>Conversas que continuam</h3>
              <p>
                Reúna o atendimento e consulte o histórico antes de responder. Cada conversa mantém
                seu contexto.
              </p>
            </article>
            <article>
              <Bot />
              <h3>IA que trabalha com você</h3>
              <p>
                Agentes ajudam a responder e qualificar interesses, com passagem para uma pessoa
                quando necessário.
              </p>
            </article>
            <article>
              <ChartNoAxesColumnIncreasing />
              <h3>Clareza em cada etapa</h3>
              <p>
                Acompanhe oportunidades no funil e entenda o próximo passo do seu processo
                comercial.
              </p>
            </article>
            <article>
              <CalendarDays />
              <h3>Agenda conectada</h3>
              <p>
                Com o Google Agenda conectado, consulte horários e gerencie agendamentos pelo
                atendimento.
              </p>
            </article>
          </div>
        </section>
        <section className={styles.process} id="como-funciona">
          <div className={styles.container + " " + styles.processGrid}>
            <div>
              <span className={styles.processLabel}>MENOS FRICÇÃO. MAIS CONTINUIDADE.</span>
              <h2>O melhor atendimento acontece quando tudo se conecta.</h2>
              <p>Um fluxo mais claro para quem chega e para quem está do outro lado da conversa.</p>
              <a href="https://jbagent.com.br/" className={styles.lightButton}>
                Conheça a JB Agent <ArrowRight size={18} />
              </a>
            </div>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h3>O cliente entra em contato</h3>
                  <p>A conversa chega pelo WhatsApp e passa a fazer parte da sua operação.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>A IA ajuda a entender a necessidade</h3>
                  <p>
                    O agente pode responder e qualificar o interesse com base no contexto
                    disponível.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Sua equipe segue com contexto</h3>
                  <p>As oportunidades avançam e as pessoas assumem quando necessário.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className={styles.faq + " " + styles.container} id="duvidas">
          <div>
            <span>PERGUNTAS FREQUENTES</span>
            <h2>
              Simples para começar.
              <br />
              Completo para evoluir.
            </h2>
          </div>
          <div className={styles.faqList}>
            <details>
              <summary>A equipe pode assumir uma conversa?</summary>
              <p>
                Sim. O agente pode encaminhar o atendimento para uma pessoa, que acompanha o
                histórico pelo CRM.
              </p>
            </details>
            <details>
              <summary>Como funciona a integração com a agenda?</summary>
              <p>
                Com o Google Agenda conectado, o CRM pode mostrar horários e criar, alterar ou
                cancelar agendamentos solicitados pela pessoa.
              </p>
            </details>
            <details>
              <summary>O CRM se conecta ao Google Ads?</summary>
              <p>
                Quando configurada, a integração pode devolver ao Google Ads informações de vendas
                associadas aos anúncios. Saiba mais na{" "}
                <Link href="/legal/privacy#dados-do-google">Política de privacidade</Link>.
              </p>
            </details>
          </div>
        </section>
        <section className={styles.closing}>
          <div className={styles.container + " " + styles.closingInner}>
            <div>
              <span>O PRÓXIMO PASSO COMEÇA AQUI</span>
              <h2>
                Faça cada conversa
                <br />
                contar para o seu negócio.
              </h2>
              <p>Conheça uma forma mais conectada de atender e vender.</p>
            </div>
            <a className={styles.primary} href="https://jbagent.com.br/">
              Conheça a JB Agent <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container + " " + styles.footerInner}>
          <a className={styles.brand} href="#inicio">
            <span className={styles.brandMark}>✳</span>
            <span>{nome}</span>
          </a>
          <p>Conversas que movem negócios.</p>
          <nav aria-label="Links legais">
            <Link href="/legal/privacy">Privacidade</Link>
            <Link href="/legal/terms">Termos de uso</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
