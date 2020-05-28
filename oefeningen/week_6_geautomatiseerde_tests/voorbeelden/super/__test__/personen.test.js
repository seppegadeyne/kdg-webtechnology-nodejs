const request = require("supertest");
// te testen app
const app = require("../app");



test("GET lijst van personen async", async () => {
	const res = await request(app).get("/api/personen");
	expect(res.statusCode).toBe(200);
	expect(res.body.length).toBe(3);
});

test("GET lijst van personen promise", () => {
	return request(app).get("/api/personen")
		.then(res => {
			expect(res.body.length).toBe(3);
			let karl = res.body.find(x => x.id = "142742")
			expect(karl).toBeDefined();
			expect(karl).toHaveProperty("naam");
			expect(karl.naam).toBe("karl");
		})
});

test("GET lijst van personen supertest .expect and promise", () => {
	return request(app).get("/api/personen")
		.expect(200)
		.then(res => expect(res.body.length).toBe(3))
});

test("GET lijst van personen supertest .expect and done", (done) => {
	 request(app).get("/api/personen")
		.expect(200)
		 // supertest expect(function) does not support done, use end
		.expect(res => {
				expect(res.body.length).toBe(3)
			}
		)
		 .end(done)
});


test("GET persoon met id",() => {
	let id = 163361
	return request(app).get("/api/personen/" + id)
		.expect(200)
		.then(res => {
			expect(res.body.id).toBe(id)
		})
})

test("update persoon promises", () => {
	let url = "/api/personen/163361";
	return request(app).put(url)
		.send("id=163361&naam=groucho&geboortedatum=01/04/1987")
		.then(res => {
			expect(res.statusCode).toBe(200);
			return request(app).get("/api/personen/163361");
		})
		.then(res => {
			expect(res.body).toEqual({
				id: 163361,
				naam: "groucho",
				geboortedatum: "01/04/1987"
			});
		})
});

test("Voeg persoon toe met supertest/NOK", () => {
	request(app).post("/api/personen")
		.send("naam=chico&geboortedatum=22/03/1887")
		.expect(666)  // test ongeldige status code
		.expect("Location", /api\/personen\/[0-9]{6}/)
});


test("Voeg urlencoded persoon toe met supertest/OK", (done) => {
	return request(app).post("/api/personen")
		.send("naam=chico&geboortedatum=22/03/1887")
		.expect(201)
		.expect("Location", /api\/personen\/[0-9]{6}/, done)
});


test("Voeg json persoon toe met promise", () => {
	return request(app).post("/api/personen")
		.send({
			"naam": "chico",
			"geboortedatum": "22/03/1887"
		})
		.then(res => {
			expect(res.statusCode).toBe(201);
			expect(res.get("Location")).toMatch(/\/api\/personen\/[0-9]{6}$/);
		})
});




