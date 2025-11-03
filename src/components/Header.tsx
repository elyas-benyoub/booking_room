import { NavLink } from "react-router-dom";

function Header() {
    const title = "Five Legend";
    return (
        <nav className="flex justify-between items-center bg-emerald-600 text-white shadow-nav">
            <h1 className="ml-8 bg-emerald-600 text-2xl font-extrabold pb-4">{title}</h1>
            <ul className="text-2xl font-extrabold bg-emerald-600 flex justify-center gap-4">
                <li className="p-3 hover:bg-emerald-100 hover:text-black cursor-pointer">
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li className="p-3 hover:bg-emerald-100 hover:text-black cursor-pointer">
                    <NavLink to="/register">REGISTER</NavLink>
                </li>

                <li className="p-3 hover:bg-emerald-100 hover:text-black cursor-pointer">
                    <NavLink to="/profile">PROFILE</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
