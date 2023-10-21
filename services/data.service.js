const moment = require('moment');
const service = require('../models/data.model');

async function filterAll(data, month, year) {
  let totalRev = 0;
  let totalExp = 0;

  data.map((e) => {
    if (e.type === 'Receita' && e.ignore === false) {
      totalRev += e.value;
    } else if (e.ignore === false) {
      totalExp += e.value;
    }
  });

  let currentMonthFilteredSorted = await data.sort((a, b) => {
    return moment(a.date).diff(b.date);
  });

  currentMonthFilteredSorted = currentMonthFilteredSorted.reverse();

  const obj = {
    expenses: currentMonthFilteredSorted,
    totalRev,
    totalExp,
    difference: totalRev - totalExp,
    month,
    year,
  };

  return obj;
}

exports.getData = async (params) => {
  const { month, year, category } = params;
  let query = {};

  if (month !== undefined) {
    query.month = month;
  }
  if (year !== undefined) {
    query.year = year;
  }
  if (category !== undefined) {
    query.avatarType = category;
  }

  const data = await service.find(query);

  const values = await filterAll(data, month, year);

  return values;
};

exports.getMonths = async () => {
  let arr = [];

  let currMonthDesc = new Date().toLocaleString('pt-BR', { month: 'long' });
  currMonthDesc =
    currMonthDesc.charAt(0).toUpperCase() + currMonthDesc.slice(1).toString();
  const currYear = new Date().toISOString().split('-');
  let currMonth = currMonthDesc + ' - ' + currYear[0];

  const data = await service.find();
  data.map((e) => {
    let monthDesc = new Date(e.date).toLocaleString('pt-BR', { month: 'long' });
    monthDesc =
      monthDesc.charAt(0).toUpperCase() + monthDesc.slice(1).toString();
    const year = new Date(e.date).toISOString().split('-')[0];
    if (!arr.includes(monthDesc + ' - ' + year)) {
      arr.push(monthDesc + ' - ' + year);
    }
  });

  if (!arr.includes(currMonth)) {
    arr.push(currMonth);
  }

  arr.reverse();

  return arr;
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
