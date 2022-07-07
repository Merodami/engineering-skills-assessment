/**
 * 3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.
 *
 * Using newer perks from typescript and javascript on the lastest versions, we can reduce number of lines in code also, with DI we can add extended testing support
 */
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

export default class Dpk {
  // We should pass crypto on constructor for DI
  constructor(protected crypto: any) {}

  deterministicPartitionKey(event?: any): void | string {
    let partitionKey;

    if (event) {
      partitionKey = this.isString(event?.partitionKey)
        ? event.partitionKey
        : this.createHash(JSON.stringify(event));
    }

    partitionKey =
      partitionKey && this.isString(partitionKey)
        ? JSON.stringify(partitionKey)
        : TRIVIAL_PARTITION_KEY;

    if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
      partitionKey = this.createHash(partitionKey);
    }

    return partitionKey;
  }

  private createHash(input: string): string {
    return this.crypto.createHash("sha3-512").update(input).digest("hex");
  }

  private isString(input: any): boolean {
    return typeof input === "string";
  }
}
