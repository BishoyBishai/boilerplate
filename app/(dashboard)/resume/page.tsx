import EmptyExperiences from "@/components/resume/EmptyExperiences";
import ExperiencesList from "@/components/resume/ExperiencesList";

import { db } from "@/db";
import { getCurrentUser } from "@/lib/utils/getCurrentUser";

const getUserExperience = async () => {
  const currentUser = await getCurrentUser();
  const userExperiences = await db.experience.findMany({
    where: { userId: currentUser?.id },
  });
  return userExperiences;
};

async function Resume() {
  const userExperiences = await getUserExperience();
  if (userExperiences.length === 0) {
    return <EmptyExperiences />;
  } else {
    return (
      <div className="flex justify-between w-full">
        <div className="md:w-6/12">
          <ExperiencesList experiences={userExperiences} />
        </div>
      </div>
    );
  }
}

export default Resume;
