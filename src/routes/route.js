import homeController from "../controllers/homeController.js";
import addUser from "../controllers/addUserController.js";
import createUser from "../controllers/createUserController.js";
import userList from "../controllers/userListController.js";

/**
 * Route function to handle different HTTP requests based on the URL and method.
 * @param {*} req - The HTTP request object.
 * @param {*} res - The HTTP response object.
 */
const route = (req, res) => {
  // Route for the home page (GET request to '/').
  if (req.url === "/" && req.method === "GET") {
    homeController(req, res);

    // Route for creating a new user (URL starts with '/create').
  } else if (req.url.startsWith("/create")) {
    createUser(req, res);

    // Route for adding a new user (POST request to '/add').
  } else if (req.url === "/add" && req.method === "POST") {
    addUser(req, res);

    // Route for displaying the user list (GET request to '/users').
  } else if (req.url === "/users" && req.method === "GET") {
    userList(req, res);

    // Default case for any other URL or method (returns a 404 Not Found response).
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found</h1>");
  }
};

/*Export the 'route' function as the default export of the module.*/
export default route;
