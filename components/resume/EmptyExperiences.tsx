import { FlaskConicalOff, ListPlus } from "lucide-react";
import { Button } from "../ui/Button";
import Link from "next/link";

export default function EmptyExperiences() {
  return (
    <div className="flex flex-1 items-center justify-start h-auto">
      <div className="text-4xl flex-1 flex-col items-center flex justify-center">
        <FlaskConicalOff className="text-primary py-4" size={100} />
        <h2 className="text-xl font-semibold mb-4">Empty experiences</h2>
        <p className="text-lg text-muted-foreground mb-4">
          You did not share with us your awesome experiences yet.
        </p>
        <Button>
          <ListPlus className="mr-2 h-4 w-4" />
          <Link href="/resume/create">Add Experiences</Link>
        </Button>
      </div>
    </div>
  );
}
