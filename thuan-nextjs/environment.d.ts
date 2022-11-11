declare namespace NodeJS {
    export interface ProcessEnv {
      readonly NEXTJS_API_KEY : string,
      readonly NEXTJS_APP_AUTH_DOMAIN:string,
      readonly NEXTJS_APP_DATABASE_URL: string
      readonly NEXTJS_APP_PROJECT_ID: string
      readonly  NEXTJS_APP_STORAGE_BUCKET: string
      readonly NEXTJS_APP_MESSAGING_SENDER_ID:string
      readonly  NEXTJS_APP_ID: string
      readonly  NEXTJS_APP_MEASUREMENT_ID: string
    }
  }