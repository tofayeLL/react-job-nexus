
const getStoredJobApplication = () => {
       const storedJobApplication = localStorage.getItem('job-applications');
       if(storedJobApplication){
        return JSON.parse(storedJobApplication);
       }
       return [];
}

const savJobApplicationToLs = (id) => {
    const storedJobApplication = getStoredJobApplication();
    const isExist = storedJobApplication.find(jobApplicationId => jobApplicationId === id);
    if(!isExist){
        storedJobApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication));
    }

}

export { savJobApplicationToLs }






// ------------------------------------------------------another one------------

/* const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications') ;
    if(storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];

}

const saveJobApplication = (id) => {
    const storedJobApplication = getStoredJobApplication();
    const isExist = storedJobApplication.find(jobApplicationId => jobApplicationId === id );
    if(!isExist){
        storedJobApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication));
    }

}

export { saveJobApplication } */