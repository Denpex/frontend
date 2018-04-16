import * as helpers from "../../static/logic/helpers";

test("range same value", () => {
  expect(helpers.range(0, 0)).toEqual([0]);
  expect(helpers.range(42, 42)).toEqual([42]);
  expect(helpers.range(-42, -42)).toEqual([-42]);
});

test("range inclusive positive incremental", () => {
  expect(helpers.range(3, 7)).toEqual([3, 4, 5, 6, 7]);
  expect(helpers.range(0, 2)).toEqual([0, 1, 2]);
});

test("range inclusive positive decremental", () => {
  expect(helpers.range(7, 3)).toEqual([7, 6, 5, 4, 3]);
  expect(helpers.range(2, 0)).toEqual([2, 1, 0]);
});

test("range inclusive negative incremental", () => {
  expect(helpers.range(-7, -3)).toEqual([-7, -6, -5, -4, -3]);
  expect(helpers.range(-2, 0)).toEqual([-2, -1, 0]);
});

test("range inclusive negative decremental", () => {
  expect(helpers.range(-3, -7)).toEqual([-3, -4, -5, -6, -7]);
  expect(helpers.range(0, -2)).toEqual([0, -1, -2]);
});

test("calculateDescription empty corners", () => {
  expect(helpers.calculateDescription(helpers.MIN_COLUMN, helpers.MIN_ROW)).toBe(" ");
  expect(helpers.calculateDescription(helpers.MIN_COLUMN, helpers.MAX_ROW)).toBe(" ");
  expect(helpers.calculateDescription(helpers.MAX_COLUMN, helpers.MIN_ROW)).toBe(" ");
  expect(helpers.calculateDescription(helpers.MAX_COLUMN, helpers.MAX_ROW)).toBe(" ");
});

test("calculateDescription empty field", () => {
  for (let i of helpers.range(1, 24)) {
    for (let j of helpers.range(1, 16)) {
      expect(helpers.calculateDescription(i, j)).toBeFalsy();
    }
  }
});

test("calculateDescription alpha rows", () => {
  const rows = " abcdefghijklmnop ";

  for (let row of helpers.range(0, 17)) {
    let expectedLetter = rows.charAt(row);

    expect(helpers.calculateDescription(0, row)).toBe(expectedLetter);
    expect(helpers.calculateDescription(25, row)).toBe(expectedLetter);
  }
});

test("calculateDescription numeric columns", () => {
  for (let column of helpers.range(1, 24)) {
    expect(helpers.calculateDescription(column, 0)).toBe(column);
    expect(helpers.calculateDescription(column, 17)).toBe(column);
  }
});

test("remove position from an array of positions", () => {
  const ballPosition = [12, 9];
  
  expect(helpers.removeSelf([ballPosition, [12, 5]], [12, 5])).toEqual([[12, 9]]);
  expect(helpers.removeSelf([ballPosition, [12, 5]], [12, 11])).toEqual([[12, 9], [12, 5]]);
});

test("constants", () => {
  expect(helpers.MIN_COLUMN).toBe(0);
  expect(helpers.MIN_ROW).toBe(0);
  expect(helpers.MAX_COLUMN).toBe(25);
  expect(helpers.MAX_ROW).toBe(17);
});
