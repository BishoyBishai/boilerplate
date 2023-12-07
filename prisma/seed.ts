const { PrismaClient } = require("@prisma/client");

const user = {
  email: "user@boilerplate.com",
  password: "$2a$05$.X2WGIFeO7XvGt8Y1xujOevTW0vDzXTKhHljniTDNGgIDa7/47pGC",
};
const experiences = {
  companyName: "Company A",
  title: "Software Engineer",
  workFrom: "2020-01-01",
  workTo: "2021-12-31",
  tasks: "Design, develop, and test software applications",
  location: "New York",
  tools: "Node.js, Express, MongoDB",
};

const educations = {
  instituteName: "XYZ University",
  studyFrom: "2016-08-01",
  studyTo: "2020-06-30",
  subject: "Computer Science",
  location: "New York",
};
const opportunity = {
  companyName: "ABC Corp",
  jobTitle: "Full Stack Developer",
  jobDescription:
    "Full Stack Developer required to build, design, and implement applications using Node.js, React, and MongoDB.",
  match: 90,
  coverLetter:
    "Dear ABC Corp, I have extensive experience in full stack development...",
};

async function seedDatabase() {
  const prisma = new PrismaClient();

  try {
    const createdUser = await prisma.user.create({
      data: { ...user },
    });

    await prisma.experience.create({
      data: { ...experiences, userId: createdUser.id },
    });
    await prisma.education.create({
      data: { ...educations, userId: createdUser.id },
    });
    await prisma.opportunity.create({
      data: { ...opportunity, userId: createdUser.id },
    });

    console.log(
      `Data seeded successfully, You can login now with email: ${user.email} AND PASSWORD 123456`
    );
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
