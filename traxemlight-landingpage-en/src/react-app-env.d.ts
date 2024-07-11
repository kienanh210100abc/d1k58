/// <reference types="react-scripts" />
// interface ImportMetaEnv {
//     readonly SKIP_PREFLIGHT_CHECK: boolean;
//     readonly DRAWER_WIDTH: number;
//     readonly THEME: string;
//     readonly LANGUAGE: string;
//     readonly DELAY_GET_DATA: number;
//     readonly DEBOUNCE_TIME: number;
//     readonly MAX_SNACKBAR: numbern;
//     readonly AUTO_HIDE_SNACKBAR: number;
// }

// interface ImportMeta {
//     readonly env: ImportMetaEnv;
// }

interface ImportMetaEnv {
    [key: string]: any;
    BASE_URL: string;
    MODE: string;
    DEV: boolean;
    PROD: boolean;
    SSR: boolean;
}

interface ImportMeta {
    url: string;

    readonly hot?: import('./hot').ViteHotContext;

    readonly env: ImportMetaEnv;

    glob: import('./importGlob').ImportGlobFunction;
}
