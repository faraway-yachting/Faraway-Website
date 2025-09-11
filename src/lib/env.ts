export const getBackendUrl = (): string => {
  return process.env.BACKEND_URL!;
};

export const getFrontendUrl = (): string => {

    return process.env.FRONTEND_URL || "https://faraway-psi.vercel.app";
  
};

export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production';
};
