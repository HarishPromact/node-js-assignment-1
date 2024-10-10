
/**
 * Define the 'homeController' function to handle HTTP requests for the '/' URL. and render the home page.
 * @param {*} req 
 * @param {*} res 
 */
const homeController = (req, res) => {
    /* Check if the request URL is '/' and the HTTP method is 'GET'.*/
  if (req.url === "/" && req.method === "GET") {
    
    /*Send a 200 OK response with the home page content as the body of the response.*/
    res.writeHead(200, { "Content-Type": "text/html" });

    /*Send the home page content as the body of the response.*/
    res.end(
      `<h1>Welcome to the Home Page</h1>  <a href="/create">Create User</a>  <a href="/users">Users List</a> `
    );
  }
};

export default homeController;
