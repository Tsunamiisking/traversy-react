import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
  const { id } = useParams();
  const [Job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = `api/Jobs/${id}`;  
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [id]);

  return loading ? (
    <Spinner />
  ) : (
    <h1>{Job.title}</h1>
  );
};

export default JobPage;
