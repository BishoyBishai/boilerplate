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
import { Button } from "@/components/ui/Button";
import Experience from "./Experience";
interface IExperiencesListProps {
  experiences: TExperience[];
}

const ExperiencesList: FC<IExperiencesListProps> = ({ experiences }) => {
  return (
    <>
      <Card className="border-none">
        <CardHeader>
          <CardTitle>Your Experience</CardTitle>
          <CardDescription>Show how awesome you are.</CardDescription>
        </CardHeader>
        <CardContent className="pl-6 w-full">
          {experiences.map((experience) => {
            return <Experience experience={experience} key={experience.id} />;
          })}
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Add more experience
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ExperiencesList;
