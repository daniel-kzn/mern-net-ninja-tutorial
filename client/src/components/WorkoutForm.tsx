import { FC, useContext, useState } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext";
import { Workout } from "../models/Workout";

const WorkoutForm: FC = () => {
  const { dispatch } = useContext(WorkoutsContext);
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState(0);
  const [load, setLoad] = useState(0);
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const workout: Workout = { title, reps, load };

    fetch("http://localhost:3000/api/workout", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((json) => dispatch({ type: "CREATE_WORKOUT", payload: json.data }))
      .catch((err) => {
        setError(err);
        setEmptyFields(err.emptyFields);
      });
    setTitle("");
    setReps(0);
    setLoad(0);
    setEmptyFields([]);
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className=" text-white grid border-2 rounded-lg border-[#2C2C2C] p-4">
        <h1 className="text-xl my-4">Ajout d'un nouveau workout</h1>
        <div className="rounded border-black border-2 w-max">
          <label>Titre : </label>
          <input
            className="text-black"
            type="text"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />
        </div>

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
        <button className="bg-[#63e96a] hover:bg-[#abffaf] text-black">
          Add
        </button>
      </form>
    </div>
  );
};

export default WorkoutForm;
