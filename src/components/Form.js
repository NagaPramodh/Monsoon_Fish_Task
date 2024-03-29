import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../redux/formSlice";
import { Select } from "antd";
import "./Form.css";

import { Link } from "react-router-dom";
// const FormComponent = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   });
//   const submissions = useSelector((state) => state.form.submissions);
//   console.log(submissions, "submissions");

//   const handleNameChange = (value) => {
//     setFormData({
//       ...formData,
//       name: value,
//     });
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       name: e.target.value,
//     });
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       dispatch(submitForm({ name: e.target.value }));
//       setFormData({
//         ...formData,
//         name: "",
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(submitForm(formData));
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//     });
//   };

const FormComponent = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const submissions = useSelector((state) => state.form.submissions);

  useEffect(() => {
    console.log("Redux state updated:", submissions);
    // Add any code you want to execute when the Redux state is updated
  }, [submissions]); // Dependency array: execute the effect whenever `submissions` changes

  const handleNameChange = (value) => {
    setFormData({
      ...formData,
      name: value,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "handleSubmit");
    dispatch(submitForm(formData));
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(submitForm({ name: e.target.value }));
      setFormData({
        ...formData,
        name: "",
      });
    }
  };
  return (
    <div className="whole-card">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    Name
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control" // Added form-control class
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your name"
                />
              </div>
              <div className="h6">or choose name in below dropdown</div>
              <Select
                style={{ marginBottom: "1rem", width: "100%" }}
                placeholder="Select a name"
                onChange={handleNameChange}
                value={formData.name || undefined} // Ensure value is either formData.name or undefined
                mode="single"
              >
                {submissions.map((submission) => (
                  <Select.Option key={submission.name} value={submission.name}>
                    {submission.name}
                  </Select.Option>
                ))}
              </Select>

              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    Email
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control" // Added form-control class
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter Email"
                />
              </div>

              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    Mobile
                  </span>
                </div>
                <input
                  type="tel"
                  className="form-control" // Added form-control class
                  name="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Enter Mobile Number"
                />
              </div>
            </div>

            {/* <button type="submit">Submit</button> */}
            {/* <button type="submit button" class="btn btn-info"> */}
            <Link to="/" className="submit btn btn-info">
              Submit
            </Link>
            {/* </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
