import { TEducation } from "@/lib/validators/education";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Education from "./Education";
import DeleteEducation from "./DeleteEducationModal";
import { EducationModal } from ".";
import AddNewEducationButton from "./AddNewEducationButton";
interface IEducationsListProps {
  educations: TEducation[];
}
const EducationsList: FC<IEducationsListProps> = ({ educations }) => {
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader>
          <div className="flex justify-between">
            <div className="">
              <CardTitle>Your Education</CardTitle>
              <CardDescription>Show how awesome you are.</CardDescription>
            </div>
            <AddNewEducationButton />
          </div>
        </CardHeader>
        <CardContent className="pl-6 w-full">
          {educations.map((education) => {
            return <Education education={education} key={education.id} />;
          })}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <DeleteEducation />
      <EducationModal />
    </>
  );
};

export default EducationsList;
