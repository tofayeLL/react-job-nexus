import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <div className="container mx-auto lg:px-20 px-2 ">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div className="bg-black">
            <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;