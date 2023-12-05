import { TExperience } from "@/lib/validators/experience";
import { FC } from "react";
import { Label } from "@/components/ui/Label";
import ExperienceActions from "./ExperienceActions";

interface IExperienceProps {
  experience: TExperience;
}

const Experience: FC<IExperienceProps> = ({ experience }) => {
  return (
    <div className="flex items-start justify-between py-4 gap-2">
      <Label className="flex flex-col flex-1 w-full space-y-1">
        {/* Company Header */}
        <div className="flex w-full justify-between items-end">
          {/* Company Name on left side */}
          <span className="capitalize">{experience.companyName}</span>

          {/* Company Location and the working dates on the right side */}
          <div className="capitalize text-muted-foreground text-right space-y-2">
            <span>{experience.location}</span>
            <div>
              <span className="capitalize text-muted-foreground">
                {experience.workFrom}
              </span>
              -
              <span className="capitalize text-muted-foreground">
                {experience.workTo}
              </span>
            </div>
          </div>
        </div>
        {/* Task speared by dots */}
        {/* TODO:// separate it by <br/>  */}
        <div className="pt-2">
          {experience.tasks?.split(".").map((task, taskKey) => {
            return (
              <div
                key={taskKey}
                className="font-normal leading-snug text-muted-foreground py-1"
              >
                {task}
              </div>
            );
          })}
        </div>
      </Label>
      {/* Action */}
      <ExperienceActions experience={experience} />
    </div>
  );
};

export default Experience;
