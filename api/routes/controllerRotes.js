module.exports = app => {
  const controller = app.controllers.controllerService;

  app.route('/roman-numbers/api/databases')
    .get(controller.listResults);

  app.route('/roman-numbers/api/converts/:number')
    .post(controller.convertNumberToSymbol);
}