import type { Agent } from './agents';
interface Config {
    defaultAgent: Agent | 'prompt';
    globalAgent: Agent;
}
export declare function getConfig(): Promise<Config>;
export declare function getDefaultAgent(programmatic?: boolean): Promise<"npm" | "pnpm" | "yarn" | "yarn@berry" | "pnpm@6" | "bun" | "prompt">;
export declare function getGlobalAgent(): Promise<"npm" | "pnpm" | "yarn" | "yarn@berry" | "pnpm@6" | "bun">;
export {};
