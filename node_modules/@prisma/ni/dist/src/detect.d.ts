export interface DetectOptions {
    autoInstall?: boolean;
    programmatic?: boolean;
    cwd?: string;
}
export declare function detect({ autoInstall, programmatic, cwd }?: DetectOptions): Promise<"npm" | "pnpm" | "yarn" | "yarn@berry" | "pnpm@6" | "bun" | null>;
