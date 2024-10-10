/**
 * Define the 'createUser' function to handle HTTP requests for the '/users' URL.
 * @param {*} req 
 * @param {*} res 
 */
const createUser = (req, res) => {
  /* Check if the request URL is '/create' and the HTTP method is 'GET'. */
  if (req.url === "/create" && req.method === "GET") {

    /* Send a 200 OK response with the create user form as the body of the response.*/
    res.writeHead(200, { "Content-Type": "text/html" });

    /* Send the create user form as the body of the response.*/
    res.end(`
      <form action="/add" method="POST">
        <input type="text" name="username" placeholder="Enter your name" required />
        <button type="submit">Submit</button>
      </form>
       <a href="/">Back to home</a>
    `);
  }
};

/* Export the 'createUser' function as the default export of the module. */
export default createUser;
