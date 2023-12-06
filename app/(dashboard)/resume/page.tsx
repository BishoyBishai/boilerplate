import { EducationModal, EducationsList } from "@/components/resume/educations";
import {
  ExperiencesList,
  EmptyExperiences,
  ExperienceModal,
} from "@/components/resume/experiences";

import { db } from "@/db";
import { getCurrentUser } from "@/lib/utils/getCurrentUser";

const getUserExperience = async (userId: string) => {
  const userExperiences = await db.experience.findMany({
    where: { userId },
  });
  return userExperiences;
};
const getUserEducation = async (userId: string) => {
  const userEducations = await db.education.findMany({
    where: { userId },
  });
  return userEducations;
};

async function Resume() {
  const currentUser = await getCurrentUser();

  const userExperiences = await getUserExperience(currentUser?.id!);
  const userEducations = await getUserEducation(currentUser?.id!);

  return (
    <>
      {userExperiences.length === 0 ? (
        <EmptyExperiences />
      ) : (
        <div className="flex justify-between w-full">
          <div className="w-full lg:w-6/12">
            <ExperiencesList experiences={userExperiences} />
            <EducationsList educations={userEducations} />
          </div>
        </div>
      )}

      <ExperienceModal />
      <EducationModal />
    </>
  );
}

export default Resume;
