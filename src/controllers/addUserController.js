import fs from "fs"; 
import path from "path";  
import { parse } from "querystring";  


// Define the file path to 'data.txt' using 'path.join' for cross-platform compatibility.
const dataFilePath = path.join("D:", "nodejs-assignment-1", "data", "data.txt");

// Define the 'addUser' function to handle HTTP POST requests for adding a new user.
const addUser = (req, res) => {
  // Check if the request URL is '/add' and the HTTP method is 'POST'.
  if (req.url === "/add" && req.method === "POST") {
    let formData = "";  

    // Listen for 'data' events on the request object to collect incoming data chunks.
    req.on("data", (chunk) => {
      formData += chunk.toString();
    });

    // Listen for the 'end' event, which signals that all data has been received.
    req.on("end", () => {
      const parsedData = parse(formData);  
      const username = parsedData.username; 

      // Append the username to the 'data.txt' file.
      fs.appendFile(dataFilePath, `${username}\n`, (err) => {
        // If an error occurs while appending data, send a 500 Internal Server Error response.
        if (err) {
          res.writeHead(500, { "Content-Type": "text/html" });
          return res.end("<h1>Internal Server Error</h1>");
        }

        // If the data is successfully appended, send a 200 OK response with a success message and links.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h3>Data successfully added</h3> 
          <a href="/create">Back to create</a> 
          <a href="/users">Users List</a>`);
      });
    });
  } else {
    // If the request URL or method does not match, send a 404 Not Found response.
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
};

// Export the 'addUser' function as the default export of the module.
export default addUser;
