import { FC, useState } from "react";

const WorkoutForm: FC = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const workout = { title, reps, load };

    fetch("http://localhost:3000/api/workout", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((json) => console.log(json));
    setTitle("");
    setReps("");
    setLoad("");
  };

  return (
    <div className="container bg-[#212121]">
      <form onSubmit={handleSubmit} className=" text-white">
        <h3>Ajout d'un nouveau workout</h3>
        <label>Titre :</label>
        <input
          className="text-black"
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          value={title}
        />
        <label>Répétition :</label>
        <input
          className="text-black"
          type="text"
          onChange={(event) => {
            setReps(event.target.value);
          }}
          value={reps}
        />
        <label>Charge :</label>
        <input
          className="text-black"
          type="text"
          onChange={(event) => {
            setLoad(event.target.value);
          }}
          value={load}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default WorkoutForm;
