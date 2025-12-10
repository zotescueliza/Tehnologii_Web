const { Op } = require("sequelize");
const Employee = require("../models/employee");

const router = require("express").Router();

// /api/employees
router
  .route("/employees")
  // GET /api/employees?minSalary=1000&name=an&simplified=true
  .get(async (req, res) => {
    const { minSalary, simplified, name } = req.query;

    try {
      const employees = await Employee.findAll({
        where: {
          // filtrare după salariu minim
          ...(minSalary && { salary: { [Op.gt]: minSalary } }),
          // filtrare după nume (în firstName sau lastName)
          ...(name && {
            [Op.or]: [
              { firstName: { [Op.like]: `%${name}%` } },
              { lastName:  { [Op.like]: `%${name}%` } },
            ],
          }),
        },
        // dacă simplified=true, nu trimitem id-ul
        attributes: simplified ? { exclude: ["id"] } : undefined,
      });

      return res.status(200).json(employees);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  })

  // POST /api/employees
  .post(async (req, res) => {
    try {
      const newEmployee = await Employee.create(req.body);
      return res.status(201).json(newEmployee);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

// /api/employees/:id
router
  .route("/employees/:id")
  // GET /api/employees/1
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
      return res.status(500).json({ error: "Internal server error" });
    }
  })

  // PUT /api/employees/1
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
      return res.status(500).json({ error: "Internal server error" });
    }
  })

  // DELETE /api/employees/1
  .delete(async (req, res) => {
    try {
      const deletedCount = await Employee.destroy({
        where: { id: req.params.id },
      });

      if (deletedCount === 0) {
        return res
          .status(404)
          .json({ error: `Employee with id ${req.params.id} does not exist` });
      }

      // 204 = No Content
      return res.status(204).send();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

module.exports = router;
