import supertest from "supertest";

import { app } from "../../server";

describe("Movie endpoints", () => {
  it.skip("GET /api/movies", async () => {
    await supertest(app)
      .get("/api/movies")
      .expect(200)
      .then((response) => {
        // Check the response type and length
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toEqual(1);

        // Check the response data
        // expect(response.body[0]._id).toBe(post.id);
        // expect(response.body[0].title).toBe(post.title);
        // expect(response.body[0].content).toBe(post.content);
      });
  });
});
