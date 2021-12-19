import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setdepartment, setemployees } from "../redux/slice/homeSlice";
export const Department = () => {
  const [formData, setFormData] = React.useState({
    department_name: "",
    dpt_id: uuidv4(),
  });

  const dispatch = useDispatch();
  const company = useSelector((state) => state.company);
  const { department } = company;

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setFormData({
      ...formData,
      [evt.target.name]: value,
    });
  }

  const HandleFormSubmit = () => {
    setFormData({
      ...formData,
      dpt_id: uuidv4(),
    });

    console.log(formData);
    let data = [...department, formData];

    dispatch(setdepartment(data));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <label>
            Department Name
            <input
              type="text"
              name="department_name"
              value={formData.department_name}
              onChange={handleChange}
            />
          </label>
          <br />

          <br />
          <button type="submit" onClick={() => HandleFormSubmit()}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
