'use client';

import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [inputError, setInputError] = useState(false);

  const handleFullNameChange = (e) => {
    const value = e.target.value;

    // Use a regular expression to check if the input contains only letters
    const onlyLetters = /^[A-Za-z\s]+$/.test(value);

    setFullName(value);

    // Update the inputError state based on the input content
    setInputError(!onlyLetters);
  };

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const inputText = e.target.value;
    // Regular expression to check for a valid email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const isValid = emailRegex.test(inputText);
    setIsValidEmail(isValid);
    setEmail(inputText);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Head>
        <title>Signup</title>
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-[400px]">
        <Link href="/">
          <div className="absolute top-4 left-4 text-gray-600 hover:text-blue-500">
            <FaArrowLeft size={24} />
          </div>
        </Link>
        <h1 className="text-2xl font-semibold mb-4 text-center">Sign Up</h1>
        <form className="space-y-4">
          <div className="grid items-center gap-1.5">
            <label htmlFor="fullName" className="font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text" // Use "text" type for full name
              id="fullName"
              className={`w-full p-2 border ${inputError ? 'border-red-500' : 'border-blue-300'} rounded focus:ring focus:ring-blue-300`}
              required
              value={fullName}
              onChange={handleFullNameChange}
            />
            {inputError && <p className="text-red-500">Please enter letters only.</p>}
          </div>
          <div className="grid items-center gap-1.5">
            <label htmlFor="email" className="font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full p-2 border rounded focus:ring ${isValidEmail ? 'border-blue-300' : 'border-red-500'
                }`}
              required
              value={email}
              onChange={handleEmailChange}
            />
            {!isValidEmail && (
              <div className="text-red-500 text-sm">Please enter a valid email address.</div>
            )}
          </div>
          <div className="grid items-center gap-1.5">
            <label htmlFor="password" className="font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded"
          >
            Sign Up
          </button>
          <div className="text-center text-gray-600">
            Or sign up with:
          </div>
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded"
          >
            Google
          </button>
        </form>
        <div className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/signin">
            <p className="text-blue-500">Log in</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup