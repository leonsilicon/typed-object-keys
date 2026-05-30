import { expect, expectTypeOf, test } from "vite-plus/test";
import objectKeys from "../src/index.ts";

test("returns object keys", () => {
  const keys = objectKeys({ id: "user_123", name: "Ada" });

  expect(keys).toEqual(["id", "name"]);
  expectTypeOf(keys).toEqualTypeOf<Array<"id" | "name">>();
});
