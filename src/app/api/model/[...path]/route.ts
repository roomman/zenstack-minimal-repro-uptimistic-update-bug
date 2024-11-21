import { enhance } from "@zenstackhq/runtime";
import { NextRequestHandler } from "@zenstackhq/server/next";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

// create an enhanced Prisma client with user context
async function getPrisma() {
  return enhance(db, { user: { id: "test" } });
}

const handler = NextRequestHandler({ getPrisma, useAppDir: true });

export {
  handler as DELETE,
  handler as GET,
  handler as PATCH,
  handler as POST,
  handler as PUT,
};
