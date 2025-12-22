import { expect, test } from "vitest";

test("equal 3", () => {
  expect((() => 3)()).toEqual(3);
});
