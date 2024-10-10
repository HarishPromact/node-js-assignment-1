import fs from "fs";
import path from "path";

/* Define the file path to the data.txt file using the 'path.join' method for cross-platform compatibility. */
const dataFilePath = path.join("D:", "nodejs-assignment-1", "data", "data.txt");

/**
 * Define the 'userList' function to handle HTTP requests for the '/users' URL.
 * @param {Define the 'userList' function to handle HTTP requests for the '/users' URL.} req
 * @param {User List} res
 */
const userList = (req, res) => {
   /* Check if the request URL is '/users' and the HTTP method is 'GET'.*/
  if (req.url === "/users" && req.method === "GET") {
 
     /* Read the contents of the data.txt file using the 'fs.readFile' method. */
    
    fs.readFile(dataFilePath, (err, data) => {
     
       /* If there is an error, send a 500 Internal Server Error response with an error message.*/
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        return res.end("<h1>Internal Server Error</h1>");
      }

      /* Split the data into an array of user names using the 'split' method. */
      const users = data.toString().split("\n");

      /* Send a 200 OK response with the user list as the body of the response. */
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(
        `<h1>Users List</h1><ul>${users
          .map((user) => `<li>${user}</li>`)
          .join("")}</ul>
          
          <a href="/create">Create User</a>`
      );
    });
  } else {
  /* If the request doesn't match '/users' or isn't a 'GET' request, send a 404 Not Found response.*/
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
};

/*Export the 'userList' function as the default export of the module.*/
export default userList;
