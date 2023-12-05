import {
  ExperiencesList,
  EmptyExperiences,
  ExperienceModal,
} from "@/components/resume/experiences";

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

  return (
    <>
      {userExperiences.length === 0 ? (
        <EmptyExperiences />
      ) : (
        <div className="flex justify-between w-full">
          <div className="lg:w-6/12">
            <ExperiencesList experiences={userExperiences} />
          </div>
        </div>
      )}
      <ExperienceModal />
    </>
  );
}

export default Resume;
