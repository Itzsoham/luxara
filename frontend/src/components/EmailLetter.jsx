function EmailLetter() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 10% off
      </p>
      <p className="mt-3 text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-6 flex w-full items-center gap-3 border pl-3 sm:w-1/2"
      >
        <input
          className="w-full outline-none sm:flex-1"
          required
          type="email"
          placeholder="Enter your email"
        />
        <button
          className="bg-black px-10 py-4 text-xs text-white"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default EmailLetter;
