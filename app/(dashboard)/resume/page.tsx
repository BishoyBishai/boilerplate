import EmptyExperiences from "@/components/resume/EmptyExperiences";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/db";
import { getCurrentUser } from "@/lib/utils/getCurrentUser";

const getUserExperience = async () => {
  const currentUser = await getCurrentUser();
  const userExperience = await db.experience.findMany({
    where: { userId: currentUser?.id },
  });
  return userExperience;
};

async function Resume() {
  const userExperience = await getUserExperience();
  if (userExperience.length === 0) {
    return <EmptyExperiences />;
  } else {
    // show experiences list
    return (
      <div className="flex justify-between w-full">
        <Card className="border-none md:w-6/12">
          <CardHeader>
            <CardTitle>Your Experience</CardTitle>
            <CardDescription>Show how awesome you are.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 w-full">
            {userExperience.map((experience) => {
              return (
                <div
                  key={experience.id}
                  className="flex items-center justify-between space-x-2"
                >
                  <Label
                    htmlFor="necessary"
                    className="flex flex-col w-full space-y-1"
                  >
                    <div className="flex w-full justify-between items-end">
                      <span className=" capitalize">
                        {experience.companyName}
                      </span>
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

                    {experience.tasks?.split(".").map((task, taskKey) => {
                      return (
                        <span
                          key={taskKey}
                          className="font-normal leading-snug text-muted-foreground py-1"
                        >
                          {task}
                        </span>
                      );
                    })}
                  </Label>
                </div>
              );
            })}
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Save preferences
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Resume;
