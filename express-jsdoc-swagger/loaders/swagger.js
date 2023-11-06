const expressJSDocSwagger = require("express-jsdoc-swagger");

module.exports = (app) => {
  const options = {
    info: {
      version: '1.0.0',
      title: 'Hello world',
      license: {
        name: 'MIT',
      },
    },
    filesPattern: ['../routers/**.js'],
    baseDir: __dirname,
  };

  expressJSDocSwagger(app)(options);
};
