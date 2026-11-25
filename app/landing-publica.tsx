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
import { traduzir } from "@/lib/i18n/dicionario";
import type { Idioma } from "@/lib/i18n/idiomas";
import styles from "./landing-publica.module.css";

export function LandingPublica({ nome, idioma = "pt-BR" }: { nome: string; idioma?: Idioma }) {
  const t = (texto: string) => traduzir(texto, idioma);
  return (
    <div className={styles.site} id="inicio">
      <header className={styles.header}>
        <div className={styles.container + " " + styles.headerInner}>
          <a className={styles.brand} href="#inicio">
            <span className={styles.brandMark}>✳</span>
            <span>{nome}</span>
          </a>
          <nav className={styles.navigation} aria-label={t("Navegação principal")}>
            <a href="#solucao">{t("A solução")}</a>
            <a href="#como-funciona">{t("Como funciona")}</a>
            <a href="#duvidas">{t("Dúvidas")}</a>
          </nav>
          <div className={styles.headerActions}>
            <Link className={styles.login} href="/login">
              {t("Entrar")}
            </Link>
            <a className={styles.headerCta} href="#solucao">
              {t("Explorar o CRM")} <MoveUpRight size={15} />
            </a>
          </div>
        </div>
      </header>
      <main id="conteudo">
        <section className={styles.hero}>
          <div className={styles.container + " " + styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.heroTag}>
                <span /> {t("CRM + INTELIGÊNCIA ARTIFICIAL")}
              </div>
              <h1>
                {t("Boas conversas.")}
                <br />
                <em>{t("Grandes negócios.")}</em>
              </h1>
              <p>
                {t(
                  "Seu atendimento, suas oportunidades e sua equipe trabalhando juntos. Com inteligência artificial para transformar cada conversa em um próximo passo.",
                )}
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primary} href="/login">
                  {t("Acessar CRM")} <ArrowRight size={18} />
                </a>
                <a className={styles.secondary} href="#solucao">
                  {t("Explorar o CRM")} <ArrowDownRight size={18} />
                </a>
              </div>
              <div className={styles.heroNote}>
                <span className={styles.noteIcon}>
                  <Sparkles size={16} />
                </span>{" "}
                {t("Feito para negócios que crescem conversando.")}
              </div>
            </div>
            <div className={styles.productWrap}>
              <div className={styles.productTop}>
                <span>{t("UMA VISÃO DA SUA OPERAÇÃO")}</span>
                <span>{t("EXEMPLO ILUSTRATIVO")}</span>
              </div>
              <div
                className={styles.product}
                aria-label={t("Exemplo ilustrativo do acompanhamento de oportunidades")}
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
                      <ChartNoAxesColumnIncreasing size={17} /> {t("Visão geral")}
                    </span>
                    <span>
                      <MessageCircle size={17} /> {t("Conversas")}
                    </span>
                    <span>
                      <CalendarDays size={17} /> {t("Agenda")}
                    </span>
                    <span>
                      <Bot size={17} /> {t("Agentes de IA")}
                    </span>
                  </div>
                  <div className={styles.dashboard}>
                    <div className={styles.dashHeading}>
                      <div>
                        <small>{t("SEU ESPAÇO DE TRABALHO")}</small>
                        <h2>{t("Oportunidades")}</h2>
                      </div>
                      <span>{t("Funil comercial")}</span>
                    </div>
                    <div className={styles.board}>
                      <div>
                        <div className={styles.columnTitle}>
                          {t("Novos contatos")} <span>02</span>
                        </div>
                        <div className={styles.lead}>
                          <b>Marina Costa</b>
                          <small>{t("Interesse em serviços")}</small>
                          <span>{t("Nova conversa")}</span>
                        </div>
                        <div className={styles.lead}>
                          <b>Lucas Oliveira</b>
                          <small>{t("Quer saber mais")}</small>
                        </div>
                      </div>
                      <div>
                        <div className={styles.columnTitle}>
                          {t("Em conversa")} <span>01</span>
                        </div>
                        <div className={styles.lead}>
                          <b>Camila Almeida</b>
                          <small>{t("Conhecendo a solução")}</small>
                          <span className={styles.greenTag}>{t("IA em atendimento")}</span>
                        </div>
                      </div>
                      <div>
                        <div className={styles.columnTitle}>
                          {t("Próximo passo")} <span>01</span>
                        </div>
                        <div className={styles.lead}>
                          <b>Rafael Santos</b>
                          <small>{t("Reunião agendada")}</small>
                          <span>{t("Equipe comercial")}</span>
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
                  <strong>{t("Mais contexto em cada conversa.")}</strong>
                  <small>{t("Pessoas e IA, no mesmo fluxo de trabalho.")}</small>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroBottom}>
            <div className={styles.container}>
              <span>{t("ATENDIMENTO MAIS CONECTADO")}</span>
              <strong>WhatsApp</strong>
              <strong>{t("Agentes de IA")}</strong>
              <strong>{t("Funil de vendas")}</strong>
              <strong>{t("Agenda")}</strong>
            </div>
          </div>
        </section>
        <section className={styles.solutions + " " + styles.container} id="solucao">
          <div className={styles.sectionHeader}>
            <div>
              <span>{t("UMA OPERAÇÃO, MUITAS POSSIBILIDADES")}</span>
              <h2>
                {t("Seu comercial merece")}
                <br />
                {t("mais do que ferramentas soltas.")}
              </h2>
            </div>
            <p>
              {t(
                "Do primeiro contato ao próximo passo: acompanhe o que importa e dê à sua equipe o contexto para agir.",
              )}
            </p>
          </div>
          <div className={styles.featureGrid}>
            <article>
              <MessageCircle />
              <h3>{t("Conversas que continuam")}</h3>
              <p>
                {t(
                  "Reúna o atendimento e consulte o histórico antes de responder. Cada conversa mantém seu contexto.",
                )}
              </p>
            </article>
            <article>
              <Bot />
              <h3>{t("IA que trabalha com você")}</h3>
              <p>
                {t(
                  "Agentes ajudam a responder e qualificar interesses, com passagem para uma pessoa quando necessário.",
                )}
              </p>
            </article>
            <article>
              <ChartNoAxesColumnIncreasing />
              <h3>{t("Clareza em cada etapa")}</h3>
              <p>
                {t(
                  "Acompanhe oportunidades no funil e entenda o próximo passo do seu processo comercial.",
                )}
              </p>
            </article>
            <article>
              <CalendarDays />
              <h3>{t("Agenda conectada")}</h3>
              <p>
                {t(
                  "Com o Google Agenda conectado, consulte horários e gerencie agendamentos pelo atendimento.",
                )}
              </p>
            </article>
          </div>
        </section>
        <section className={styles.process} id="como-funciona">
          <div className={styles.container + " " + styles.processGrid}>
            <div>
              <span className={styles.processLabel}>{t("MENOS FRICÇÃO. MAIS CONTINUIDADE.")}</span>
              <h2>{t("O melhor atendimento acontece quando tudo se conecta.")}</h2>
              <p>
                {t(
                  "Um fluxo mais claro para quem chega e para quem está do outro lado da conversa.",
                )}
              </p>
              <a href="#solucao" className={styles.lightButton}>
                {t("Explorar o CRM")} <ArrowRight size={18} />
              </a>
            </div>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <h3>{t("O cliente entra em contato")}</h3>
                  <p>
                    {t("A conversa chega pelo WhatsApp e passa a fazer parte da sua operação.")}
                  </p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>{t("A IA ajuda a entender a necessidade")}</h3>
                  <p>
                    {t(
                      "O agente pode responder e qualificar o interesse com base no contexto disponível.",
                    )}
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>{t("Sua equipe segue com contexto")}</h3>
                  <p>{t("As oportunidades avançam e as pessoas assumem quando necessário.")}</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className={styles.faq + " " + styles.container} id="duvidas">
          <div>
            <span>{t("PERGUNTAS FREQUENTES")}</span>
            <h2>
              {t("Simples para começar.")}
              <br />
              {t("Completo para evoluir.")}
            </h2>
          </div>
          <div className={styles.faqList}>
            <details>
              <summary>{t("A equipe pode assumir uma conversa?")}</summary>
              <p>
                {t(
                  "Sim. O agente pode encaminhar o atendimento para uma pessoa, que acompanha o histórico pelo CRM.",
                )}
              </p>
            </details>
            <details>
              <summary>{t("Como funciona a integração com a agenda?")}</summary>
              <p>
                {t(
                  "Com o Google Agenda conectado, o CRM pode mostrar horários e criar, alterar ou cancelar agendamentos solicitados pela pessoa.",
                )}
              </p>
            </details>
            <details>
              <summary>{t("O CRM se conecta ao Google Ads?")}</summary>
              <p>
                {t(
                  "Quando configurada, a integração pode devolver ao Google Ads informações de vendas associadas aos anúncios. Saiba mais na",
                )}{" "}
                <Link href="/legal/privacy#dados-do-google">{t("Política de privacidade")}</Link>.
              </p>
            </details>
          </div>
        </section>
        <section className={styles.closing}>
          <div className={styles.container + " " + styles.closingInner}>
            <div>
              <span>{t("O PRÓXIMO PASSO COMEÇA AQUI")}</span>
              <h2>
                {t("Faça cada conversa")}
                <br />
                {t("contar para o seu negócio.")}
              </h2>
              <p>{t("Conheça uma forma mais conectada de atender e vender.")}</p>
            </div>
            <a className={styles.primary} href="/login">
              {t("Acessar CRM")} <ArrowRight size={18} />
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
          <p>{t("Conversas que movem negócios.")}</p>
          <nav aria-label={t("Links legais")}>
            <Link href="/legal/privacy">{t("Privacidade")}</Link>
            <Link href="/legal/terms">{t("Termos de uso")}</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
