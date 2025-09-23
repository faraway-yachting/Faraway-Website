export const getBackendUrl = (): string => {
  return process.env.BACKEND_URL!;
};

export const getFrontendUrl = (): string => {

    return process.env.FRONTEND_URL ;
  
};

export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production';
};

export const getGoogleAnalyticsId = (): string => {
  return process.env.NEXT_PUBLIC_GA_ID || '';
};

export const getGoogleTagManagerId = (): string => {
  return process.env.NEXT_PUBLIC_GTM_ID || '';
};