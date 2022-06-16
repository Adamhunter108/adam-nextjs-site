import React, { useRef, useState } from 'react';
import axios from 'axios';

export default function Subscribe() {

    // create a reference to the input so we can fetch/clear it's value.
    const inputEl = useRef(null)

        // NOT USING THIS ANYMORE
    // const [message, setMessage] = useState('')

    const [errors, setErrors] = useState({})

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showFailureMessage, setShowFailureMessage] = useState(false)

    const handleValidation = () => {
        let tempErrors = {}
        let isValid = true

        if (inputEl.length <= 0) {
            tempErrors["inputEl"] = true
            isValid = false
        }

        setErrors({...tempErrors})
        console.log("errors", errors)
        return isValid
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

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

        let isValidForm = handleValidation()

        if (isValidForm) {

            const res = await axios.post('api/subscribe', {
                email: inputEl.current.value
            })
            .then(function(res) {
                console.log('Success!')
                setShowSuccessMessage(true)
                setShowFailureMessage(false)
            })
            .catch(function(error){
                console.log('🚨 API error')
                // setMessage(error)
                setShowSuccessMessage(false)
                setShowFailureMessage(true)
            })
        
            // clear the input value and show a success message
            // inputEl.current.value = ''
            // setMessage('Success! 🎉 You are now subscribed to the newsletter.')

        }

            // MOVED INSIDE OF VALIDATION
        // const res = await axios.post('api/subscribe', {
        //     email: inputEl.current.value
        // })
        // .then(function(res) {
        //     console.log('Success!')
        // })
        // .catch(function(error){
        //     console.log('🚨 API error')
        //     setMessage(error)
        // })
    
        // // clear the input value and show a success message
        // inputEl.current.value = ''
        // setMessage('Success! 🎉 You are now subscribed to the newsletter.')
      }

  return (
    <div>
        <form
            method="post"
            onSubmit={handleSubmit} 
            className="rounded-lg shadow-xl flex flex-col py-8 bg-white">

            <h3 className="mx-auto pb-2 text-xl md:text-2xl lg:text-2xl font-bold text-black">
                Want to stay in the loop?
            </h3>
            <h4 className="mx-auto pb-2 text-l font-bold text-gray-600">
                Sign up for my newsletter
            </h4>

            <input
                type="email"
                name="email"
                // value={email}
                ref={inputEl} 
                placeholder="Your email address"
                // onChange={(e) => {
                //     setEmail(e.target.value)
                // }}
                className="mx-auto w-4/5 bg-transparent border-b mt-4 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-2 ring-indigo-500 font-light text-gray-800"
            />
            {/* {errors?.inputEl && (
                <p className="text-red-500">You need an email to sign up</p>
            )} */}

            <div className="flex flex-row items-center justify-center">
                <button
                    type="submit" 
                    className="px-10 mt-8 py-2 bg-gradient-to-b from-indigo-800 via-indigo-600 to-indigo-400 text-gray-50 hover:bg-gradient-to-t from-indigo-800 via-indigo-600 to-indigo-400 hover:text-gray-400 font-light rounded-md text-lg flex flex-row items-center"
                    >
                    Sign up
                        {/* CHEVRON RIGHT SVG ICON */}
                    <svg width="24" height="24" className="text-white ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg>
                </button>
            </div>

            <div className="text-sm text-center mx-auto pt-2">
            {/* {message
                ? message
                : `I'll only send emails when new content is posted. Never spam and no selling of data.`} */}
                <p>I&apos;ll only send emails when new content is posted. Never spam and no selling of data.</p>
                {showSuccessMessage && (
                    <p className="text-green-500 font-semibold text-sm my-2">
                        Thanks for signing up!
                    </p>
                )}
                {showFailureMessage && (
                    <p className="text-red-500">
                        Something went wrong... did you forget to enter an email address? 
                    </p>
                )}
            </div>

        </form>

    </div>
  )
}
