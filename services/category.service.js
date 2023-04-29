const service = require('../models/category.model');

// service Models
exports.getAllCategory = async () => {
  return await service.find();
};

exports.createCategory = async (category) => {
  return await service.create(category);
};
exports.getByIdCategory = async (id) => {
  return await service.findById(id);
};

exports.updateCategory = async (id, category) => {
  return await service.findByIdAndUpdate(id, category);
};

exports.deleteCategory = async (id) => {
  return await service.findByIdAndDelete(id);
};

