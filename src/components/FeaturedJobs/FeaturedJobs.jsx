import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
             fetch('jobs.json')
             .then(res => res.json())
             .then(data => setJobs(data))
    }, []);
    


    return (
        <div>
            {/* section title and description */}
            <div className="space-y-4">
                <h2 className="text-5xl font-bold text-center">Featured Jobs: {jobs.length}</h2>
                <p className="font-medium text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            
            {/* card container or single job container */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                {
                    jobs.map((job, index) => <Job
                     job={job}
                     key={index}></Job>)
                }

            </div>

        </div>
    );
};

export default FeaturedJobs;