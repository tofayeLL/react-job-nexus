
const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information, phone, email, address } = job
    return (
        <div >
            <div className="bg-base-100 shadow-xl rounded-lg ">
                <figure className="p-10">
                    <img src={logo} alt="logo" className="rounded-xl" />
                </figure>
                <div className="p-10 space-y-4">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex  items-center gap-6">
                        <button className="text-[#9576ff] px-4 py-2 border-[1px] border-[#9576ff] rounded-md font-semibold">{remote_or_onsite}</button>
                        <button className="text-[#9576ff] px-4 py-2 border-[1px] border-[#9576ff] rounded-md font-semibold">{job_type}</button>
                    </div>
                    <div>

                    </div>
                    <div className="card-actions">
                        <button className="btn bg-[#9576ff]">View Details</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Job;