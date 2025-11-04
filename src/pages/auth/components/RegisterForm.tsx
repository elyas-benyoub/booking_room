import { useState } from "react";

const RegisterForm = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);

    const username = formData.get("username")?.toString() || "";
    const firstname = formData.get("firstname")?.toString() || "";
    const lastname = formData.get("lastname")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    const confirmPassword = formData.get("confirm-password")?.toString() || "";

    const newErrors: { [key: string]: string } = {};
    if (!username) newErrors.username = "Le pseudo est requis";
    if (!firstname) newErrors.firstname = "Le prénom est requis";
    if (!lastname) newErrors.lastname = "Le nom est requis";
    if (!email) newErrors.email = "L'email est requis";
    if (!password) newErrors.password = "Le mot de passe est requis";
    if (password !== confirmPassword) newErrors.confirmPassword = "Les mots de passe ne correspondent pas";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;


    fetch("http://localhost:8000/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, firstname, lastname, email, password })
    })
      .then(data => data.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row justify-center gap-12 p-6">

      <div className="flex flex-col gap-4 w-full lg:w-1/3">
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-white font-bold">Pseudo</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="John123"
            className="rounded-lg p-2 border border-white bg-white"
          />
          {errors.username && <small className="text-red-500">{errors.username}</small>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="firstname" className="text-white font-bold">Prénom</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="John"
            className="rounded-lg p-2 border border-white bg-white"
          />
          {errors.firstname && <small className="text-red-500">{errors.firstname}</small>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="lastname" className="text-white font-bold">Nom</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Doe"
            className="rounded-lg p-2 border border-white bg-white"
          />
          {errors.lastname && <small className="text-red-500">{errors.lastname}</small>}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 w-full lg:w-1/3">
        <img src="src/assets/ballon.png" className="w-56 h-56 object-contain" alt="ballon" />
        <button
          type="submit"
          className="relative overflow-hidden px-6 py-3 bg-white text-black font-bold rounded-xl border border-emerald-100 shadow-lg hover:bg-emerald-200 transition-all"
        >
          S'inscrire
        </button>
      </div>

      <div className="flex flex-col gap-4 w-full lg:w-1/3">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-white font-bold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ex : exemple@mail.com"
            className="rounded-lg p-2 border border-white bg-white"
          />
          {errors.email && <small className="text-red-500">{errors.email}</small>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-white font-bold">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength={8}
            maxLength={64}
            className="rounded-lg p-2 border border-white bg-white"
          />
          {errors.password && <small className="text-red-500">{errors.password}</small>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="confirm-password" className="text-white font-bold">Confirmation Mot de passe</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            minLength={8}
            maxLength={64}
            className="rounded-lg p-2 border border-white bg-white"
          />
          {errors.confirmPassword && <small className="text-red-500">{errors.confirmPassword}</small>}
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
