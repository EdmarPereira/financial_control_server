const service = require('../models/transaction.model');

exports.getAllData = async () => {
  return await service.find();
};

exports.getAllDataByMonth = async (params) => {
  const obj = params.split('-');
  const date = new Date(obj[0], obj[1] - 1, obj[2]); // 2009-11-10
  const month = date.toLocaleString('pt-BR', { month: 'long' });

  console.log(
    month.charAt(0).toUpperCase() + month.slice(1).toString(),
    obj[0].toString()
  );

  return await service.find({
    month: month.charAt(0).toUpperCase() + month.slice(1).toString(),
    year: obj[0].toString(),
  });
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
