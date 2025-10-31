
const Home = () => {
    async function handleRegister(event: React.FormEvent) {
        event.preventDefault();

        const target = event.target as HTMLFormElement;

        const formData = new FormData(target);

        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const firstname = formData.get('firtname');
        const lastname = formData.get('lastname');

        const userData = {
            username: username,
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname
        };


        try {
            const response = await fetch("http://localhost:8000/user/register", {
                method: "POST",
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify(userData)
            });

            const result = await response.json();

            if (result.status === 'success') {
                console.log(result);
            } else {
                console.log(result);
            }

        } catch (error) {
            console.error('Erreur de connexion à l\'API:', error);
        }
    }

    return (
        <form className="form signup-form" aria-labelledby="signup-title" onSubmit={handleRegister}>
            <h1 id="signup-title">Formulaire d’inscription</h1>

            <div className="form-group">
                <label htmlFor="lastname">Nom</label>
                <input type="text" name="lastname" id="lastname" placeholder="Doe" autoComplete="family-name"
                    aria-describedby="lastname-error" />
                    <small id="lastname-error" className="error" aria-live="polite"></small>
            </div>

            <div className="form-group">
                <label htmlFor="firstname">Prénom</label>
                <input type="text" name="firstname" id="firstname" placeholder="John" autoComplete="given-name"
                    aria-describedby="firstname-error" />
                    <small id="firstname-error" className="error" aria-live="polite"></small>
            </div>

            <div className="form-group">
                <label htmlFor="username">Login</label>
                <input type="text" name="username" id="username" placeholder="John" autoComplete="given-name"
                    aria-describedby="firstname-error" />
                    <small id="firstname-error" className="error" aria-live="polite"></small>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" autoComplete="email" placeholder="ex : exemple@mail.com"
                    aria-describedby="email-error" />
                    <small id="email-error" className="error" aria-live="polite"></small>
            </div>

            <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" minLength={8} maxLength={64}
                    autoComplete="new-password" aria-describedby="password-error" />
                    <small id="password-error" className="error" aria-live="polite"></small>
            </div>

            <button type="submit">S'enregistrer</button>
        </form>
    )
}

export default Home;
