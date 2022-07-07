import dpk from "@src/dpk";
import crypto from "crypto";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = new dpk(crypto).deterministicPartitionKey();

    expect(trivialKey).toBe("0");
  });

  it("Test if partition key already exists", () => {
    const testEvent = {
      partitionKey: "1234",
    };

    const trivialKey = new dpk(crypto).deterministicPartitionKey(testEvent);
    expect(trivialKey).toBe('"1234"');
  });

  it("Test if TestEvent is empty", () => {
    const testEvent = {};

    const trivialKey = new dpk(crypto).deterministicPartitionKey(testEvent);
    expect(trivialKey).toBe(
      '"c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"'
    );
  });
});
