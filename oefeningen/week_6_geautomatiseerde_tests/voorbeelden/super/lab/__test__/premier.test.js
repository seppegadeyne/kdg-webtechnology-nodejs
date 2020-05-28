const request = require("supertest");
const app = require("../app");


describe("Test speeldagen", () => {

  test("GET speeldagen", async () => {
	const res = await request(app).get("/api/speeldagen");
	expect(res.statusCode).toBe(200);
	expect(res.body.length).toBe(10);
  });


  test("GET speeldag matchen", async () => {
	const res = await request(app).get("/api/speeldagen/4");
	expect(res.statusCode).toBe(200);
	expect(res.body[0].date).toBe("2015-08-29");
  });

  test("GET onbestaande speeldag matchen", (done) =>
	request(app).get("/api/speeldagen/0")
	  .expect(404, done)
  );

});

describe("Test data matchen", () => {

  test("GET datum matchen", async () => {
	const res = await request(app).get("/api/speeldagen/4/datum/2015-08-30");
	expect(res.statusCode).toBe(200);
	expect(res.body.length).toBe(2);
	expect(res.body[0].date).toBe("2015-08-30");
	expect(res.body[1].date).toBe("2015-08-30");
  });

  test("PATCH datum matchen", async () => {
	const res = await request(app).patch("/api/speeldagen/4")
	  .send({
  	"date": "2014-08-29",
    "team1": "Southampton",
    "score2": 4
	});
	expect(res.statusCode).toBe(200);
	expect(res.body).toEqual({
	  "date": "2014-08-29",
	  "team1": "Southampton",
	  "team2": "Norwhich",
	  "score1": 3,
	  "score2": 4
	});
	const getres = await request(app).get("/api/speeldagen/4");
	expect(getres.body).toContainEqual({
	  "date": "2014-08-29",
	  "team1": "Southampton",
	  "team2": "Norwhich",
	  "score1": 3,
	  "score2": 4
	});
  });
});