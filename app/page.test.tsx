import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const cena = vi.hoisted(() => ({
  usuario: null as { id: string } | null,
}));

vi.mock("next/navigation", () => ({
  redirect: vi.fn((destino: string) => {
    throw new Error(`NEXT_REDIRECT:${destino}`);
  }),
}));
vi.mock("@/lib/supabase/server", () => ({
  createClient: async () => ({
    auth: { getUser: async () => ({ data: { user: cena.usuario } }) },
  }),
}));
vi.mock("@/lib/i18n/idiomaAnonimo", () => ({ idiomaDoVisitante: async () => "pt-BR" }));
vi.mock("@/lib/auth/politica-de-cadastro", () => ({ modoDeCadastro: async () => "aberto" }));
vi.mock("@/lib/supabase/admin", () => ({ createAdminClient: () => ({}) }));
vi.mock("@/lib/cobranca/cadastro", () => ({ lerCadastroNaTela: async () => ({ oferecidos: [] }) }));
vi.mock("@/lib/branding/saida", () => ({
  marcaDaSaida: async () => ({ nome: "Marca da Revenda" }),
}));

import HomePage from "./page";

async function montar() {
  return render(await HomePage());
}

beforeEach(() => {
  cena.usuario = null;
});

describe("/ — a página inicial pública", () => {
  // A verificação de um app que pede dados de conta Google abre o endereço
  // principal SEM entrar. Antes, `/` era só um redirect para o painel e o
  // revisor caía no login.
  it("sem sessão: mostra a landing, links legais e acesso ao login", async () => {
    await montar();

    expect(
      screen.getByRole("heading", { level: 1, name: "Do primeiro contato à próxima venda." }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("Marca da Revenda").length).toBeGreaterThan(0);
    expect(
      screen.getByText(
        "Receba leads de anúncios e formulários, atenda pelo WhatsApp e acompanhe cada oportunidade até o fechamento.",
      ),
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Dados do Google" })).toHaveAttribute(
      "href",
      "/legal/privacy#dados-do-google",
    );
    expect(screen.getByRole("link", { name: "Privacidade" })).toHaveAttribute(
      "href",
      "/legal/privacy",
    );
    expect(screen.getByRole("link", { name: "Termos de uso" })).toHaveAttribute(
      "href",
      "/legal/terms",
    );
    expect(screen.getByRole("link", { name: "Entrar" })).toHaveAttribute("href", "/login");
  });

  it("o nome vem da marca resolvida, não de texto fixo", async () => {
    await montar();
    expect(document.body.textContent).toContain("Marca da Revenda");
  });

  it("com sessão: segue direto para o painel, como sempre foi", async () => {
    cena.usuario = { id: "11111111-1111-4111-8111-111111111111" };
    await expect(montar()).rejects.toThrow("NEXT_REDIRECT:/app");
  });
});
