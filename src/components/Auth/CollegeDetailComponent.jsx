import React from "react";

import Paper from "@mui/material/Paper";
import { SnackbarComponent } from "../SnackbarComponent";
import Particles from "../Particles";

import { Link, useNavigate } from "react-router-dom";
import { button } from "../../constants/registerationConstants";

const CollegeDetailComponent = ({
  setCurrentPage,
  collegeName,
  department,
  setCollegeName,
  setDepartment,
  setMessage,
  setOpen,
  setMessageBack,
}) => {
  const handleSubmit = () => {
    if (collegeName.length < 2) {
      setOpen(true);
      setMessage("Enter a valid College Name");
      setMessageBack("red");
    } else if (department.length < 2) {
      setOpen(true);
      setMessage("Enter a valid Department Name");
      setMessageBack("red");
    } else {
      setOpen(true);
      setMessage("Submitting..");
      setMessageBack("green");
      setCurrentPage(2);
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
        className="flex flex-col justify-center items-center gap-5 rounded-xl p-5 z-10 hover:shadow-xl"
      >
        <h1 className="text-4xl font-bold">TECHUTSAV 2025</h1>
        <h2 className="font-semibold text-3xl">COLLEGE DETAIL DETAILS</h2>
        <div className="bg-white/50 w-96 h-fit p-7 flex flex-col justify-center rounded-xl relative font-poppins">
          <form className="flex flex-col gap-9">
            <div className="flex flex-col gap-3 ">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                >
                  College Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your college name"
                  className="focus:outline-sky-400 rounded-lg w-5/6 p-2"
                  value={collegeName}
                  onChange={(event) => {
                    setCollegeName(event.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className=" tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
                >
                  Department
                </label>
                <input
                  type="text"
                  placeholder="Enter your department"
                  className="focus:outline-sky-400 rounded-lg w-5/6 p-2"
                  value={department}
                  onChange={(event) => {
                    setDepartment(event.target.value);
                  }}
                />
              </div>
              <div className="flex w-full justify-around">
                <button
                  className={button}
                  onClick={() => {
                    setCurrentPage(0);
                  }}
                >
                  Back
                </button>
                <button
                  className={button}
                  onClick={(e) => {
                    e.preventDefault();
                    // console.log(collegeName, department);
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

export default CollegeDetailComponent;
