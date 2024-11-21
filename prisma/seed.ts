// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await clearAllData();

  // Create 10 Businesses
  const businesses = [];
  for (let i = 1; i <= 5; i++) {
    const business = await prisma.business.create({
      data: {
        name: `Business ${i}`,
      },
    });
    businesses.push(business);
    console.log(`Created business: ${business.name}`);
  }

  // Create 10 Competitions and connect half to businesses
  const competitions = [];
  for (let i = 1; i <= 5; i++) {
    const businessToAdd =
      i % 2 === 0 ? businesses[i % businesses.length] : null;
    const competition = await prisma.competition.create({
      data: {
        name: `Competition ${i}`,
        ...(businessToAdd
          ? {
              business: {
                connect: { id: businesses[i % businesses.length]?.id }, // Assign competitions to businesses
              },
            }
          : {}),
      },
    });
    competitions.push(competition);
    console.log(`Created competition: ${competition.name}`);
  }

  // Create a bunch of Competition Entries
  for (const competition of competitions) {
    // Create a random number of entries for each competition
    const entriesCount = Math.floor(Math.random() * 5) + 1; // Between 1 and 5 entries
    for (let i = 1; i <= entriesCount; i++) {
      const entry = await prisma.competitionEntry.create({
        data: {
          name: `Entry ${i} for ${competition.name}`,
          competition: {
            connect: { id: competition.id },
          },
        },
      });
      console.log(`Created competition entry: ${entry.name}`);
    }
  }

  console.log("Database has been seeded successfully.");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function clearAllData() {
  console.log("WARNING CLEARING DATA FROM DATABASE");

  // Disable foreign key constraints
  await prisma.$executeRawUnsafe(`PRAGMA foreign_keys = OFF;`);

  // List of tables to truncate
  const tables = ["Business", "Competition", "CompetitionEntry"];

  // Truncate each table
  for (const table of tables) {
    await prisma.$executeRawUnsafe(`DELETE FROM "${table}";`);
  }

  // Re-enable foreign key constraints
  await prisma.$executeRawUnsafe(`PRAGMA foreign_keys = ON;`);

  await prisma.$disconnect();

  console.log("All data cleared");
}
