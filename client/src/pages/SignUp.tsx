import { FC, useState } from "react";

const SignUp: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};
  return (
    <section className="container h-screen">
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="bg-[#323232] grid grid-cols-2 basis-1/2 gap-4">
          <form className="text-white" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <label>Name :</label>
            <input
              className="text-black"
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <label>Email :</label>
            <input
              className="text-black"
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <label>Password :</label>
            <input
              className="text-black"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button className="bg-[#90dbf4] p-4 rounded-lg text-black">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
