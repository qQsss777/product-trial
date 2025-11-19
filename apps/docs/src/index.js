import Fastify from "fastify";
import fs from "fs";
import yaml from "js-yaml";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
const fastify = Fastify({ logger: true });
// Charger le fichier YAML
const openapiDoc = yaml.load(fs.readFileSync("./api/openapi-specs.yaml", "utf8"));
await fastify.register(fastifySwagger, {
    mode: "static",
    specification: {
        document: openapiDoc,
    },
});
await fastify.register(fastifySwaggerUI, {
    routePrefix: "/docs",
    uiConfig: {
        docExpansion: "list",
        deepLinking: true,
    },
});
try {
    await fastify.listen({ port: 3000 });
}
catch (err) {
    fastify.log.error(err);
    process.exit(1);
}
