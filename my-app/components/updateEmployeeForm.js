"use client"
import { useReducer } from "react"
import { BiBrush } from "react-icons/bi"
import Success from "./success"
import Bug from "./bug"
import { useQuery,useMutation,useQueryClient } from "react-query"
import {getEmployee, getEmployees, updateEmployee} from "../lib/helper"


export default function UpdateEmployeeForm({formid,formData,setFormData}){

    const queryClient = useQueryClient()
    const {isLoading, isError, data,error} = useQuery(['employees',formid],() => getEmployee(formid))
    const UpdateMutation = useMutation((newData)=> updateEmployee(formid,newData),{
        onSuccess:async(data)=>{
            //queryClient.setQueriesData('employees',(old)=>[data])
            queryClient.prefetchQuery('employees',getEmployees)
        }
    })

    if(isLoading)return <div>Loading...</div>
    if(isError)return <div>Error</div>

    const {name,email,salary,date,status} = data
    const [firstname, lastname] = name ? name.split(' '):formData

    const handleStatusChange = (event) => {
        setFormData({ target: { name: "status", value: event.target.value } });
      };

    const handleSubmit = async (e) => {
        e.preventDefault()
        let userName = `${formData.firstname??firstname} ${formData.lastname??lastname}`
        let updated = Object.assign({},data,formData,{name:userName})
        console.log(updated)
        await UpdateMutation.mutate(updated)
    }

    return(
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={firstname} name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="First Name"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={lastname} name="lastname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Last Name"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={email} name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email"/>
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={salary} name="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Salary"/>
            </div>
            <div className="input-type">
                <input type="date" onChange={setFormData}  defaultValue={date} name="date" className="border px-5 py-3 focus:outline-none rounded-md" placeholder="Salary"/>
            </div>

            <div className="flex gap-10 items-center">
                <div className="form-check">
                    <input type="radio" defaultChecked={status=="Active"} onChange={handleStatusChange} value="Active" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                    <label htmlFor="radioDefault1" className="inline-block text-gray-800 ">
                        Active
                    </label>
                </div>
                <div className="form-check">
                    <input type="radio" defaultChecked={status=="Inactive"} onChange={handleStatusChange} value="Inactive" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
                    <label htmlFor="radioDefault2" className="inline-block text-gray-800 ">
                        Inactive
                    </label>
                </div>
            </div>
            <button className="flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-yellow-500 hover:text-yellow-500 ">
                Update<span className=" px-1"><BiBrush size={24}></BiBrush></span>
                </button>
        </form>
    )
}