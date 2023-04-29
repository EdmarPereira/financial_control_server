const service = require('../services/category.service');

exports.getAllCategory = async (req, res) => {
  try {
    const data = await service.getAllCategory();
    res.json({ data, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const data = await service.createCategory(req.body);
    res.json({ data, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getByIdCategory = async (req, res) => {
  try {
    const data = await service.getByIdCategory(req.params.id);
    res.json({ data, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const data = await service.updateCategory(req.params.id, req.body);
    res.json({ data, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteByIdCategory = async (req, res) => {
  try {
    const data = await service.deleteCategory(req.params.id);
    res.json({ data, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
