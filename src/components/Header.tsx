import { NavLink } from "react-router-dom";

function Header() {
  const title = "Five Legend";
  return (
    <div className="flex justify-between items-center bg-emerald-600 text-white">
      <div>
        <h1 className="ml-8 bg-emerald-600  text-6xl font-extrabold pb-4">
          {title}
        </h1>
      </div>

      <form action="">
        <div className="flex row items-center gap-5">
          <input
            type="text"
            className="rounded-lg placeholder-black bg-white text-black border-3 border-white p-2"
            placeholder="Identifiant"
          />
          <input
            type="text"
            className="rounded-lg placeholder-black bg-white text-black border-3 border-white p-2"
            placeholder="Password"
          />
        </div>
        <div></div>
      </form>

      <nav>
        <ul className="text-2xl font-extrabold bg-emerald-600 flex justify-center gap-4">
          <li className="rounded-2xl p-3.5 hover:bg-emerald-100 hover:text-blackcursor-pointer">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="rounded-2xl p-3.5 hover:bg-emerald-100 hover:text-black cursor-pointer">
            <NavLink to="/register">REGISTER</NavLink>
          </li>

          <li className="rounded-2xl p-3.5 hover:bg-emerald-100 hover:text-black cursor-pointer">
            <NavLink to="/profile">PROFILE</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
