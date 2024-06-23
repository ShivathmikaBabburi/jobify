import React from "react";
import { ChartsContainer, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
export const loader = async () => {
  try {
    const response = await customFetch("/jobs/stats");

    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};
const Stats = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer monthlyApplications={monthlyApplications} />
      )}
    </>
  );
};

export default Stats;
