/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '@fontsource-variable/rubik';

interface ImportMetaEnv {
  readonly BIRTH_DATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
