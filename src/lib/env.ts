export const getBackendUrl = (): string => {
  return process.env.BACKEND_URL!;
};

export const getFrontendUrl = (): string => {
  // In production, use the environment variable or fallback to production URL
  if (process.env.NODE_ENV === 'production') {
    return process.env.FRONTEND_URL || "https://faraway-psi.vercel.app";
  }
  // In development, use localhost
  return process.env.FRONTEND_URL || "http://localhost:3000";
};

export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development';
};

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production';
};
