import { redirect } from "next/navigation";

import { modoDeCadastro } from "@/lib/auth/politica-de-cadastro";
import { marcaDaSaida } from "@/lib/branding/saida";
import { lerCadastroNaTela } from "@/lib/cobranca/cadastro";
import { idiomaDoVisitante } from "@/lib/i18n/idiomaAnonimo";
import { logger } from "@/lib/logger";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

import { LandingPublica } from "./landing-publica";

export const dynamic = "force-dynamic";

async function lerPlanosPublicos() {
  try {
    return (await lerCadastroNaTela(createAdminClient(), true)).oferecidos;
  } catch {
    logger.warn("landing pública: não foi possível carregar os planos");
    return [];
  }
}

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) redirect("/app");

  const [marca, idioma, modo, planos] = await Promise.all([
    marcaDaSaida(null),
    idiomaDoVisitante(null),
    modoDeCadastro(),
    lerPlanosPublicos(),
  ]);
  return <LandingPublica marca={marca} idioma={idioma} modo={modo} planos={planos} />;
}
