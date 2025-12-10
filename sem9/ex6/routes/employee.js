const { Op } = require("sequelize");
const Employee = require("../models/employee");
const router = require("express").Router();
router
  .route("/employees")
  .get(async (req, res) => {
    // query params
    const { minSalary, name, simplified, sortBy, sortOrder } = req.query;

    try {
      const employees = await Employee.findAll({
        where: {
          ...(minSalary && { salary: { [Op.gt]: minSalary } }),

          ...(name && {
            [Op.or]: [
              { firstName: { [Op.like]: `%${name}%` } },
              { lastName: { [Op.like]: `%${name}%` } }
            ]
          })
        },
        attributes: simplified
          ? { exclude: ["id"] }   // exemplu: exclude id
          : undefined,

        order: sortBy
          ? [[sortBy, sortOrder?.toUpperCase() === "DESC" ? "DESC" : "ASC"]]
          : undefined
      });

      return res.status(200).json(employees);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  })

  .post(async (req, res) => {
    try {
      const newEmployee = await Employee.create(req.body);
      return res.status(201).json(newEmployee);
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  });

router
  .route("/employees/:id")
  .get(async (req, res) => {
    try {
      const employee = await Employee.findOne({
        where: { id: req.params.id },
      });

      if (employee) {
        return res.status(200).json(employee);
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} does not exist` });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  })

  .put(async (req, res) => {
    try {
      const employee = await Employee.findByPk(req.params.id);

      if (employee) {
        const updated = await employee.update(req.body);
        return res.status(200).json(updated);
      } else {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} does not exist` });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  });

module.exports = router;
