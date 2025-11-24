"use client";
import React, { useState, useEffect } from "react";
import Agent from "@/Component/SEO/agents";
import LoginModal from "@/Component/LoginModal";
import { getAgentEmail, getAgentPassword } from "@/lib/env";

export default function AgentPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Always show login modal on page load/reload
    setIsAuthenticated(false);
    setShowLoginModal(true);
  }, []);

  const handleLogin = (email: string, password: string): boolean => {
    // Get credentials from environment variables
    const validEmail = getAgentEmail();
    const validPassword = getAgentPassword();
    
    if (email === validEmail && password === validPassword) {
      setIsAuthenticated(true);
      setShowLoginModal(false);
      return true;
    }
    return false;
  };

  return (
    <>
      <div className={`${!isAuthenticated ? 'opacity-50 pointer-events-none blur-md' : ''}`}>
        <Agent />
      </div>
      
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </>
  );
}
