import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();


    // use state for applied jobs 
    const [appliedJobs, setAppliedJobs] = useState([]);

    // get job application id from local storage
    useEffect(() => {
        const storedJobApplicationIds = getStoredJobApplication();

        if (jobs.length > 0) {
            const jobAppliedApplication = jobs.filter(job => storedJobApplicationIds.includes(job.id));
            // console.log(jobAppliedApplication);
            setAppliedJobs(jobAppliedApplication);

        }


    }, [])
   



    return (
        <div>
            <h2>Applied jobs from here</h2>
            <u>
                {
                    appliedJobs.map(job => <li key={job.id}>
                        <span>{job.job_title}</span>
                    </li>)
                }
            </u>

        </div>
    );
};

export default AppliedJobs;