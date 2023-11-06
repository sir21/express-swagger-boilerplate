const { sayHelloTo } = require("../controllers/hello");

module.exports = (app) => {
  /**
   * GET /hello
   * @summary This is the summary of the endpoint
   * @param {string} name.query.required - name param for greeting
   * @return {string} 200 - success response
   */
  app.get('/hello', (req, res) => {
    res.send(sayHelloTo(req.query.name));
  });

  /**
   * A RequestHelloBody
   * @typedef {object} RequestHelloBody
   * @property {string} name - name for greeting
   */
  /**
   * POST /hello
   * @summary This is the summary of the endpoint
   * @param {RequestHelloBody} request.body.required - name param for greeting
   * @return {string} 200 - success response
   */
  app.post("/hello", (req, res) => {
    res.send(sayHelloTo(req.body.name));
  });
};
