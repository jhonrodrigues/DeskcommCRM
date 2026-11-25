import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Columns3,
  MessagesSquare,
} from "lucide-react";

import { LogotipoDoProduto } from "@/components/branding/MarcaDoProduto";
import { marcaEhADoProduto } from "@/lib/branding";
import type { MarcaDeSaida } from "@/lib/branding/saida";
import type { ModoDeCadastro } from "@/lib/auth/politica-de-cadastro";
import type { PlanoDoCadastro } from "@/lib/cobranca/cadastro";
import { traduzir } from "@/lib/i18n/dicionario";
import type { Idioma } from "@/lib/i18n/idiomas";

import styles from "./landing-publica.module.css";

type MarcaDaLanding = Pick<MarcaDeSaida, "nome" | "logoUrl" | "logoDarkUrl">;
type Props = {
  marca: MarcaDaLanding;
  idioma: Idioma;
  planos: readonly PlanoDoCadastro[];
  modo: ModoDeCadastro;
};

function Logotipo({ marca }: { marca: MarcaDaLanding }) {
  const logo = marca.logoUrl || marca.logoDarkUrl;
  if (logo) {
    // A URL configurada pode pertencer a qualquer domínio do operador.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={logo} alt={marca.nome} className={styles.logo} />;
  }
  if (marcaEhADoProduto({ name: marca.nome, logoUrl: null })) {
    return <LogotipoDoProduto nome={marca.nome} className={styles.logo} />;
  }
  return <span>{marca.nome}</span>;
}

