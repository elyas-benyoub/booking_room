import RegisterForm from "./components/RegisterForm";
import ballon from "../../assets/ballon.webp";

const Register = () => {

  return (
    <div className="relative flex flex-col justify-center mx-4 sm:w-[628px] sm:mx-auto bg-emerald-500 px-3 py-6 rounded-xl gap-10 mt-10">
      <img
        src={ballon}
        alt="Un ballon sur le gazon"
        fetchPriority="high"
        decoding="async"
        width="1920"
        height="1080"
        className="absolute hidden inset-0 w-full h-full object-cover opacity-30 p-15 md:block"
      />

      <h1 className="flex justify-center mb-3 text-4xl font-extrabold text-white text-shadow-green-900">
        Inscription
      </h1>
      <RegisterForm />
    </div>
  )
}

export default Register;