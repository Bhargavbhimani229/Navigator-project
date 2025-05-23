import React from "react";

const EmployeForm = (props) => {
  const { employe, handleSubmit, handleChange } = props;
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <div
          className="card shadow p-4"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h3 className="text-center mb-4">Employee</h3>
          <form method="post" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={employe.email || ""}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
            </div>
               <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Post
              </label>
              <input
                type="text"
                name="post"
                onChange={handleChange}
                value={employe.post || ""}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your Post"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={employe.password || ""}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployeForm;
