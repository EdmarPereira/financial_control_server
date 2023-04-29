const service = require('../models/transaction.model');

exports.getAllData = async () => {
  return await service.find();
};

exports.createData = async (data) => {
  return await service.create(data);
};
exports.getByIdData = async (id) => {
  return await service.findById(id);
};

exports.updateData = async (id, data) => {
  return await service.findByIdAndUpdate(id, data);
};

exports.deleteData = async (id) => {
  return await service.findByIdAndDelete(id);
};

