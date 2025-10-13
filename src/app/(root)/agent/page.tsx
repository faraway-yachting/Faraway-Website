"use client";
import React, { useState, useEffect } from "react";
import Agent from "@/Component/SEO/agents";
import LoginModal from "@/Component/LoginModal";

export default function AgentPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Always show login modal on page load/reload
    setIsAuthenticated(false);
    setShowLoginModal(true);
  }, []);

  const handleLogin = (email: string, password: string): boolean => {
    // Static credentials for agent access
    const validEmail = "agent@faraway.com";
    const validPassword = "agent123";
    
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
