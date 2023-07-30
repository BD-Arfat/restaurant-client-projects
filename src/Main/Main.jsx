import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <div>
{/*             navba */}
            <Navbar/>
{/*             outlet */}
            <Outlet/>
{/*             footer */}
            <Footer/>
        </div>
    );
};

export default Main;
