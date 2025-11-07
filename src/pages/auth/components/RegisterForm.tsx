import { useState } from "react";

const RegisterForm = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmiting] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    setIsSubmiting(true);
    
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
    if (Object.keys(newErrors).length > 0) {
      setIsSubmiting(false);
      return;
    }


    fetch("http://localhost:8000/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, firstname, lastname, email, password })
    })
      .then(data => data.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    setIsSubmiting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col flex-1 justify-center gap-12 p-6">
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 z-1">
        {/* username */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-white font-bold">Pseudo</label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="username"
            placeholder="John123"
            disabled={isSubmitting}
            className="rounded-lg p-2 border border-white bg-white"
            aria-describedby="username-error"
          />
          {errors.username && <small className="text-red-500" id="username-error">{errors.username}</small>}
        </div>

        {/* firstname */}
        <div className="flex flex-col gap-1">
          <label htmlFor="firstname" className="text-white font-bold">Prénom</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            autoComplete="given-name"
            placeholder="John"
            disabled={isSubmitting}
            className="rounded-lg p-2 border border-white bg-white"
            aria-describedby="firstname-error"
          />
          {errors.firstname && <small className="text-red-500" id="firstname-error">{errors.firstname}</small>}
        </div>

        {/* lastname */}
        <div className="flex flex-col gap-1">
          <label htmlFor="lastname" className="text-white font-bold">Nom</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            autoComplete="family-name"
            placeholder="Doe"
            disabled={isSubmitting}
            className="rounded-lg p-2 border border-white bg-white"
            aria-describedby="lastname-error"
          />
          {errors.lastname && <small className="text-red-500" id="lastname-error">{errors.lastname}</small>}
        </div>

        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-white font-bold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="ex : exemple@mail.com"
            disabled={isSubmitting}
            className="rounded-lg p-2 border border-white bg-white"
            aria-describedby="email-error"
          />
          {errors.email && <small className="text-red-500" id="email-error">{errors.email}</small>}
        </div>

        {/* password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-white font-bold">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength={8}
            maxLength={64}
            disabled={isSubmitting}
            autoComplete="new-password"
            className="rounded-lg p-2 border border-white bg-white"
            aria-describedby="password-error"
          />
          {errors.password && <small className="text-red-500" id="password-error">{errors.password}</small>}
        </div>

        {/* confirm-password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="confirm-password" className="text-white font-bold">Confirmation</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            minLength={8}
            maxLength={64}
            disabled={isSubmitting}
            autoComplete="new-password"
            className="rounded-lg p-2 border border-white bg-white"
            aria-describedby="confirm-password-error"
          />
          {errors.confirmPassword && <small className="text-red-500" id="confirm-password-error">{errors.confirmPassword}</small>}
        </div>
      </div>

      <button
        type="submit"
        className="relative m-auto w-fit overflow-hidden px-6 py-3 bg-white text-black font-bold
                  rounded-xl border border-emerald-100 shadow-lg hover:bg-emerald-200
                  cursor-pointer transition-all"
      >
        S&apos;inscrire
      </button>
    </form>
  );
};

export default RegisterForm;
