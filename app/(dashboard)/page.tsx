import PageTitle from "@/components/shared/PageTitle";
import { Button } from "@/components/ui/Button";
import { FilePlus } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-4 p-8 pt-6 w-full">
      <PageTitle
        title="Job Dashboard"
        subTitle="Here you can manage your job application, and create professional cover letter"
        withAction={
          <Button>
            <FilePlus className="mr-2 h-4 w-4" /> Create Cover letter
          </Button>
        }
      />
      <div className="items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3"></div>
    </div>
  );
}
