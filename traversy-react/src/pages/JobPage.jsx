import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobPage = () => {
    const {id} = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
              const apiUrl = isHome ? '/api/Jobs' : '/api/Jobs?_limit=3'
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
  return (
    <div>
      
    </div>
  )
}

export default JobPage
