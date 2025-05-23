import React from "react";

const EmployeList = (props) => {
  let { empList, handleDelete ,handleEdit } = props;
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm rounded-4">
            <div className="card-header bg-primary text-white text-center fs-4 fw-semibold">
              Employee List
            </div>
            <div className="card-body p-4">
              <table className="table table-striped table-hover text-center align-middle">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Post</th>
                    <th scope="col">Password</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {empList.map((val, idx) => (
                    <tr key={idx}>
                      <th scope="row">{idx + 1}</th>
                      <td>{val.email}</td>
                      <td>{val.post}</td>
                      <td>{val.password}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(val.id)}
                        >
                          Delete
                        </button>{" "}
                        <button className="btn btn-success" onClick={()=>handleEdit(val.id)}>Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeList;