export function LandingPublica({ marca, idioma, planos, modo }: Props) {
  const t = (texto: string) => traduzir(texto, idioma);

  const captacao = [
    {
      nome: "Meta Lead Ads",
      detalhe: t(
        "Receba no funil os contatos dos formulários do Facebook e Instagram após conectar a página e configurar a fonte.",
      ),
    },
    {
      nome: "Google Ads",
      detalhe: t(
        "Identifique a origem das conversas que começam em anúncios e seguem para o WhatsApp pela sua página.",
      ),
    },
    {
      nome: t("Formulários e sites"),
      detalhe: t(
        "Envie os dados de formulários, landing pages e ferramentas externas ao CRM por webhook, na etapa que você escolher.",
      ),
    },
  ];

  const rotina = [
    {
      icon: MessagesSquare,
      titulo: t("Atendimento pelo WhatsApp"),
      detalhe: t(
        "A equipe acompanha as conversas em uma caixa compartilhada. Agentes de IA podem responder, qualificar e passar o atendimento para uma pessoa.",
      ),
    },
    {
      icon: Columns3,
      titulo: t("Funil e follow-up"),
      detalhe: t(
        "Veja a origem de cada oportunidade, organize o funil do seu jeito e configure quando retomar conversas que ficaram sem resposta.",
      ),
    },
    {
      icon: CalendarDays,
      titulo: t("Agenda e próximos passos"),
      detalhe: t(
        "Marque reuniões e visitas no CRM e conecte o Google Agenda para sincronizar os compromissos.",
      ),
    },
  ];

  const duvidas = [
    {
      pergunta: t("Posso usar meu número de WhatsApp?"),
      resposta: t(
        "Você pode conectar um número por QR code ou configurar a API oficial da Meta. O número de conexões disponíveis depende da modalidade e dos limites do plano.",
      ),
    },
    {
      pergunta: t("A equipe pode assumir uma conversa?"),
      resposta: t(
        "Sim. Você pode configurar quando a IA passa o atendimento para alguém da equipe. A pessoa assume a conversa com o histórico em mãos.",
      ),
    },
    {
      pergunta: t("Preciso conectar tudo antes de começar?"),
      resposta: t(
        "Você pode começar por um canal, montar seu funil e adicionar as demais integrações conforme a operação precisar. Cada fonte de captação tem sua própria configuração.",
      ),
    },
  ];

  const porConvite = modo === "so_convite";
  const comAprovacao = modo === "com_aprovacao";
  const destino = planos.length ? "#planos" : porConvite ? "/login" : "/signup";
  const acao = planos.length
    ? t("Ver planos")
    : porConvite
      ? t("Acessar CRM")
      : comAprovacao
        ? t("Solicitar acesso")
        : t("Criar conta");

  function preco(centavos: number, moeda: string) {
    return new Intl.NumberFormat(idioma, {
      style: "currency",
      currency: moeda,
      maximumFractionDigits: centavos % 100 === 0 ? 0 : 2,
      minimumFractionDigits: centavos % 100 === 0 ? 0 : 2,
    }).format(centavos / 100);
  }

  return (
    <div className={styles.site} id="inicio">
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#inicio" className={styles.brand}>
            <Logotipo marca={marca} />
          </a>
          <nav aria-label={t("Navegação principal")} className={styles.nav}>
            <a href="#captacao">{t("Captação")}</a>
            <a href="#recursos">{t("Recursos")}</a>
            <a href="#planos">{t("Planos")}</a>
          </nav>
          <div className={styles.headerActions}>
            <Link href="/login" className={styles.login}>
              {t("Entrar")}
            </Link>
            <Link href={destino} className={styles.button}>
              {acao}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{t("CRM para equipes comerciais")}</p>
            <h1>{t("Do primeiro contato à próxima venda.")}</h1>
            <p className={styles.intro}>
              {t(
                "Receba leads de anúncios e formulários, atenda pelo WhatsApp e acompanhe cada oportunidade até o fechamento.",
              )}
            </p>
            <div className={styles.actions}>
              <Link href={destino} className={styles.button}>
                {acao}
                <ArrowRight size={18} aria-hidden />
              </Link>
              <a href="#captacao" className={styles.textLink}>
                {t("Como funciona")}
                <ArrowDown size={17} aria-hidden />
              </a>
            </div>
          </div>

          <figure className={styles.journey}>
            <div className={styles.journeyHeader}>
              <span>{t("Uma oportunidade no CRM")}</span>
              <small>{t("Exemplo de fluxo")}</small>
            </div>
            <ol className={styles.timeline}>
              <li>
                <span aria-hidden />
                <div>
                  <small>{t("Captação")}</small>
                  <strong>{t("Formulário do Instagram recebido")}</strong>
                </div>
              </li>
              <li>
                <span aria-hidden />
                <div>
                  <small>WhatsApp</small>
                  <strong>{t("Interesse e disponibilidade confirmados")}</strong>
                </div>
              </li>
              <li>
                <span aria-hidden />
                <div>
                  <small>{t("Agenda")}</small>
                  <strong>{t("Visita marcada para a equipe comercial")}</strong>
                </div>
              </li>
            </ol>
          </figure>
        </section>

        <section className={styles.section} id="captacao">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{t("Captação de leads")}</p>
            <h2>{t("Saiba de onde veio cada oportunidade.")}</h2>
          </div>
          <dl className={styles.sources}>
            {captacao.map(({ nome, detalhe }) => (
              <div key={nome}>
                <dt>{nome}</dt>
                <dd>{detalhe}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.operation} id="recursos">
          <div className={styles.operationInner}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>{t("Rotina comercial")}</p>
              <h2>{t("Depois que o lead chega, o trabalho continua.")}</h2>
            </div>
            <div className={styles.features}>
              {rotina.map(({ icon: Icon, titulo, detalhe }) => (
                <article key={titulo}>
                  <Icon size={24} strokeWidth={1.5} aria-hidden />
                  <h3>{titulo}</h3>
                  <p>{detalhe}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="planos">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{t("Planos")}</p>
            <h2>{t("Escolha um plano para a sua equipe.")}</h2>
            {planos.length > 0 && (
              <p>
                {t("Compare a duração do teste e os limites de cada plano antes de criar a conta.")}
              </p>
            )}
          </div>
          {planos.length ? (
            <div className={styles.plans}>
              {planos.map((plano) => (
                <article key={plano.id} className={styles.plan}>
                  <h3>{plano.nome}</h3>
                  <p className={styles.price}>
                    {preco(plano.preco_cents, plano.moeda)}{" "}
                    <small>{plano.intervalo === "ano" ? t("por ano") : t("por mês")}</small>
                  </p>
                  <p className={styles.trial}>
                    {plano.trial_dias > 0
                      ? plano.trial_dias === 1
                        ? t("1 dia de teste grátis")
                        : t("{dias} dias de teste grátis").replace(
                            "{dias}",
                            String(plano.trial_dias),
                          )
                      : t("Acesso após o primeiro pagamento")}
                  </p>
                  {plano.recursos && (
                    <ul>
                      <li>
                        <Check size={16} aria-hidden />
                        {t("Pessoas na equipe")} ·{" "}
                        {plano.recursos.assentos ?? t("Sem limite no plano")}
                      </li>
                      <li>
                        <Check size={16} aria-hidden />
                        {t("Números de WhatsApp")} ·{" "}
                        {plano.recursos.canais ?? t("Sem limite no plano")}
                      </li>
                      {plano.recursos.ia_usd_cents !== null && (
                        <li>
                          <Check size={16} aria-hidden />
                          {t("Teto de IA por mês")} · {preco(plano.recursos.ia_usd_cents, "USD")}
                        </li>
                      )}
                    </ul>
                  )}
                  {!porConvite && (
                    <Link
                      href={`/signup?plano=${encodeURIComponent(plano.id)}`}
                      className={styles.button}
                    >
                      {comAprovacao
                        ? t("Solicitar acesso")
                        : plano.trial_dias > 0
                          ? t("Começar teste grátis")
                          : t("Escolher plano")}
                      <ArrowRight size={16} aria-hidden />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <p>{t("Nenhum plano está disponível para contratação online no momento.")}</p>
          )}
          {comAprovacao && (
            <p className={styles.planNote}>{t("O cadastro está sujeito à aprovação.")}</p>
          )}
          {porConvite && <p className={styles.planNote}>{t("O cadastro é feito por convite.")}</p>}
          {planos.some((plano) => plano.recursos?.ia_usd_cents != null) && (
            <p className={styles.planNote}>
              {t(
                "O teto de IA indicado se aplica quando a empresa usa a chave de IA da plataforma.",
              )}
            </p>
          )}
        </section>

        <section className={`${styles.section} ${styles.faq}`} id="duvidas">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{t("Dúvidas")}</p>
            <h2>{t("Antes de começar")}</h2>
          </div>
          <div>
            {duvidas.map(({ pergunta, resposta }) => (
              <details key={pergunta}>
                <summary>
                  {pergunta}
                  <ChevronDown size={18} aria-hidden />
                </summary>
                <p>{resposta}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <a href="#inicio" className={styles.brand}>
            <Logotipo marca={marca} />
          </a>
          <nav aria-label={t("Links legais")}>
            <Link href="/legal/privacy">{t("Privacidade")}</Link>
            <Link href="/legal/privacy#dados-do-google">{t("Dados do Google")}</Link>
            <Link href="/legal/terms">{t("Termos de uso")}</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
