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
          <div className="flex flex-col gap-2">
            <div className="capitalize text-primary">
              {experience.companyName}
            </div>
            <div className="capitalize text-lg">{experience.title}</div>
          </div>

          {/* Company Location and the working dates on the right side */}
          <div className="capitalize text-muted-foreground text-right space-y-2">
            {experience.location && <span>{experience.location}</span>}
            {experience.workFrom && (
              <div>
                <span className="capitalize text-muted-foreground">
                  {experience.workFrom}
                </span>
                -
                <span className="capitalize text-muted-foreground">
                  {experience.workTo || "Present"}
                </span>
              </div>
            )}
          </div>
        </div>
        {/* Task speared by dots */}
        <div className="pt-2">
          {experience.tasks?.split("\n").map((task, taskKey) => {
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
