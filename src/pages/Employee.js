import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setemployees } from "../redux/slice/homeSlice";

function Employee() {
  const [formData, setFormData] = React.useState({
    emp_name: "",
    department: "IT",
    emp_id: uuidv4(),
  });

  const dispatch = useDispatch();
  const company = useSelector((state) => state.company);
  const { employees, department } = company;

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
      emp_id: uuidv4(),
    });

    console.log(formData);
    let data = [...employees, formData];

    dispatch(setemployees(data));
    setFormData({ emp_name: "" });
  };

  const editEmployee = (emp_id) => {
    console.log(emp_id);
  };

  const deleteEmployee = (emp_id) => {
    console.log(emp_id); 
    employees.delete(emp_id);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <label>
              Employee Name
              <input
                className="form-control"
                type="text"
                name="emp_name"
                value={formData.emp_name}
                onChange={handleChange}
              />
            </label>
            <label>
              Department
              <select
                className="form-control"
                name="department"
                onChange={handleChange}
                value={formData.department}
              >
                {department.map((d, i) => {
                  return (
                    <option value={d.department_name}>
                      {d.department_name}
                    </option>
                  );
                })}
              </select>
            </label>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => HandleFormSubmit()}
            >
              Submit
            </button>
          </div>
        </div>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="row">Employee id</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Department</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((d, i) => {
                return (
                  <tr>
                    <td scope="row">{d.emp_id}</td>
                    <td>{d.emp_name}</td>
                    <td>{d.department}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => editEmployee(d.emp_id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          const data =employees.filter((e) => e.emp_id != d.emp_id)
                          dispatch(setemployees(data))
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Employee;
