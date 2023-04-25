const fetchData = require("./async");

it("Should return correct post with then", () => {
	fetchData(1).then((post) => {
		expect(post.id).toBe(1);
	});
});
it("Should return correct post with await", async () => {
	const post = await fetchData(1);
	expect(post.id).toBe(1);
});
