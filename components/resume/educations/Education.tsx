import { TEducation } from "@/lib/validators/education";
import { FC } from "react";
import { Label } from "@/components/ui/Label";
import EducationActions from "./EducationActions";

interface IEducationProps {
  education: TEducation;
}

const Education: FC<IEducationProps> = ({ education }) => {
  return (
    <div className="flex items-start justify-between py-4 gap-2">
      <Label className="flex flex-col flex-1 w-full space-y-1">
        {/* Company Header */}
        <div className="flex w-full justify-between items-start">
          {/* Company Name on left side */}
          <div className="flex flex-col gap-2">
            <div className="capitalize text-primary">
              {education.instituteName}
            </div>
            <div className="capitalize text-lg">{education.subject}</div>
          </div>

          {/* Company Location and the working dates on the right side */}
          <div className="capitalize text-muted-foreground text-right space-y-2">
            {education.location && <span>{education.location}</span>}
            {education.studyFrom && (
              <div>
                <span className="capitalize text-muted-foreground">
                  {education.studyTo}
                </span>
                -
                <span className="capitalize text-muted-foreground">
                  {education.workTo || "Present"}
                </span>
              </div>
            )}
          </div>
        </div>
      </Label>
      {/* Action */}
      <EducationActions education={education} />
    </div>
  );
};

export default Education;
