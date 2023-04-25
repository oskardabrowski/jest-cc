const sum = require("./sum");

describe("Example tests", () => {
	it("Should adds 1 + 2 = 3", () => {
		const result = sum(1, 2);
		expect(result).toBe(3);
	});

	it("object assignment", () => {
		const obj = {};
		// expect(obj).toBe({}); <- not pass because it is different object
		// expect(obj).toBe(obj); <- will pass
		expect(obj).toEqual({});
	});
});

describe("truthy or falsy", () => {
	it("null", () => {
		const n = null;
		expect(n).toBeFalsy();
		expect(n).not.toBeTruthy();
		expect(n).toBeNull();
		expect(n).not.toBeUndefined();
	});
});

describe("numbers", () => {
	it("two plus to", () => {
		const value = 2 + 2;
		expect(value).toBe(4);
		expect(value).toBeGreaterThan(3);
		expect(value).toBeGreaterThanOrEqual(4);
		expect(value).toBeLessThan(7);
		expect(value).toBeLessThanOrEqual(4);
	});

	it("adding floats", () => {
		const value = 0.1 + 0.2;
		expect(value).toBeCloseTo(0.299999999999999);
	});
});

describe("strings", () => {
	it("There is no I in team", () => {
		expect("team").not.toMatch(/I/);
	});
});

describe("arrays", () => {
	it("is in array", () => {
		const shoppingList = [
			"diapers",
			"kleenex",
			"trash bags",
			"paper towels",
			"milk",
		];

		expect(shoppingList).toContain("milk");
	});
});

function compileAndroidCode() {
	throw new Error("You Are using the wrong JDK");
}

describe("exceptions", () => {
	it("compiling android goes as excepted", () => {
		expect(() => compileAndroidCode()).toThrow();
		expect(() => compileAndroidCode()).toThrow(Error);
		expect(() => compileAndroidCode()).toThrow("You Are using the wrong JDK");
	});
});
