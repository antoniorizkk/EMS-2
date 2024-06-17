const mongoose =require("mongoose");


const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "PLease add employee name"],
    },
    email: {
        type: String,
        required: [true, "PLease add employee email"],
    },
    salary: {
        type: Number,
        required: [true, "PLease add employee salary"],
    },
    date: {
        type: String,
        required: [true, "PLease add employee bod"],
    },
    status: {
        type: String,
        required: [true, "PLease add employee status"],
    }
});

module.exports = mongoose.model("Employee", employeeSchema);