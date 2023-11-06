const { sayHelloTo } = require('../controllers/hello');

/**
 * @swagger
 *
 * /hello:
 *  get:
 *    summary: Returns greetings
 *    parameters:
 *      - in: query
 *        name: name
 *        description: name to greet
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: hello
 *        schema:
 *          type: string
 *    
 *  post:
 *    summary: Returns greetings with body data
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *    responses:
 *      200:
 *        description: hello
 *        schema:
 *          type: string
 */
module.exports = app => {
  app.route('/hello').get((req, res) => {
    res.send(sayHelloTo(req.query.name));
  }).post((req, res) => {
    console.log(req.body);
    res.send(sayHelloTo(req.body.name));
  });
};
