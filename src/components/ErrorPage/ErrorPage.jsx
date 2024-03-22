import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="flex flex-col justify-center items-center my-40 space-y-5">
            <h1 className="text-center text-7xl font-bold mb-6">Opps !!!</h1>
           <div className="flex justify-center items-center">
           {
                error && <p>{error.error.message}</p> || <p>{error.status}</p>
            }

           </div>
           <Link to={'/'} className=""><button className="btn r">Go Back Home</button></Link>
        </div>
    );
};

export default ErrorPage;