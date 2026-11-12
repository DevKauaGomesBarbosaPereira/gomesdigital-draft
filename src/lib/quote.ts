export type ProjectScope = { service: string; pages: number; features: string[] };

export function buildQuote(scope: ProjectScope, name = "", business = "") {
  return ["Olá, Gomes Digital Facilities! Gostaria de solicitar um orçamento.", name.trim() && `Nome: ${name.trim()}`, business.trim() && `Negócio: ${business.trim()}`, `Projeto: ${scope.service}`, `Páginas: ${scope.pages}`, `Recursos: ${scope.features.length ? scope.features.join(", ") : "Essenciais"}`].filter(Boolean).join("\n");
}