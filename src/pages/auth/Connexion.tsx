const Connexion = () => {
    return (
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
    );
};

export default Connexion;