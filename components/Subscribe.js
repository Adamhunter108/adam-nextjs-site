import React, { useState } from 'react'

export default function Subscribe() {

    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
          const response = await axios.post('/api/subscribe', { email })
          console.log(response)
          setEmail('')
        } catch (e) {
            console.log('🚨 no newsletter for you')
        }
      }

  return (
    <div>
        <form
            method="post"
            onSubmit={handleSubmit} 
            className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white">

            <h1 className="mx-auto pb-2 text-xl md:text-2xl lg:text-2xl font-bold text-black">
                Sign up to stay in the loop?
            </h1>

            {/* <label
                htmlFor="email"
                className="text-black font-light mt-4">
                    E-mail<span className="text-red-500">*</span>
            </label> */}
            <input
                type="email"
                name="email"
                value={email}
                placeholder="Your email address"
                onChange={(e) => {
                    setEmail(e.target.value)
                }} 
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-indigo-500 font-light text-gray-800"
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

        </form>

    </div>
  )
}
