import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LandingPublica } from "@/app/landing-publica";

describe("landing pública", () => {
  it("apresenta a marca e permite acessar o login e os documentos legais", () => {
    render(<LandingPublica nome="CRM Exemplo" />);
    expect(screen.getAllByText("CRM Exemplo").length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: "Entrar" })).toHaveAttribute("href", "/login");
    expect(screen.getByRole("link", { name: "Termos de uso" })).toHaveAttribute(
      "href",
      "/legal/terms",
    );
    expect(screen.getAllByRole("link", { name: "Política de privacidade" })[0]).toHaveAttribute(
      "href",
      "/legal/privacy#dados-do-google",
    );
  });
});
