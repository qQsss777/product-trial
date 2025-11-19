import { createApp } from "./framework/server/app.js";

const app = await createApp();

app.listen({ port: 3004 }).then(() => {
  console.log("Server running on http://localhost:3004");
});
