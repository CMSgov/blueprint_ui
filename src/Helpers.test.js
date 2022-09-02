import { formatCatalogTitle } from "./Helpers";

describe("Catalog helper methods", () => {
  it("formatCatalogTitle formats proper catalog titles", () => {
    let rawCatalogTitle = "CMS_ARS_3_1_HIGH";
    let formattedTitle = formatCatalogTitle(rawCatalogTitle);
    expect(formattedTitle).toEqual("CMS ARS 3.1 (High)");
  });

  it("formatCatalogTitle does not format irregular catalog titles", () => {
    let rawCatalogTitle = "CMS_ARS_3_1";
    let formattedTitle = formatCatalogTitle(rawCatalogTitle);
    expect(formattedTitle).toEqual("CMS_ARS_3_1");
  });
});
