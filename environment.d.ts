declare global {
    namespace NodeJS {
        interface ProcessEnv {
           NEXT_PUBLIC_GRAPHCMS_ENDPOINT: string;
           GRAPHCMS_TOKEN: string;
        }
    }
}