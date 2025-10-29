const Footer = () => {
    const nameStyle = "font-bold text-red-400";
    const footerStyle = 'flex w-full h-14 justify-between items-center px-8 bg-gray-600';

    return (
        <footer className={footerStyle}>
            <p>Projet par <span className={nameStyle}>Elyas</span> et <span className={nameStyle}>Ressane</span></p>
        </footer >
    );
};

export default Footer;