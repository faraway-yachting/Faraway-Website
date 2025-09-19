import React from 'react';

interface GoogleSearchConsoleProps {
  verificationCode?: string;
}

const GoogleSearchConsole: React.FC<GoogleSearchConsoleProps> = ({ 
  verificationCode = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION 
}) => {
  if (!verificationCode) {
    console.warn('Google Search Console verification code not found. Please set NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_VERIFICATION in your environment variables.');
    return null;
  }

  return (
    <meta 
      name="google-site-verification" 
      content={verificationCode} 
    />
  );
};

export default GoogleSearchConsole;
