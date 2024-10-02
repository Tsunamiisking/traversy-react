import React, { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
  const { id } = useParams();

  // Using useEffect to request jobs data

  // const [job, setJob] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       const apiUrl = `/api/Jobs/${id}`;
  //       const res = await fetch(apiUrl);
  //       const data = await res.json();
  //       setJob(data);
  //     } catch (error) {
  //       console.log("Error: ", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchJobs();
  // }, []);

  return loading ? <Spinner /> : <h1>{job.title}</h1>;
};

const jobLoader = async ({}) => {
  const apiUrl = `/api/Jobs/${params.id}`;
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
};

export {JobPage as default, jobLoader};
