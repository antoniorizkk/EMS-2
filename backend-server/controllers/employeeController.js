const asyncHandler = require("express-async-handler")
const Employee = require("../models/employeeModel");

//get all employees
const getEmployees = asyncHandler(async (req,res)=>{
    const employees = await Employee.find({})
    res.status(200).json({message:/*"Get All Employees"*/ employees})
})

//get employee
const getEmployee = asyncHandler(async (req,res)=> {
    const employee = await Employee.findById(req.params.id);
    if(!employee){
        res.status(404);
        throw new Error("Employee not found");
    }
    res.status(200).json(employee);
})

//create employee
const createEmployee = asyncHandler(async (req,res)=>{
    const {name, email, salary, date, status} = req.body;

    if(!name || !email || !salary || !date || !status){
        res.status(400);
        throw new Error("All fields are required.")
    }

    const employee = await Employee.create(
        {name,email,salary, date, status}
    )

    res.status(200).json({employee})
})

//update employee
const updateEmployee = asyncHandler(async (req,res)=>{
    const employee = await Employee.findById(req.params.id);
    if(!employee){
        res.status(404);
        throw new Error("Employee not found");
    }

    const updateEmployee = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );

    res.status(200).json(updateEmployee);
})

//delete Employee
const deleteEmployee = asyncHandler(async (req,res)=>{
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if(!employee){
        res.status(404);
        throw new Error ("Employee not found");
    }

    //await Employee.remove();
    res.status(200).json(employee);
})

module.exports = {getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee}