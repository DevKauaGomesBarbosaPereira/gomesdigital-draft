import { describe, expect, it } from "vitest";
import { buildQuote } from "./quote";

describe("quotation scope", () => {
  it("includes the selected service, page count and features in the contact message", () => {
    const message = buildQuote({ service: "Site institucional", pages: 5, features: ["Blog", "WhatsApp"] }, "Kauã", "Clínica");
    expect(message).toContain("Projeto: Site institucional");
    expect(message).toContain("Páginas: 5");
    expect(message).toContain("Recursos: Blog, WhatsApp");
    expect(message).toContain("Nome: Kauã");
  });
});