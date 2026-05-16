// controllers/user.controller.js

const userService = require("../services/user.service");
const logger = require("../utils/logger");
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
    logger.warn(`User created with ID: ${req.body.name}`);
    res.status(201).json(success(user));
  } catch (err) {
    logger.error({
      message: err.message || "unknown error",
      stack: err.stack,
      path: req.originalUrl,
      method: req.method,
    });
    res.status(500).json(error(err.message));
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user = await userService.deleteUserById(req.params.id);
    logger.info(`User deleted with ID: ${req.params.id}`);
    res.json(success(user));
  } catch (err) {
    logger.error({
      message: err.message || "unknown error",
      stack: err.stack,
      path: req.originalUrl,
      method: req.method,
    });
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
