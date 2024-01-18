import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';

const Contact = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message, setMessage] = useState('');
  const formsPreeApi = process.env.REACT_APP_FORMSPREE_BASE_API;

  const sendMessage=async ()=>{
      if(!validator.isEmail(email) || validator.isEmpty(name) || 
      validator.isEmpty(message)){
          console.error('not a valid email');
          return;
      }

      try {
          const response = await fetch(formsPreeApi, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email, message }),
          });

          if (response.ok) {
            toast.success("Message Sent Successfully");
            setName('');
            setEmail('');
            setMessage('');
          } else {
            console.error('Error submitting form:', response.statusText);
            toast.error("Something Went Wrong")
          }
      } catch (error) {
          toast.error("Something Went Wrong")
          console.error('Error sending message:', error);
      }
  }

  return (
    <>
      <ToastContainer position='top-center'/>
      <div name='contact' className='w-full bg-[#0a192f] flex justify-center items-center p-4'>
          <div className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                  <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                  <p className='text-gray-300 py-4'>Send me a message</p>
              </div>
              <input value={name} className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' onChange={(e)=>{setName(e.target.value)}}/>
              <input value={email} className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' onChange={(e)=>{setEmail(e.target.value)}}/>
              <textarea value={message} className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' onChange={(e)=>{setMessage(e.target.value)}}></textarea>
              <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center' onClick={sendMessage}>Let's Collaborate</button>
          </div>
      </div>
    </>
  )
}
export default Contact