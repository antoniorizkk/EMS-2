const BASE_URL = "http://localhost:5001"

//all employees
export const getEmployees = async () => {
    const response = await fetch(`${BASE_URL}/api/employees/`);
    const json = await response.json();

    return json;
}

//single employee
export const getEmployee = async (employeeId) => {
    const response = await fetch(`${BASE_URL}/api/employees/${employeeId}`);
    const json = await response.json();

    if(json){
        return json;
    }else{
        return{}
    }
}

//create new employee
export async function addEmployee(formData){
    try{
        const Options = {
            method: 'POST',
            headers: {'Content-Type':"application/json"},
            body:  JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}/api/employees`, Options)
        const json = await response.json()

        return json;
    } catch (error) {
        return error;
    }
}

//update employee
export async function updateEmployee(employeeId, formData){
    const Options = {
        method: 'PUT',
        headers: {'Content-Type':"application/json"},
        body:  JSON.stringify(formData)
    }

    const response = await fetch(`${BASE_URL}/api/employees/${employeeId}`, Options)
    const json = await response.json()
    return json
}

//delete employee

export async function deleteEmployee(employeeId){
    console.log(`delete function called with ID: ${employeeId}`)
    const Options = {
        method: 'DELETE',
        headers: {'Content-Type':"application/json"}
    }

    const response = await fetch(`${BASE_URL}/api/employees/${employeeId}`, Options)
    const json = await response.json()
    return json
}