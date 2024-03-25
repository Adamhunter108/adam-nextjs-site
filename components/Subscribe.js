import React, { useRef, useState } from "react";
import axios from "axios";

export default function Subscribe() {
  // create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);

  const [errors, setErrors] = useState({});

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (inputEl.length <= 0) {
      tempErrors["inputEl"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      const res = await axios
        .post("api/subscribe", {
          email: inputEl.current.value,
        })
        .then(function (res) {
          console.log("Success!");
          setShowSuccessMessage(true);
          setShowFailureMessage(false);
        })
        .catch(function (error) {
          console.log("🚨 API error");
          setShowSuccessMessage(false);
          setShowFailureMessage(true);
        });
    }
  };

  return (
    <div>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="rounded-lg shadow-xl flex flex-col py-8 bg-white"
      >
        <h3 className="mx-auto pb-2 text-xl md:text-2xl lg:text-2xl font-bold text-black">
          Want to stay in the loop?
        </h3>
        <h4 className="mx-auto pb-2 text-l font-bold text-gray-600">
          Sign up for my newsletter
        </h4>

        <input
          type="email"
          name="email"
          ref={inputEl}
          placeholder="Your email address"
          className="mx-auto w-4/5 bg-transparent border-b mt-4 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-2 ring-indigo-500 font-light text-gray-800"
        />

        <div className="flex flex-row items-center justify-center">
          <div className="pt-3">
            <button
              type="submit"
              className="relative inline-flex h-12 w-64 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white hover:backdrop-blur-xl hover:text-black backdrop-blur-3xl bg-indigo-500/40">
                {/* CHEVRON RIGHT SVG ICON */}
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
                </svg>
                <span className="pl-2">Sign up</span>
              </span>
            </button>
          </div>
        </div>

        <div className="text-sm text-slate-500 text-center mx-auto pt-2">
          <p>
            I&apos;ll only send emails when new content is posted. Never spam
            and no selling of data.
          </p>
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
  );
}
