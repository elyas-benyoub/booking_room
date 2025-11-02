const RegisterForm = () => {
  const handlesubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    const username = formData.get("username");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");
    // const confirm-password = formData.get("confirm-password");
    try {
      const response = await fetch("http://localhost:8000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        }),
      });
      const result = await response.json();
      console.log(result)   
    } catch (error) {console.error(error)}
  };
  return (
    <figure className="flex flex-col justify-center m-auto bg-emerald-500 p-3 rounded-xl p-16 gap-10 mt-10">
      <h1 className="flex justify-center mb-3 text-4xl font-extrabold text-white underline">
        Inscription
      </h1>
      <form
        onSubmit={handlesubmit}
        className="flex flex-row justify-center gap-8">
        <figcaption className="flex flex-col gap-2">
          <label
            htmlFor="username"
            className="text-white font-bold flex justify-center">
            Pseudo
          </label>
          <input
            type="text"
            className="rounded-lg placeholder-black bg-white border-3 border-white p-2"
            id="username"
            name="username"
            placeholder="John123"
            autoComplete="given-username"
            aria-describedby="username-error"
          />
          <small
            id="username-error"
            className="error"
            aria-live="polite"></small>
          <label
            htmlFor="firstname"
            className="text-white font-bold flex justify-center">
            Prenom
          </label>
          <input
            type="text"
            className="rounded-lg placeholder-black bg-white border-3 border-white p-2"
            id="firstname"
            name="firstname"
            placeholder="John"
            autoComplete="given-name"
            aria-describedby="firstname-error"
          />
          <small
            id="firstname-error"
            className="error"
            aria-live="polite"></small>
          <label
            htmlFor="lastname"
            className=" text-white font-bold flex justify-center">
            Nom
          </label>
          <input
            type="text"
            className="rounded-lg placeholder-black bg-white border-3 border-white p-2"
            id="lastname"
            name="lastname"
            placeholder="Doe"
            autoComplete="family-name"
            aria-describedby="lastname-error"
          />
          <small
            id="lastname-error"
            className="error"
            aria-live="polite"></small>
        </figcaption>
        <img src="src/assets/ballon.png" className="size-56" alt="" />
        <figcaption className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-white font-bold flex justify-center">
            Adresse Email
          </label>
          <input
            type="email"
            className="rounded-lg placeholder-black bg-white border-3 border-white p-2"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="ex : exemple@mail.com"
            aria-describedby="email-error"
          />
          <small id="email-error" className="error" aria-live="polite"></small>
          <label
            htmlFor="password"
            className="text-white font-bold flex justify-center">
            Mot de passe
          </label>
          <input
            type="password"
            className="rounded-lg placeholder-black bg-white border-3 border-white p-2"
            id="password"
            name="password"
            minLength={8}
            maxLength={64}
            autoComplete="new-password"
            aria-describedby="password-error"
          />
          <small
            id="password-error"
            className="error"
            aria-live="polite"></small>
          <label
            htmlFor="confirm-password"
            className="text-white font-bold flex justify-center">
            Confirmation Mot de passe
          </label>
          <input
            type="password"
            className="rounded-lg placeholder-black bg-white border-3 border-white p-2"
            id="confirm-password"
            name="confirm-password"
            minLength={8}
            maxLength={64}
            autoComplete="new-password"
            aria-describedby="password-error"
          />
          <small
            id="password-error"
            className="error"
            aria-live="polite"></small>
        </figcaption>
        <button
          className="rounded-xl relative p'2 flex justify-center items-center m-auto min-h-[50px] w-fit overflow-hidden border border-emerald-100 bg-white px-3 text-black font-bold cursor-pointer shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-emerald-400 before:transition-all before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full hover:before:bg-emerald-200"
          type="submit">
          S'inscrire
        </button>
      </form>
    </figure>
  );
};

export default RegisterForm;
