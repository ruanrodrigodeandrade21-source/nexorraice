import { describe, expect, it } from "vitest";
import { rootMeta } from "@/routes/__root";

describe("Root page metadata", () => {
  it("uses Nexo branding and never attributes the site to Lovable", () => {
    const serialized = JSON.stringify(rootMeta);

    expect(rootMeta).toContainEqual({ name: "author", content: "Nexo Automação" });
    expect(serialized).not.toContain("Lovable");
    expect(rootMeta.some((entry) => "name" in entry && entry.name === "twitter:site")).toBe(false);
  });

  it("keeps the generic social preview card", () => {
    expect(rootMeta).toContainEqual({ name: "twitter:card", content: "summary_large_image" });
  });
});
