const Categories = require("../models/Categories");
const categoriesMock = require("../mock/categories.json");
const Masters = require("../models/Masters");
const mastersMock = require("../mock/masters.json");
const Client = require("../models/Clients");
const clientMock = require("../mock/client.json");

module.exports = async () => {
  const categories = await Categories.find();
  if (categories.length !== categoriesMock.length) {
    await createInitialEntity(Categories, categoriesMock);
  }
  const clients = await Client.find();
  if (clients.length !== mastersMock.length) {
    await createInitialEntity(Client, mastersMock);
  }
  const masters = await Masters.find();
  if (masters.length !== clientMock.length) {
    await createInitialEntity(Masters, clientMock);
  }
};
async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item.id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}
