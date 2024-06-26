import React from 'react'
import { useForm,Controller } from 'react-hook-form'
function Form() {
    const {  handleSubmit, control, formState:{errors} } = useForm({
        defaultValues:{
            client_name:'',
            client_lname:'',
            client_email:'',
            client_PhoneNumber:null,
            client_service:'',
            client_msg:'',
            client_check:null
            }
    });
   const onSubmit=(data)=>{

    }
  return (
    <form className=' w-full h-full grid gap-6  grid-cols-2'  onSubmit={handleSubmit(onSubmit)} >
        <Controller control={control} rules={
            {
                required:{
                    value:true,
                    message:"Please enter your name"
                }
            }
        }  
        name='client_name'
        render={
            ({onChange,value})=>
                <div className=' flex  flex-col'>
                <label htmlFor="fname" className=' text-2xl mb-4'> Name</label>
                <input type='text' id='fname' className=' border-2 outline-none py-5 rounded' value={value} onChange={onChange}/>
                {errors.client_name && <p className=' text-red-500 text-xl'>{errors.client_name.message}</p>}
                </div>
        }

        />
          <Controller control={control} rules={
            {
                required:{
                    value:true,
                    message:"Please enter your name"
                }
            }
        }  
        name='client_lname'
        render={
            ({onChange,value})=>
                <div className=' flex  flex-col'>
            <label htmlFor="lname" className=' text-2xl mb-4'>last Name</label>
            <input type='text' id='lname' className=' border-2 outline-none py-5 rounded' value={value} onChange={onChange}/>
            {errors.client_lname && <p className=' text-red-500 text-xl'>{errors.client_lname.message}</p>}
            </div>
        }

        />
          <Controller control={control} rules={
            {
                required:{
                    value:true,
                    message:"Please enter your name"
                }
            }
        }  
        name='client_email'
        render={
            ({onChange,value})=>
                <div className=' flex  flex-col'>
            <label htmlFor="email" className=' text-2xl mb-4'> Email</label>
            <input type='email' id='email' className=' border-2 outline-none py-5 rounded' value={value} onChange={onChange}/>
            {errors.client_email && <p className=' text-red-500 text-xl'>{errors.client_email.message }</p>}
            </div>
        }

        />
          <Controller control={control} rules={
            {
                required:{
                    value:true,
                    message:"Please enter your Phone Number"
                },
                pattern:{
                    
                    value:/^(\+?\d{0,4})?\s?-?\s?(\q{3}|\d{3})[\s.-]?\s?(\d{3})[\s.-]?\s?(\d{4})$/,
                }
            }
        }  
        name='client_PhoneNumber'
        render={
            ({onChange,value})=>
                <div className=' flex  flex-col'>
            <label htmlFor="phnumber" className=' text-2xl mb-4'> Phone Number</label>
            <input type='number' id='phnumber' className=' border-2 outline-none py-5 rounded' value={value} onChange={onChange}/>
            {errors.client_PhoneNumber && <p className=' text-red-500 text-xl'>{errors.client_PhoneNumber.message}</p>}
            </div>
        }

        />
        
        <Controller control={control} rules={
            {
                required:{
                    value:true,
                    message:"Please enter your Service"
                }
            }
        }  
        name='client_service'
        render={
            ({onChange,value})=>
                <div className=' flex  flex-col'>
            <label htmlFor="select" className=' text-2xl mb-4'> Choose one Topic</label>
            <select   id='select' className=' border-2 outline-none py-5 rounded' value={value} onChange={onChange}>
                <option value="Select" className='  '>Select</option>
                <option value="General Inquiry" className=' '>General Inquiry</option>
                <option value="Support" className=' '>Support</option>
                <option value="Sales" className=' '>Sales</option>

            </select>
            {errors.client_service && <p className=' text-red-500 text-xl'>{errors.client_service.message}</p>}
            </div>
        }

        />
        
        <Controller control={control} rules={
            {
                required:{
                    value:true,
                    message:"Please enter your Message"
                }
            }
        }  
        name='client_msg'
        render={
            ({onChange,value})=>
                <div className=' flex  flex-col col-span-2'>
                <label htmlFor="msg" className=' text-2xl mb-4'> Message</label>
                <textarea rows={20} id='msg' cols={10} className=' border-2 outline-none py-5 rounded' value={value} onChange={onChange}/>
                {errors.client_msg && <p className=' text-red-500 text-xl'>{errors.client_msg.message}</p>}
                </div>
        }

        />
        
        <Controller control={control} rules={
            {
                required:{
                    value:true,
                    message:"Please Accept the Term's Condition"
                }
            }
        }  
        name='client_check'
        render={
            ({onChange,value})=>
                <div className=' flex  gap-5'>
            <input  type='checkbox' id='check' className=' w-8 h-8 border-2 outline-none py-5 rounded' value={value} onChange={onChange}/>
            <label htmlFor="check" className=' text-2xl mb-4'> I Accept the  Terms And contion</label>
           
           {errors.client_check && <p className=' text-red-500 text-xl'>{errors.client_check.message}</p>}
            </div>
        }

        />
      <button className='btn-primary !py-5 col-span-2'> Contact Now</button>  
        
    </form>
  )
}

export default Form