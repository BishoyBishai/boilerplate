import { FlaskConicalOff } from "lucide-react";
import AddNewExperienceButton from "./AddNewExperienceButton";

export default function EmptyExperiences() {
  return (
    <div className="flex flex-1 items-center justify-start h-auto">
      <div className="text-4xl flex-1 flex-col items-center flex justify-center">
        <FlaskConicalOff className="text-primary py-4" size={100} />
        <h2 className="text-xl font-semibold mb-4">Empty experiences</h2>
        <p className="text-lg text-muted-foreground mb-4">
          You did not share with us your awesome experiences yet.
        </p>
        <AddNewExperienceButton />
      </div>
    </div>
  );
}
