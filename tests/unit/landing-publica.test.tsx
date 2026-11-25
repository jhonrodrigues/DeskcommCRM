import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LandingPublica } from "@/app/landing-publica";

const marca = { nome: "CRM Exemplo", logoUrl: "https://example.com/logo.png" };
const pago = {
  id: "mensal",
  nome: "Equipe",
  preco_cents: 12900,
  moeda: "BRL",
  intervalo: "mes",
  trial_dias: 0,
};
const teste = {
  id: "anual",
  nome: "Comercial",
  preco_cents: 99900,
  moeda: "BRL",
  intervalo: "ano",
  trial_dias: 7,
  recursos: { assentos: 5, canais: 2, ia_usd_cents: 1000 },
};

describe("landing pública", () => {
  it("usa o logo configurado e mantém os links de entrada e documentos legais", () => {
    render(<LandingPublica marca={marca} idioma="pt-BR" modo="aberto" planos={[]} />);
    expect(screen.getAllByRole("img", { name: marca.nome })[0]).toHaveAttribute(
      "src",
      marca.logoUrl,
    );
    expect(screen.getByRole("link", { name: "Entrar" })).toHaveAttribute("href", "/login");
    expect(screen.getByRole("link", { name: "Termos de uso" })).toHaveAttribute(
      "href",
      "/legal/terms",
    );
    expect(screen.getByRole("link", { name: "Dados do Google" })).toHaveAttribute(
      "href",
      "/legal/privacy#dados-do-google",
    );
    expect(screen.queryByText(/dias de teste grátis/)).not.toBeInTheDocument();
  });

  it("mostra o teste e os limites de cada plano e vincula o cadastro ao plano selecionado", () => {
    render(<LandingPublica marca={marca} idioma="pt-BR" modo="aberto" planos={[pago, teste]} />);
    const cards = screen.getAllByRole("article").filter((card) => within(card).queryByRole("link"));
    expect(within(cards[0]).getByText("Acesso após o primeiro pagamento")).toBeInTheDocument();
    expect(within(cards[0]).getByRole("link", { name: "Escolher plano" })).toHaveAttribute(
      "href",
      "/signup?plano=mensal",
    );
    expect(within(cards[1]).getByText("7 dias de teste grátis")).toBeInTheDocument();
    expect(within(cards[1]).getByText("Pessoas na equipe · 5")).toBeInTheDocument();
    expect(within(cards[1]).getByRole("link", { name: "Começar teste grátis" })).toHaveAttribute(
      "href",
      "/signup?plano=anual",
    );
  });

  it("respeita cadastro somente por convite", () => {
    render(<LandingPublica marca={marca} idioma="pt-BR" modo="so_convite" planos={[teste]} />);
    expect(screen.getByText("O cadastro é feito por convite.")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Começar teste grátis" })).not.toBeInTheDocument();
  });
});
