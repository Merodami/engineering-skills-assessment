import dpk from "@src/dpk";
import crypto from "crypto";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = new dpk(crypto).deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = new dpk(crypto).deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});
