import type { AppRouter } from "@/trpc/routers/_app";
import { inferRouterOutputs } from "@trpc/server";


// ✅ Best Practice
export type AgentGetOne = inferRouterOutputs<AppRouter>["agents"]["getOne"]
