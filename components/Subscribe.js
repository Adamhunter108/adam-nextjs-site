import React, { useRef, useState } from 'react';
import axios from 'axios';

export default function Subscribe() {

    // create a reference to the input so we can fetch/clear it's value.
    const inputEl = useRef(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

            // CHANGED TO AXIOS
        // const res = await fetch('/api/subscribe', {
        //   body: JSON.stringify({
        //     email: inputEl.current.value
        //   }),
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   method: 'POST'
        // });

        // const { error } = await res.json()
        // if (error) {
        //   setMessage(error)
    
        //   return;
        // }

        const res = await axios.post('api/subscribe', {
            email: inputEl.current.value
        })
        .then(function(res) {
            console.log('Success!')
        })
        .catch(function(error){
            console.log('🚨 API error')
            setMessage(error)
        })
    
        // clear the input value and show a success message
        inputEl.current.value = ''
        setMessage('Success! 🎉 You are now subscribed to the newsletter.')
      }

  return (
    <div>
        <form
            method="post"
            onSubmit={handleSubmit} 
            className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white">

            <h1 className="mx-auto pb-2 text-xl md:text-2xl lg:text-2xl font-bold text-black">
                Want to stay in the loop with a newsletter?
            </h1>

            <input
                type="email"
                name="email"
                // value={email}
                ref={inputEl} 
                placeholder="Your email address"
                // onChange={(e) => {
                //     setEmail(e.target.value)
                // }}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-2 ring-indigo-500 font-light text-gray-800"
            />
            {/* {errors?.email && (
                <p className="text-red-500">You need an email to sign up</p>
            )} */}

            <div className="flex flex-row items-center justify-center">
                <button
                    type="submit" 
                    className="px-10 mt-8 py-2 bg-gradient-to-b from-indigo-800 via-indigo-600 to-indigo-400 text-gray-50 hover:bg-gradient-to-t from-indigo-800 via-indigo-600 to-indigo-400 hover:text-black font-light rounded-md text-lg flex flex-row items-center"
                    >
                    Sign up
                    {/* <svg width="24" height="24" className="text-white ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"/></svg> */}
                </button>
            </div>

            {/* <div className="">
                {showSuccessMessage && (
                <p className="text-green-500 font-semibold text-sm my-2">
                    Thank you! Your Message has been delivered.
                </p>
                )}
                {showFailureMessage && (
                <p className="text-red-500">
                    Oops! Something went wrong, please try again.
                </p>
                )}
            </div> */}
            <div className="text-sm mx-auto pt-2">
            {message
                ? message
                : `I'll only send emails when new content is posted. Never spam and no selling of data.`}
            </div>

        </form>

    </div>
  )
}
