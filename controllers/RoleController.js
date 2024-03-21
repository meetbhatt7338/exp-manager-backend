const roleModel = require("../models/RoleModel");

const addRole = async (req, res) => {
  try {


    const savedRole = await roleModel.create(req.body);

    if (savedRole) {
      res.status(201).json({
        status: "success",
        data: savedRole,
      });
    } else {
      res.status(404).json({
        status: "fail",
        message: "Role not getting by reqbody"
      });
    }

  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
const getRoles = async (req, res) => {
  try {
    const roles = await roleModel.find({ status: true });
    res.status(200).json({
      status: "success",
      data: roles,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = {
  addRole,
  getRoles,
};