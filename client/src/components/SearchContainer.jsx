import React from "react";
import { FormRow, FormRowSelect } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link, useNavigation } from "react-router-dom";
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from "../../../utils/constants";
import { useAllJobsContext } from "../pages/AllJobs";
const SearchContainer = () => {
  const submit = useSubmit();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title"> Search Form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            id="search"
            name="search"
            defaultValue="a"
            onChange={debounce((form) => {
              submit(form);
            })}
          />
          <FormRowSelect
            labelText="Job Status"
            name="jobStatus"
            id="jobStatus"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue="all"
            onChange={debounce((form) => {
              submit(form);
            })}
          ></FormRowSelect>
          <FormRowSelect
            labelText="Job Type"
            name="jobType"
            id="jobType"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue="all"
            onChange={debounce((form) => {
              submit(form);
            })}
          ></FormRowSelect>
          <FormRowSelect
            labelText="Sort By"
            name="sort"
            id="sort"
            list={[...Object.values(JOB_SORT_BY)]}
            defaultValue={JOB_SORT_BY.ASCENDING}
            onChange={debounce((form) => {
              submit(form);
            })}
          ></FormRowSelect>
          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
          <button type="submit" className="btn btn-block form-btn">
            {isSubmitting ? "submitting" : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
