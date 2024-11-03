import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log(email, password);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="rounded-1g max-w-md bg-white px-8 py-6 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Admin Panel</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 min-w-72">
            <p className="mb-2 text-sm font-medium text-gray-700">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none"
              type="email"
              placeholder="Enter admin email"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="mb-2 text-sm font-medium text-gray-700">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none"
              type="password"
              placeholder="Enter admin password"
              required
            />
          </div>
          <button
            type="submit"
            className="☐ mt-2 w-full rounded-md bg-black px-4 py-2 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
