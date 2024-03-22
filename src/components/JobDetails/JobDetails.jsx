import { Link, useLoaderData, useParams } from "react-router-dom";



const JobDetails = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const convertId = parseInt(id);
    const job = jobs.find(job => job.id === convertId)
    const { job_description, job_responsibility, educational_requirements, experiences, contact_information, phone, email, address } = job;

    return (
        <div>
            <div className="bg-red-300 h-[30vh] flex justify-center items-center">
                <h2>job details:</h2>
            </div>


            <div className="grid lg:grid-cols-4 gap-6 my-10">
                <div className="bg-green-200  col-span-3 p-4">
                    <p>job description:{job_description}</p>

                    <p>job res: {job_responsibility} </p>

                </div>
                <div className="bg-slate-300  col-span-1 p-4 space-y-4">
                    <p>phone: {phone}</p>
                    <p>Email: {email}</p>
                    <p>Address: {address}</p>
                    

                    <button className="btn btn-primary w-full">Apply Now</button>
                </div>

            </div>






            <Link to={'/'}><button className="btn">go back to home</button></Link>

        </div>

    );
};

export default JobDetails;