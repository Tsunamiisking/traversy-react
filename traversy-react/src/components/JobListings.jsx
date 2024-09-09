import React from "react";
import JobListing from "./JobListing";
import { useState, useEffect } from "react";

const JobListings = ({ isHome = false }) => {
  // Checking Array
  // console.log(Jobs)

  const [Jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/Jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        conosle.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);
  // const Jobs = isHome ? Jobs : Jobs.slice(0,3)
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "All Jobs" : "Recent Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <h2> Loading</h2>
          ) : (
            <>
              {Jobs.map((job) => {
                return <JobListing key={job.id} job={job} />;
              })}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
