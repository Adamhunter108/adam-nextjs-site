import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  // THIS IS FOR API/MAIL
  // async function handleSubmit(e) {
  //     e.preventDefault();
  //     const formData = {};
  //     Array.from(e.currentTarget.elements).forEach(field => {
  //       if ( !field.name ) return;
  //       formData[field.name] = field.value;
  //     });
  //     await fetch('/api/mail', {
  //       method: 'POST',
  //       body: JSON.stringify(formData)
  //     });
  //   }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // resets form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // resets form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };

  return (
    <div>
      <Head>
        <title>Contact Adam</title>
        <meta
          name="description"
          content="If you missed the email social button in the footer, feel free to send me an email through the form on this page to get in contact."
        />
        <link rel="icon" href="/adamidea.ico" />
      </Head>

      <NavBar />

      <div className="relative bg-gradient-to-t from-cyan-900 via-indigo-900 to-black pt-20 pb-20 px-4 sm:px-6 lg:pt-15 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-indigo-600 to-teal-400 sm:text-4xl">
              contact
            </h1>
            <h2 className="mt-3 max-w-2xl mx-auto text-xl text-transparent bg-clip-text bg-gradient-to-t from-indigo-200 to-teal-200 sm:mt-4">
              get in touch
            </h2>
          </div>

          <div className="mt-12 lg:mx-52 md:mx-36 lg:max-w-none">
            <motion.div
              className="flex flex-col rounded-xl shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  scale: 0.5,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.1,
                    type: "tween",
                    duration: 1,
                  },
                },
              }}
            >
              <form
                method="post"
                onSubmit={handleSubmit}
                className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white"
              >
                <h1 className="mx-auto pb-2 text-xl md:text-2xl lg:text-2xl font-bold text-black">
                  Have an idea for a project?
                </h1>

                <div className="object-cover mx-auto bg-gradient-to-t from-black to-indigo-400 shadow-lg rounded-full">
                  <motion.div whileHover={{ rotate: 180, scale: 1.2 }}>
                    <Image
                      className="object-cover mx-auto bg-gradient-to-t from-black to-indigo-400 shadow-lg rounded-full"
                      src="/images/adamidea.png"
                      width={150}
                      height={150}
                      alt="adam idea"
                    />
                  </motion.div>
                </div>

                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  name="fullname"
                  placeholder="Your name"
                  className="bg-transparent border-b mt-4 py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-2 ring-indigo-500 font-light text-gray-800"
                />
                {errors?.fullname && (
                  <p className="text-red-500">I need something to call you</p>
                )}

                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="bg-transparent border-b mt-4 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-2 ring-indigo-500 font-light text-gray-800"
                />
                {errors?.email && (
                  <p className="text-red-500">
                    I need somewhere to hit you back
                  </p>
                )}

                <input
                  type="text"
                  name="subject"
                  value={subject}
                  placeholder="Subject"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  className="bg-transparent border-b mt-4 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-2 ring-indigo-500 font-light text-gray-800"
                />
                {errors?.subject && (
                  <p className="text-red-500">TLDR it for me</p>
                )}

                <textarea
                  name="message"
                  value={message}
                  placeholder="Message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className="bg-transparent border-b mt-4 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-2 ring-indigo-500 font-light text-gray-800"
                ></textarea>
                {errors?.message && (
                  <p className="text-red-500">What do you want to say?</p>
                )}

                <div className="flex flex-row items-center justify-center">
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="relative inline-flex h-12 w-64 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white hover:backdrop-blur-xl hover:text-black backdrop-blur-3xl bg-indigo-500/40">
                        <span className="pr-2">{buttonText}</span>
                        <svg
                          width="24"
                          height="24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                <div className="">
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
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
