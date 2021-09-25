'use strict';

const Hashmap = require('../codeChallenges/codeChallenge_30/hashTable');


describe("HASH TABLE TESTS", () => {
  let hashTable;
  beforeAll(() => {
    hashTable = new Hashmap(5000);
    hashTable.add("name", "Alaa");
    hashTable.add("age", "24");
    hashTable.add("job", "Full Stack Developer");
  });

  it("It Should check the key/value in your hashtable results ", () => {
    const hash1 = hashTable.hash("name");
    const hash2 = hashTable.hash("age");
    const hash3 = hashTable.hash("job");
    expect(hashTable.storage[hash1].head.value).toEqual({ name: "Alaa" });
    expect(hashTable.storage[hash2].head.value).toEqual({age: "24" });
    expect(hashTable.storage[hash3].head.value).toEqual({ job: "Full Stack Developer" });
    expect(hashTable.storage[hash3].head.value["job"]).toEqual("Full Stack Developer");
  });


  it("It Should be check the retrieving based on a key returns the value stored", () => {
    expect(hashTable.get("name")).toEqual("Alaa");
    expect(hashTable.get("age")).toEqual("24");
    expect(hashTable.get("job")).toEqual("Full Stack Developer");
  });


  it("It Should Successfully returns null for a key that does not exist in the hashtable", () => {
    expect(hashTable.get("test1")).toBeNull();
    expect(hashTable.get("test2")).toBeNull();
  });


  it("It Should handle a collision within the hashtable", () => {
    hashTable.add("lolo", "lala");
    const hash3 = hashTable.hash("job");
    expect(hashTable.storage[hash3].head.value).toEqual({
      job: "Full Stack Developer",
    });
    
  });


  it("It Should retrieve a value from a bucket within the hashtable that has a collision", () => {
    hashTable.add("lolo", "lala");

    expect(hashTable.get("job")).toEqual("Full Stack Developer");
    expect(hashTable.get("lolo")).toEqual("lala");
  });


  it("It should hash a key to an in-range value", () => {
    const hashINRange = hashTable.hash("name");

    expect(hashINRange).toBeLessThan(hashTable.storage.length);
    expect(hashINRange).toBeLessThan(5000);
  });


  it("It Should test the hash if it contains a key or not", () => {
    expect(hashTable.contains("name")).toBeTruthy();
    expect(hashTable.contains("test")).toBe(false);
  });
});