import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface/85 backdrop-blur-md border-b border-surface-dim/40">
      <div className="h-20 w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg flex items-center justify-between gap-gutter-default">
        <div className="flex items-center gap-unit-md">
          <img
            alt="VacationExp Brand Emblem"
            className="h-10 w-auto object-contain"
            src="/logo.png"
          />
          <a className="flex flex-col cursor-pointer" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary">
              VacationExp
            </span>
            <span className="font-meta-mono text-meta-mono text-outline uppercase tracking-wider -mt-1 hidden sm:block"></span>
          </a>
        </div>
        <nav
          className="hidden lg:flex items-center gap-unit-lg font-label-md text-label-md"
        >
          <a
            className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              navigate("/dashboard");
            }}
          >
            Dashboard
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              navigate("/community");
            }}
          >
            Community
          </a>
        </nav>
        <div className="flex items-center gap-unit-sm md:gap-unit-md">
          <a
            className="inline-flex items-center bg-primary text-on-primary px-unit-md py-unit-xs rounded-xl font-label-md text-label-md hover:bg-primary-container transition-all group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              navigate("/plan");
            }}
          >
            <span className="mr-unit-xs">Start Journey &rarr;</span>
            <span className="bg-secondary text-on-secondary font-label-caps text-label-caps px-1.5 py-0.5 rounded-full">
              AI
            </span>
          </a>
          {!userInfo ? (
            <a
              className="hidden sm:inline-flex items-center justify-center font-label-md text-label-md text-on-secondary bg-secondary hover:opacity-90 transition-opacity px-unit-md py-unit-xs rounded-xl cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                navigate("/login");
              }}
            >
              Sign In
            </a>
          ) : (
            <a
              className="hidden sm:inline-flex items-center justify-center font-label-md text-label-md text-on-secondary bg-secondary hover:opacity-90 transition-opacity px-unit-md py-unit-xs rounded-xl cursor-pointer"
              onClick={handleLogout}
            >
              Log Out
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
