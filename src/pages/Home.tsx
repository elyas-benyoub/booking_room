
const Home = () => {
    async function handleRegister(event: React.FormEvent) {
    event.preventDefault()

    // const username = "Ressane";
    // const email = "ressou@free.fr";
    // const password = "123456";
    // const firstname = "Ressane";
    // const lastname = "Messioughi";

    // const userData = {
    //     username: username,
    //     email: email,
    //     password: password,
    //     firstname: firstname,
    //     lastname: lastname
    // };


    try {
        const response = await fetch("http://localhost:8000/");

        const result = await response.json();

        if (result.status === 'success') {
            console.log(result);
            // Gérer la connexion ou la redirection
        } else {
            console.error(result.message);
        }

    } catch (error) {
        console.error('Erreur de connexion à l\'API:', error);
    }
}

    return (
        <form onSubmit={handleRegister}>
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default Home;
