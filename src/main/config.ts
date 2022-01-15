/* eslint-disable import/prefer-default-export */
export const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true'
