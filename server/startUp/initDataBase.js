const Categories = require("../models/Category");
const categoriesMock = require("../mock/categories.json");
const Masters = require("../models/Masters");
const mastersMock = require("../mock/masters.json");

module.exports = async () => {
  const categories = await Categories.find();
  if (categories.length !== categoriesMock.length) {
    await createInitialEntity(Categories, categoriesMock);
  }
  const masters = await Masters.find();
  if (masters.length !== mastersMock.length) {
    await createInitialEntity(Masters, mastersMock);
  }
};
async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}
