import React, { useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

import { api } from "../../api/auth";

const CreatorComponent = ({
  email,
  fullName,
  password,
  phone,
  collegeName,
  department,
  transactionNumber,
  selectedDepartment,
  transactionScreenshot,
  setOpen,
  setMessage,
  setMessageBack,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    // Function to convert image to Base64
    const convertImageToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        if (!file) {
          resolve(null); // If no image, return null
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };
    // console.log(email);
    // console.log(password);
    // console.log(fullName);
    // console.log(phone);
    // console.log(collegeName);
    // console.log(department);
    // console.log(transactionNumber);
    // console.log(selectedDepartment);
    convertImageToBase64(transactionScreenshot)
    .then((base64Image) => {
      api
        .post("auth/signup", {
          email,
          fullName,
          password,
          phoneNumber: phone,
          collegeName,
          department,
          transactionNumber,
          selectedDepartment,
          transactionScreenshot: base64Image,
        })
        .then((result) => {
          console.log(result);
          if (result.status === 201) {
            setOpen("Profile Created");
            navigate("/login");
          } else {
            setOpen(true);
            setMessage("Check your Network connectivity, Try Again!");
            setMessageBack("red");
          }
        })
        .catch((err) => {
          console.log(err);
          setOpen(true);
          setMessage("Check your Network connectivity, Try Again!");
          setMessageBack("red");
        });
      });
  }, []);

  return (
    <div>
      <CircularProgress />
    </div>
  );
};

export default CreatorComponent;
