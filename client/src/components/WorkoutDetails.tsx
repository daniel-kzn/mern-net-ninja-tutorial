import { FC, useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext";

interface Props {
  _id: string;
  title: string;
  reps: number;
  load: number;
}

const WorkoutDetails: FC<Props> = ({ _id, title, reps, load }) => {
  const { dispatch } = useContext(WorkoutsContext);

  const handleDeleteClick = async () => {
    console.log(_id);

    const resp = await fetch("http://localhost:3000/api/workout/" + _id, {
      method: "DELETE",
    });
    console.log(resp);

    const json = await resp.json();

    console.log(json);

    if (resp.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json.data });
    }
  };
  return (
    <div className="grid grid-cols-3 gap-6 bg-[#202020] text-white  rounded-lg p-4">
      <p className="col-span-2">Titre :</p>
      <p>{title}</p>
      <p className="col-span-2">Charge : </p>
      <p>{load}</p>
      <p className="col-span-2">Répétition : </p>
      <p>{reps}</p>
      <button className="bg-red-400" onClick={handleDeleteClick}>
        delete
      </button>
    </div>
  );
};

export default WorkoutDetails;
