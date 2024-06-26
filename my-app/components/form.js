import AddEmployeeForm from "./addEmployeeForm";
import UpdateEmployeeForm from "./updateEmployeeForm";
import { useSelector } from "react-redux";
import { useReducer } from "react";

const formReducer = (state,event) => {
    return {
        ...state,
        [event.target.name]:event.target.value
    }
}



export default function Form(){
    const [formData, setFormData] = useReducer(formReducer,{} )
    const formid = useSelector((state)=> state.app.client.formid)
    console.log("formid:", formid);
    return(
        <div className='container mx-auto py-5'>
            { formid ? UpdateEmployeeForm({formid,formData,setFormData}):AddEmployeeForm({formData,setFormData})}
        </div>
    )
}