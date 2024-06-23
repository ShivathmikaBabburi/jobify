import React from "react";
import {
  Form,
  useNavigation,
  redirect,
  useLoaderData,
  useParams,
} from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect } from "../components";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
export const loader = async ({ params, request }) => {
  try {
    const id = params.id.toString();
    const { data } = await customFetch.get(`/jobs/${id}`);
    return data;
  } catch (error) {
    toast.error(error.response.data);
    return redirect("/dashboard/all-jobs");
  }
};
const EditJob = () => {
  const params = useParams();
  const { job } = useLoaderData();
  console.log(job);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Edit Job</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            labelText="Position"
            defaultValue={job.position}
          ></FormRow>
          <FormRow
            type="text"
            name="company"
            labelText="Company"
            defaultValue={job.company}
          ></FormRow>
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Location"
            defaultValue={job.jobLocation}
          ></FormRow>
          <FormRowSelect
            name="jobStatus"
            labelText="Job Status"
            list={Object.values(JOB_STATUS)}
            defaultValue={job.jobStatus}
          />
          <FormRowSelect
            name="jobType"
            labelText="Job Type"
            list={Object.values(JOB_TYPE)}
            defaultValue={job.jobType}
          />
          <button type="submit" className="btn btn-block form-btn">
            {isSubmitting ? "submitting" : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditJob;

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  console.log(formData);
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success("job edit successful");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error?.response?.data);
    console.log(error);
    return error;
  }
};
