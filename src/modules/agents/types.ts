import type { AppRouter } from "@/trpc/routers/_app";
import { inferProcedureOutput } from "@trpc/server";


// ✅ Best Practice
export type AgentGetOne = inferProcedureOutput<AppRouter["agents"]["getOne"]>
