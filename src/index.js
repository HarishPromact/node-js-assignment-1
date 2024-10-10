import { createServer } from "node:http";
import route from "./routes/route.js";

// Create the HTTP server and pass a callback function that handles incoming requests.
const app = createServer((req, res) => {
  route(req, res);
});

// Start the server and listen on port 3000.
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
