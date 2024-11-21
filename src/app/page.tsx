"use client";

import { type NextPage } from "next";
import {
  useCountCompetitionEntry,
  useCreateCompetitionEntry,
  useFindManyCompetition,
} from "~/lib/hooks";

const Home: NextPage = () => {
  // fetch all competitions
  const { data: allCompetitions, isPending } = useFindManyCompetition({
    include: {
      business: {
        select: {
          id: true,
          name: true,
        },
      },
      entries: true,
    },
  });

  console.log("competitons", allCompetitions);

  // count the total number of entries in the database
  const { data: countOfEntries } = useCountCompetitionEntry();

  // count the total number of entries in nested competition arrays
  const countOfEntriesInCompetitions = allCompetitions?.reduce(
    (acc, competition) => acc + competition.entries.length,
    0,
  );

  // create a new competition entry
  const { mutate: enterCompetition } = useCreateCompetitionEntry({
    optimisticUpdate: true,
  });

  const handleEnterCompetition = (id: string) => {
    enterCompetition({
      data: {
        name: `Entry for competition ${id}`,
        competition: {
          connect: { id },
        },
      },
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-b">
      <section>
        <h1 className="text-center text-4xl font-bold">Minimal Reproduction</h1>
        <p className="text-center text-lg ">
          This is a minimal reproduction of a Zenstack issue, related to
          optimistic updates.
        </p>
      </section>
      <section>
        <h2 className="text-center text-2xl font-bold">Stats</h2>
        <p className="text-center text-lg ">
          There are currently {countOfEntries} entries in the database.
        </p>
        <p className="text-center text-lg ">
          There are currently {countOfEntriesInCompetitions} entries nested in
          competitions.
        </p>
      </section>
      <section>
        <h2 className="text-center text-2xl font-bold">Competitions</h2>
        <p className="text-center text-lg ">
          Here is a list of Competitions from the database:
        </p>
        {isPending ? (
          <p className="text-center text-lg">Loading...</p>
        ) : (
          allCompetitions &&
          allCompetitions.map((competition) => (
            <div key={competition.id} className="my-4 border p-4">
              <h3 className="text-lg font-bold">{competition.name}</h3>
              <p>Business: {competition.business?.name || "No business"}</p>
              <p>Entries: {competition.entries.length}</p>
              <button
                onClick={() => handleEnterCompetition(competition.id)}
                className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
              >
                Enter Competition
              </button>
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default Home;
