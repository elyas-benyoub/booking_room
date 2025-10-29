import { NavLink } from 'react-router';

const Header = () => {
    const baseNavLinkClasses = "h-full flex items-center px-4 text-white transition duration-300";
    const hoverClasses = "hover:bg-gray-400";
    const activeClasses = "bg-gray-700 font-bold";

    const getNavLinkStyle = ({ isActive }: { isActive: boolean }): string => {
        let style = `${baseNavLinkClasses} ${hoverClasses}`;

        if (isActive) {
            style += ` ${activeClasses}`;
        }

        return style;
    };

    return (
        <nav className='flex w-full h-14 justify-between items-center px-8 bg-gray-600'>
            <img
                src="/france_lyon_64x64.png"
                alt="Logo OL"
                className='h-8 w-8'
            />
            <ul className='flex h-full items-center'>
                <li className="h-full"><NavLink className={getNavLinkStyle} to='/'>Home</NavLink></li>
                <li className="h-full"><NavLink className={getNavLinkStyle} to='/about'>About</NavLink></li>
                <li className="h-full"><NavLink className={getNavLinkStyle} to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;