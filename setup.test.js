let animals = ["elephant", "zebra", "bear", "tiger"];

describe("animals array", () => {
	beforeAll(() => {
		console.log("Before all");
	});
	afterAll(() => {
		console.log("After all");
	});

	beforeEach(() => {
		animals = ["elephant", "zebra", "bear", "tiger"];
	});
	afterEach(() => {
		animals = ["elephant", "zebra", "bear", "tiger"];
	});

	it("Should add animal to the end of array", () => {
		animals.push("aligator");
		expect(animals[animals.length - 1]).toBe("aligator");
	});
	it("Should add animal to the end of array", () => {
		animals.unshift("monkey");
		expect(animals[0]).toBe("monkey");
	});

	it("Should have initial lenght of 4", () => {
		expect(animals.length).toBe(4);
	});
});

describe("testing something else", () => {
	it("true should be truthy", () => {
		expect(true).toBeTruthy();
	});
});
