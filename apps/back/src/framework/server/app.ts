import Fastify from "fastify";
const createApp = async () => {
  const fastify = Fastify({
    logger: true,
  });

  // Declare a route
  fastify.get("/", async function handler(request, reply) {
    return { hello: "world" };
  });
  return fastify;
};

export { createApp };
