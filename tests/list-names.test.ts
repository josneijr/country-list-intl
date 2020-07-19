import { listNames } from "../index";
import { expect } from "chai";

describe("List countries names", () => {
  it("should list countries in en-US", () => {
    const result = listNames("en-US");

    expect(result.length).to.be.eq(249);
  });

  it("should list countries in pt-BR", () => {
    const result = listNames("pt-BR");

    expect(result.length).to.be.eq(249);
  });

  it("should list countries in default en-US when no locale is set", () => {
    const result = listNames();
    const resultEnUs = listNames("en-US");

    expect(result).to.be.deep.eq(resultEnUs);
  });
});
