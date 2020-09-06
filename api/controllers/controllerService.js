const uuidv4 = require('uuid/v4');

module.exports = app => {
  const service = app.service.convertService;
  const databaseData = app.data.database;
  const controller = {};

  const {
    db: databaseMock,
  } = databaseData;

  controller.listResults = (req, res) => res.status(200).json(databaseData);

  controller.convertNumberToSymbol = (req, res) => {
    const {
      number,
    } = req.params;
    if (number > 3000) {
      res.status(422).json({mesage:"Número deve ser menor que 3000"});
    } else {
      var item = {
        id: uuidv4(),
        number: number,
        result: service.numberToSymbol(number)
      };
      databaseMock.data.push(item);
      res.status(201).json(item);
    }
  };

  return controller;
}