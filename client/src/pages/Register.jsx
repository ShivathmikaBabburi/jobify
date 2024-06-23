import React from "react";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import customFetch from "../utils/customFetch";
import { FormRow } from "../components";
import { toast } from "react-toastify";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data);
    return error;
  }
};
const Register = () => {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          type="text"
          name="name"
          labelText="First Name"
          defaultValue="john"
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="doe"
        />
        <FormRow
          type="text"
          name="location"
          labelText="Location"
          defaultValue="VA"
        />
        <FormRow type="email" name="email" labelText="Email" defaultValue="" />
        <FormRow
          type="password"
          name="password"
          labelText="Password"
          defaultValue="john@gmail.com"
        />

        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <p>
          Already a Memeber?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
