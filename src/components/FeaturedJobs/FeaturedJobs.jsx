import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

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
                    jobs.slice(0, dataLength).map((job, index) => <Job
                     job={job}
                     key={index}></Job>)
                }

            </div>
            
            <div className={`flex justify-center items-center
            ${dataLength === jobs.length ? 'hidden' : ''}
            my-8`}>
            <button onClick={() => setDataLength(jobs.length)}
            className="btn text-white bg-gradient-to-r from-[#7e90fe] to-[#9873FF]">See All Jobs</button>
            </div>

        </div>
    );
};

export default FeaturedJobs;