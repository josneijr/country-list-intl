import enUS from "@data/en-US.json";
import ptBR from "@data/pt-br.json";
import { listAlpha2WithNames } from "@src/index";
import { expect } from "chai";

describe("List countries names with alpha-3 code", () => {
  it("should list countries in en-US", () => {
    const result = listAlpha2WithNames("en-US");

    const expected = {
      [enUS[0].alpha2]: enUS[0].name,
    };

    expect(result.length).to.be.eq(249);
    expect(result[0]).to.be.deep.eq(expected);
  });

  it("should list countries in pt-BR", () => {
    const result = listAlpha2WithNames("pt-BR");

    const expected = {
      [ptBR[0].alpha2]: ptBR[0].name,
    };

    expect(result.length).to.be.eq(249);
    expect(result[0]).to.be.deep.eq(expected);
  });

  it("should list countries in default en-US when no locale is set", () => {
    const result = listAlpha2WithNames();
    const resultEnUs = listAlpha2WithNames("en-US");

    expect(result).to.be.deep.eq(resultEnUs);
  });
});
