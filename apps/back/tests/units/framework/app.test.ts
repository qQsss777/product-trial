import { FastifyInstance } from "fastify";
import { createApp } from "../../../src/framework/server/app.js";

let app: FastifyInstance;

beforeAll(async () => {
  app = await createApp();
  await app.ready();
});

describe("base route", () => {
  it("returns world", async () => {
    const response = await app.inject({
      method: "GET",
      path: "/",
    });
    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ hello: "world" });
  });

  it("method not implemented", async () => {
    const response = await app.inject({
      method: "POST",
      path: "/",
    });
    expect(response.statusCode).toBe(404);
  });
});

describe("wrong route", () => {
  it("returns world", async () => {
    const response = await app.inject({
      method: "GET",
      path: "/dontexist",
    });
    expect(response.statusCode).toBe(404);
  });
});
