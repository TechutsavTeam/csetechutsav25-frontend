import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import { SnackbarComponent } from "../SnackbarComponent";

import { Link, useNavigate } from "react-router-dom";
import { button } from "../../constants/registerationConstants";

import EyeClose from "../EyeClose.jsx";
import EyeOpen from "../EyeOpen.jsx";
import Particles from "../Particles.jsx";

import { api } from "../../api/auth";

const BasicDetailComponent = ({
  setCurrentPage,
  email,
  password,
  confirmPassword,
  phone,
  fullName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setPhone,
  setFullName,
  setOpen,
  setMessage,
  setMessageBack,
}) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  const [seePassword, setSeePassword] = useState(true);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(true);

  const handleSubmit = () => {
    if (fullName.length < 2) {
      setOpen(true);
      setMessage("Fullname is Less than 2 characters");
      setMessageBack("red");
    } else if (!emailRegex.test(email)) {
      setOpen(true);
      setMessage("Email is Invalid");
      setMessageBack("red");
    } else if (!phoneRegex.test(phone)) {
      setOpen(true);
      setMessage("Invalid Phone Number");
      setMessageBack("red");
    } else if (password.length < 6) {
      setOpen(true);
      setMessage("Password must be more than 6 Characters");
      setMessageBack("red");
    } else if (password !== confirmPassword) {
      setOpen(true);
      setMessage("Passwords Don't Match");
      setMessageBack("red");
    } else {
      api
        .post("auth/email_check", { email })
        .then((result) => {
          if (result.data.msg === "success") {
            setOpen(true);
            setMessage("Submitting...");
            setMessageBack("green");
            setCurrentPage(1);
          }
        })
        .catch((err) => {
          if (err.response.data.msg === "Exists") {
            setOpen(true);
            setMessage("Email Already Exists");
            setMessageBack("red");
          } else {
            setOpen(true);
            setMessage("Problem in Login");
            setMessageBack("red");
          }
        });
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-sky-100">
        <Particles
          particleColors={["#ffffff", "#7dd3fc"]} // White & Sky Blue 300
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
      </div>
      <Paper
        elevation={2}
        className="flex flex-col justify-center items-center gap-5 rounded-xl p-5 z-10 hover:shadow-2xl bg-white/50"
      >
        <h1 className="text-4xl font-bold">TECHUTSAV 2025</h1>
        <h2 className="font-semibold text-3xl">BASIC DETAILS</h2>
        <div className="bg-white/50 w-96 h-fit p-7 flex flex-col justify-center rounded-xl relative font-poppins">
          <form className="flex flex-col gap-9">
            <div className="flex flex-col gap-3 ">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="focus:outline-sky-400 rounded-lg w-5/6 p-2"
                  value={fullName}
                  onChange={(event) => {
                    setFullName(event.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="focus:outline-sky-400 rounded-lg w-5/6 p-2"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your Phone number"
                  className="focus:outline-sky-400 rounded-lg w-5/6 p-2"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={seePassword ? "password" : "text"}
                    placeholder="Confirm password"
                    className="focus:outline-sky-400 rounded-lg w-5/6 p-2"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-4"
                    onClick={() => {
                      setSeePassword(!seePassword);
                    }}
                  >
                    {seePassword ? <EyeClose /> : <EyeOpen />}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={seeConfirmPassword ? "password" : "text"}
                    placeholder="Confirm password"
                    className="focus:outline-sky-400 rounded-lg w-5/6 p-2"
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                    }}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-4"
                    onClick={() => {
                      setSeeConfirmPassword(!seeConfirmPassword);
                    }}
                  >
                    {seeConfirmPassword ? <EyeClose /> : <EyeOpen />}
                  </button>
                </div>
              </div>

              <div className="flex w-full justify-around">
                <Link className={button} type="button" to="/">
                  Back
                </Link>
                <button
                  className={button}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </Paper>
    </>
  );
};

export default BasicDetailComponent;
