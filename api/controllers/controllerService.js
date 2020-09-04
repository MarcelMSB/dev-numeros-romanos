const uuidv4 = require('uuid/v4');

module.exports = app => {
  const databaseData = app.data.database;
  const controller = {};

  const {
    db: databaseMock,
  } = databaseData;

  controller.listCustomerWallets = (req, res) => res.status(200).json(databaseData);

  controller.saveCustomerWallets = (req, res) => {
    const { 
      number,
    } = req.params;

    var item = {
      number: number,
      result: uuidv4()
    };

    databaseMock.data.push(item);

    res.status(201).json(item);
  };

  return controller;
}