import { TExperience } from "@/lib/validators/experience";
import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Experience from "./Experience";
import DeleteExperience from "./DeleteExperienceModal";
import { ExperienceModal } from ".";
import AddNewExperienceButton from "./AddNewExperienceButton";
interface IExperiencesListProps {
  experiences: TExperience[];
}
const ExperiencesList: FC<IExperiencesListProps> = ({ experiences }) => {
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader>
          <div className="flex justify-between">
            <div className="">
              <CardTitle>Your Experience</CardTitle>
              <CardDescription>Show how awesome you are.</CardDescription>
            </div>
            <AddNewExperienceButton />
          </div>
        </CardHeader>
        <CardContent className="pl-6 w-full">
          {experiences.map((experience) => {
            return <Experience experience={experience} key={experience.id} />;
          })}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <DeleteExperience />
      <ExperienceModal />
    </>
  );
};

export default ExperiencesList;
