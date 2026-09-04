import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [utcTime, setUtcTime] = useState('00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setUtcTime(now.toISOString().substring(11, 19));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-dim/40 pt-unit-3xl pb-unit-2xl mt-auto">
      <div className="w-full px-container-margin-sm md:px-container-margin-md lg:px-container-margin-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-unit-xl pb-unit-2xl border-b border-outline-variant/30">
          <div className="md:col-span-5 flex flex-col justify-between space-y-unit-md">
            <div className="space-y-unit-xs">
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                VacationExp
              </h2>
              <p className="font-caption-editorial text-caption-editorial italic text-on-surface-variant max-w-md">
                Plan with AI. Travel with real experiences.
              </p>
            </div>
            <div className="space-y-unit-2xs pt-unit-md">
              <div className="font-meta-mono text-meta-mono text-outline uppercase tracking-wider">
                Editorial Headquarters &amp; Dehradun, Uttarakhand, India
              </div>
              <div className="font-meta-mono text-meta-mono text-on-surface">
                31.1048° N, 77.1734° E &mdash; Dehradun 
              </div>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-unit-lg">
            <div className="space-y-unit-sm">
              <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
                Destinations
              </h3>
              <ul className="space-y-unit-xs font-body-sm text-body-sm text-on-surface-variant">
                <li><a className="hover:text-primary transition-colors" href="#">Manali</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Ladakh</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Goa</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Kerala</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Jaipur</a></li>
              </ul>
            </div>
            <div className="space-y-unit-sm">
              <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
                Intelligence
              </h3>
              <ul className="space-y-unit-xs font-body-sm text-body-sm text-on-surface-variant">
                <li><a className="hover:text-primary transition-colors" href="#">AI Planner</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Curated Itineraries</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Traveler Stories</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Budget Architect</a></li>
              </ul>
            </div>
            <div className="space-y-unit-sm col-span-2 sm:col-span-1">
              <h3 className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
                Publication
              </h3>
              <ul className="space-y-unit-xs font-body-sm text-body-sm text-on-surface-variant">
                <li><a className="hover:text-primary transition-colors" href="#">About</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Journal</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Press Dispatches</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-unit-lg flex flex-col md:flex-row items-center justify-between gap-unit-md">
          <div className="flex items-center gap-unit-lg font-meta-mono text-meta-mono text-outline">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-surface-tint animate-pulse"></span>
              LIVE UTC CHRONOMETER: {utcTime} UTC
            </span>
          </div>
          
          <div className="font-meta-mono text-meta-mono text-outline">
            © 2026 VacationExp Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
