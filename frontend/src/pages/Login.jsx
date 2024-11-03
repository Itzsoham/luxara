import { useState } from "react";

function Login() {
  const [currentState, setCurrentState] = useState("Login");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w- [90%] m-auto mt-14 flex flex-col items-center gap-4 text-gray-800 sm:max-w-96"
    >
      <div className="mb-2 mt-10 inline-flex items-center gap-2">
        <p className="text-3xl">{currentState}</p>
        <hr className="☐ h-[1.5px] w-8 border-none bg-gray-800" />
      </div>
      {currentState !== "Login" && (
        <input
          type="text"
          className="w-full border border-gray-800 px-3 py-2"
          placeholder="Name"
        />
      )}
      <input
        type="email"
        className="w-full border border-gray-800 px-3 py-2"
        placeholder="Email"
      />
      <input
        type="password"
        className="w-full border border-gray-800 px-3 py-2"
        placeholder="Password"
      />
      <div className="mt-[-8px] flex w-full justify-between text-sm">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign up")}
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login here
          </p>
        )}
      </div>
      <button className="mt-4 bg-black px-8 py-2 font-light text-white">
        {currentState === "Login" ? "LOG IN" : "SIGN UP"}
      </button>
    </form>
  );
}

export default Login;
