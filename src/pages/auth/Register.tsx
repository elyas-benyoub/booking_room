import RegisterForm from "./components/RegisterForm";

const Register = () => {

  return (
    <div className="flex flex-col justify-center m-auto bg-emerald-500 p-3 rounded-xl gap-10 mt-10">
      <h1 className="flex justify-center mb-3 text-4xl font-extrabold text-white underline">
        Inscription
      </h1>
      <RegisterForm />
    </div>
  )
}

export default Register;