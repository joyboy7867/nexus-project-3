"use client"
import axios from "axios";
import { useState } from "react";
import {Toaster,toast} from "react-hot-toast"
import {z} from "zod"
type FormData = {
    email: string;
    name: string;
    message:string
  };

const schema=z.object({
    email:z.string().email(),
    name:z.string(),
    message:z.string().min(3)
})

const Contact = () => {
     const [formData, setFormData] = useState<FormData>({ email: '', message: '',name:"" });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlesubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    let main
    e.preventDefault()
    try {
        const validate=schema.parse(formData)
        if(validate){
        await axios.post("/api/feedback",{
        data:formData}).then((found:any)=>{
          
          toast.success('Successfully received Your Info !!')
          
        })
       ;
         
        
       
        
        }
        else{toast.error('Something Went Wrong!!')}
        
        
    } catch (error) {
        if(error instanceof z.ZodError){
            console.log(error.errors[0].code)
        }
        
    }
  }

  
  
    return <div className="pt-28">
     <div><Toaster/></div>
        <section className="text-gray-600 body-font relative">
            <form  onSubmit={handlesubmit}>
            <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us/FeedBack</h1>

    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input onChange={handleChange} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input onChange={handleChange} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <input onChange={handleChange} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div className="p-2 w-full">
          <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
        </div>
       
      </div>
    </div>
  </div>


            </form>
  
</section>

    </div>;
}



export default Contact;