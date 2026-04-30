// controllers/user.controller.js

const userService = require("../services/user.service");

const { success, error } = require("../utils/apiResponse");

const getUsers = async (req, res) => {
  try {
    const users= await userService.getUsers();
    return res.json(success(users));
  } catch (err) {
    res.status(500).json(error(err.message));
  }
};


const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(success(user));
  } catch (err) {
    res.status(500).json(error(err.message));
  }
};


const createUser = async (req, res) => {
   try {
    const user = await userService.createUser(req.body);
    res.status(201).json(success(user));
  } catch (err) {
    res.status(500).json(error(err.message));
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user = await userService.deleteUserById(req.params.id);
    res.json(success(user));
  } catch (err) {
    res.status(500).json(error(err.message));
  }
};

const updateUserById = async (req, res) => {
  try {
    const user = await userService.updateUserById(req.params.id, req.body); 
    res.json(success(user));
  } catch (err) {
    res.status(500).json(error(err.message));
  }
};


module.exports = {
  getUsers,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById
};
