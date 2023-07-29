import { Link } from "react-router-dom";

const Navbar = () => {

    const navItems = <>
        <li className="font-bold text-lg"><Link to={'/'}>Home</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-200 fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={'/'} className=""><img className="w-20 rounded-full h-14" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjMTKkT36r1yN7ngOPYHXSTPm_1NN6Nb3tQ&usqp=CAU" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;