import { redirect } from "next/navigation";
import { marcaDaSaida } from "@/lib/branding/saida";
import { createClient } from "@/lib/supabase/server";
import { LandingPublica } from "./landing-publica";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) redirect("/app");
  const marca = await marcaDaSaida(null);
  return <LandingPublica nome={marca.nome} />;
}
