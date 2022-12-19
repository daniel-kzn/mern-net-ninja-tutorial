import { FC } from "react";

interface Props {
  title: string;
  reps: number;
  load: number;
}

const WorkoutDetails: FC<Props> = ({ title, reps, load }) => {
  return (
    <div className="grid grid-cols-3 gap-6 text-white">
      <p className="col-span-2">Titre :</p>
      <p>{title}</p>
      <p className="col-span-2">Charge : </p>
      <p>{load}</p>
      <p className="col-span-2">Répétition : </p>
      <p>{reps}</p>
    </div>
  );
};

export default WorkoutDetails;
