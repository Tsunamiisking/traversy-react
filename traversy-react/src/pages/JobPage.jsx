import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';

const JobPage = () => {
    const {id} = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
              const apiUrl = `/api/jobs/${id}`
              const res = await fetch(apiUrl);
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
  return ( loading ? <Spinner /> : <h1>{job.title}</h1>
  )
}

export default JobPage
