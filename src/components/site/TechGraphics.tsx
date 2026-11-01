import React from 'react';
import rebateAiImg from '@/assets/rebate-ai-intelligence.jpg';
import softDevPlain from '@/assets/soft-dev-plain.jpg';
import crmMembershipPlain from '@/assets/crm-membership-plain.jpg';
import pubPlain from '@/assets/pub-plain.jpg';
import cloudMigPlain from '@/assets/cloud-migration-plain.jpg';
import ethicsCompliancePlain from '@/assets/ethics-compliance-plain.jpg';
import dataPipelinePlain from '@/assets/data-pipeline-plain.jpg';
import healthcareAiPlain from '@/assets/healthcare-ai-plain.jpg';

/**
 * Modern SVG vector graphics and technical schematics for Right PPT Solutions.
 * Replaces raster stock photos with high-tech, responsive, retina-sharp illustrations.
 */

// 1. Dark glowing circuit mesh for Hero backgrounds
export function HeroTechMesh({ className = 'hero-tech-mesh' }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="heroGlow1" cx="20%" cy="30%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroGlow2" cx="80%" cy="40%" r="45%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroGlow3" cx="50%" cy="85%" r="40%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#064e3b" stopOpacity="0" />
          </radialGradient>
          <pattern id="heroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
            <circle cx="48" cy="0" r="1.5" fill="rgba(96, 165, 250, 0.35)" />
            <circle cx="0" cy="48" r="1.5" fill="rgba(167, 139, 250, 0.35)" />
          </pattern>
          <linearGradient id="traceGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Ambient Dark Canvas */}
        <rect width="1440" height="600" fill="#090d16" />
        <rect width="1440" height="600" fill="url(#heroGlow1)" />
        <rect width="1440" height="600" fill="url(#heroGlow2)" />
        <rect width="1440" height="600" fill="url(#heroGlow3)" />
        <rect width="1440" height="600" fill="url(#heroGrid)" opacity="0.9" />

        {/* Dynamic Circuit Traces & Nodes */}
        <g stroke="url(#traceGrad1)" strokeWidth="1.5" fill="none" opacity="0.65">
          <path d="M120 150 L280 150 L340 210 L520 210" strokeDasharray="6 4" />
          <path d="M420 80 L540 80 L600 140 L780 140 L840 200 L1080 200" />
          <path d="M850 380 L960 380 L1040 300 L1220 300 L1320 400" strokeDasharray="8 6" />
          <path d="M200 480 L360 480 L440 400 L620 400" />
          <path d="M980 100 L1120 100 L1200 180 L1360 180" />
        </g>

        {/* Floating Glowing Nodes */}
        <g>
          <circle cx="340" cy="210" r="4" fill="#38bdf8" />
          <circle cx="340" cy="210" r="10" stroke="#38bdf8" strokeWidth="1.5" opacity="0.4" />
          <circle cx="780" cy="140" r="5" fill="#818cf8" />
          <circle cx="780" cy="140" r="12" stroke="#818cf8" strokeWidth="1.5" opacity="0.4" />
          <circle cx="1040" cy="300" r="4.5" fill="#34d399" />
          <circle cx="1040" cy="300" r="11" stroke="#34d399" strokeWidth="1.5" opacity="0.4" />
          <circle cx="440" cy="400" r="4" fill="#60a5fa" />
          <circle cx="1200" cy="180" r="4" fill="#c084fc" />
        </g>

        {/* Subtle Isometric Grid Accents */}
        <g stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" fill="none">
          <polygon points="1100,80 1200,130 1100,180 1000,130" />
          <polygon points="1100,180 1200,230 1100,280 1000,230" />
          <line x1="1100" y1="180" x2="1100" y2="280" />
          <line x1="1200" y1="130" x2="1200" y2="230" />
          <line x1="1000" y1="130" x2="1000" y2="230" />
        </g>
      </svg>
    </div>
  );
}

// 2. CTA Grid & Network graphic
export function CtaTechGraphic({ className = 'cta-bg-graphic' }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 1440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ctaBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0b132b" />
            <stop offset="50%" stopColor="#1c2541" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <radialGradient id="ctaSpot" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
          <pattern id="ctaDotGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="16" cy="16" r="1.2" fill="rgba(255,255,255,0.08)" />
          </pattern>
        </defs>

        <rect width="1440" height="400" fill="url(#ctaBgGrad)" />
        <rect width="1440" height="400" fill="url(#ctaSpot)" />
        <rect width="1440" height="400" fill="url(#ctaDotGrid)" />

        {/* Converging data rays */}
        <g stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" fill="none">
          <line x1="0" y1="200" x2="1440" y2="200" strokeDasharray="8 6" />
          <line x1="720" y1="0" x2="720" y2="400" strokeDasharray="6 4" opacity="0.4" />
          <circle cx="720" cy="200" r="90" stroke="rgba(96, 165, 250, 0.35)" strokeWidth="1.5" />
          <circle cx="720" cy="200" r="140" stroke="rgba(167, 139, 250, 0.2)" strokeDasharray="4 4" />
          <circle cx="720" cy="200" r="190" stroke="rgba(52, 211, 153, 0.15)" />
        </g>
      </svg>
    </div>
  );
}

// 3. Software Development & Modernization Graphic
export function SoftwareDevGraphic() {
  return (
    <div className="tech-graphic-container bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-4 h-full flex flex-col justify-between overflow-hidden relative border-b border-blue-500/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_70%)]" />
      <div className="relative z-10 flex items-center justify-between border-b border-blue-500/30 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[10px] font-mono text-blue-300 font-semibold tracking-wider">MODERN_ARCHITECTURE.TS</span>
      </div>

      <div className="relative z-10 font-mono text-[11px] space-y-1.5 my-auto text-slate-300">
        <div className="text-emerald-400 font-semibold">// Microservices &amp; Document Pipeline</div>
        <div className="text-blue-300">
          <span className="text-purple-400">const</span> app = <span className="text-amber-300">buildPlatform</span>({`{`}
        </div>
        <div className="pl-3 text-slate-400">
          legacyPreserve: <span className="text-emerald-400">true</span>,
        </div>
        <div className="pl-3 text-slate-400">
          docEngine: <span className="text-sky-300">&apos;Nutrient / PSPDFKit&apos;</span>,
        </div>
        <div className="pl-3 text-slate-400">
          formatSupport: [<span className="text-emerald-300">&apos;Word&apos;</span>, <span className="text-emerald-300">&apos;PDF&apos;</span>, <span className="text-emerald-300">&apos;TIFF&apos;</span>],
        </div>
        <div className="text-blue-300">{`}`});</div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-blue-500/20">
        <span className="flex items-center gap-1 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          100% IP Ownership
        </span>
        <span className="text-blue-400">REST · GraphQL · SDK</span>
      </div>
    </div>
  );
}

// 4. Logistics, Supply Chain & E-commerce Graphic
export function LogisticsTechGraphic() {
  return (
    <div className="tech-graphic-container bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-4 h-full flex flex-col justify-between overflow-hidden relative border-b border-emerald-500/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.22),transparent_70%)]" />
      <div className="relative z-10 flex items-center justify-between border-b border-emerald-500/30 pb-2">
        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">FREIGHT &amp; MARGIN MATRIX</span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">EDI · TMS · WMS</span>
      </div>

      <div className="relative z-10 my-auto grid grid-cols-2 gap-2 text-[11px] font-mono">
        <div className="p-2 rounded bg-slate-800/80 border border-emerald-500/20">
          <span className="text-[9px] text-slate-400 block uppercase">Transit Telemetry</span>
          <strong className="text-emerald-400 text-xs font-semibold block mt-0.5">Real-time GPS</strong>
          <span className="text-[9px] text-slate-300">Automated ETA Sync</span>
        </div>
        <div className="p-2 rounded bg-slate-800/80 border border-emerald-500/20">
          <span className="text-[9px] text-slate-400 block uppercase">Margin Tracking</span>
          <strong className="text-sky-400 text-xs font-semibold block mt-0.5">Quoted vs Actual</strong>
          <span className="text-[9px] text-slate-300">Cost Shield Active</span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-emerald-500/20">
        <span className="flex items-center gap-1 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Paperless Barcode PoD
        </span>
        <span className="text-emerald-300">Automated Dispatch</span>
      </div>
    </div>
  );
}

// 5. AI Networking & Network Security Graphic
export function AiSecurityTechGraphic() {
  return (
    <div className="tech-graphic-container bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-4 h-full flex flex-col justify-between overflow-hidden relative border-b border-indigo-500/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.25),transparent_70%)]" />
      <div className="relative z-10 flex items-center justify-between border-b border-indigo-500/30 pb-2">
        <span className="text-[10px] font-mono text-indigo-300 font-bold uppercase tracking-wider">AI NETWORK &amp; THREAT RADAR</span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">eBPF · P4</span>
      </div>

      <div className="relative z-10 my-auto space-y-1.5 text-[11px] font-mono">
        <div className="flex items-center justify-between text-slate-300">
          <span>Traffic Intelligence:</span>
          <span className="text-emerald-400 font-semibold">Demand Forecast ML</span>
        </div>
        <div className="flex items-center justify-between text-slate-300">
          <span>SDN Optimization:</span>
          <span className="text-sky-400 font-semibold">Automated Workload Balance</span>
        </div>
        <div className="flex items-center justify-between text-slate-300">
          <span>Threat Detection:</span>
          <span className="text-purple-400 font-semibold">DDoS &amp; Encrypted Flow</span>
        </div>
        <div className="flex items-center justify-between text-slate-300">
          <span>Edge Security:</span>
          <span className="text-indigo-400 font-semibold">Lightweight Zero-Trust Auth</span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-indigo-500/20">
        <span className="flex items-center gap-1 text-purple-400">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Active Anomaly Shield
        </span>
        <span className="text-indigo-300">Sub-150ms Telemetry</span>
      </div>
    </div>
  );
}

// 6. Nonprofits & Associations Graphic
export function NonprofitTechGraphic() {
  return (
    <div className="tech-graphic-container bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 p-4 h-full flex flex-col justify-between overflow-hidden relative border-b border-sky-500/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(56,189,248,0.22),transparent_70%)]" />
      <div className="relative z-10 flex items-center justify-between border-b border-sky-500/30 pb-2">
        <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-wider">MEMBERSHIP &amp; PUBLISHING</span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">RyteAI · AMS</span>
      </div>

      <div className="relative z-10 my-auto grid grid-cols-2 gap-2 text-[11px] font-mono">
        <div className="p-2 rounded bg-slate-800/80 border border-sky-500/20">
          <span className="text-[9px] text-slate-400 block uppercase">Retention Sequences</span>
          <strong className="text-sky-400 text-xs font-semibold block mt-0.5">Automated Dues</strong>
          <span className="text-[9px] text-slate-300">+32% Renewal Lift</span>
        </div>
        <div className="p-2 rounded bg-slate-800/80 border border-sky-500/20">
          <span className="text-[9px] text-slate-400 block uppercase">Digital Publishing</span>
          <strong className="text-emerald-400 text-xs font-semibold block mt-0.5">Magazines &amp; LMS</strong>
          <span className="text-[9px] text-slate-300">Subscriber Portals</span>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-sky-500/20">
        <span className="flex items-center gap-1 text-sky-400">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Single Member Record
        </span>
        <span className="text-sky-300">National &amp; Chapters</span>
      </div>
    </div>
  );
}

// 7. About Section: People, Process, Technology Triad Architecture Graphic
export function AboutTeamTriadGraphic() {
  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 md:p-8 border border-slate-700/60 shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.18),transparent_60%)]" />

      {/* Header bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-700/80 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="w-3 h-3 rounded-full bg-purple-500" />
          <span className="text-xs font-mono text-slate-300 font-bold ml-2">RIGHT PPT SOLUTIONS ARCHITECTURE</span>
        </div>
        <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
          THE PPT ADVANTAGE
        </span>
      </div>

      {/* Triad Pillars Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 font-mono text-xs">
        <div className="p-4 rounded-xl bg-slate-900/90 border border-blue-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-bold text-blue-400">PILLAR 01</span>
              <span className="w-2 h-2 rounded-full bg-blue-400" />
            </div>
            <strong className="text-base text-white font-sans font-bold block mb-1">Right People</strong>
            <p className="text-slate-400 text-xs leading-relaxed font-sans mb-3">
              Multidisciplinary engineering squads, domain software architects, and responsive engagement leads.
            </p>
          </div>
          <span className="text-[11px] text-blue-300 font-mono">Senior Engineers · Direct Access</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-bold text-emerald-400">PILLAR 02</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <strong className="text-base text-white font-sans font-bold block mb-1">Right Process</strong>
            <p className="text-slate-400 text-xs leading-relaxed font-sans mb-3">
              Agile sprints, automated CI/CD validation, weekly working demos, and transparent governance.
            </p>
          </div>
          <span className="text-[11px] text-emerald-300 font-mono">Weekly Working Demos · Zero Surprises</span>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/90 border border-purple-500/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-bold text-purple-400">PILLAR 03</span>
              <span className="w-2 h-2 rounded-full bg-purple-400" />
            </div>
            <strong className="text-base text-white font-sans font-bold block mb-1">Right Technology</strong>
            <p className="text-slate-400 text-xs leading-relaxed font-sans mb-3">
              Modern React 19, TypeScript, cloud-native pipelines, eBPF telemetry, and practical enterprise AI.
            </p>
          </div>
          <span className="text-[11px] text-purple-300 font-mono">Future-Proof · 100% IP Ownership</span>
        </div>
      </div>

      {/* Governance & Trust Footer Strip */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-4 border-t border-slate-700/80 font-mono">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Strict Mutual Enterprise NDA Protected
        </span>
        <span className="text-slate-300">Innov8 Pranava Business Park · Hyderabad</span>
      </div>
    </div>
  );
}

// 8. Project Card Graphic Generator for case studies
export function ProjectCardGraphic({ id, title }: { id: string; title: string }) {
  let imgSrc = rebateAiImg;
  let imgAlt = title;

  if (id === 'ai-rebate-processing') {
    imgSrc = rebateAiImg;
    imgAlt = 'AI Rebate Processing & Analytics Intelligence Platform';
  } else if (id === 'legacy-modernization') {
    imgSrc = softDevPlain;
    imgAlt = 'Legacy Application Modernization & Microservices';
  } else if (id === 'crm-membership') {
    imgSrc = crmMembershipPlain;
    imgAlt = 'Integrated CRM and Association Management Platform';
  } else if (id === 'digital-publishing') {
    imgSrc = pubPlain;
    imgAlt = 'Digital Publishing and Learning Platform Modernization';
  } else if (id === 'cloud-crm-migration') {
    imgSrc = cloudMigPlain;
    imgAlt = 'Enterprise Dynamics CRM Cloud Migration';
  } else if (id === 'digital-ethics' || id === 'digital-ethics-platform') {
    imgSrc = ethicsCompliancePlain;
    imgAlt = 'Digital Ethics Guidance and Live Survey Platform';
  } else if (id === 'data-cleansing-migration') {
    imgSrc = dataPipelinePlain;
    imgAlt = 'Azure SQL Data Cleansing and Migration Preparation';
  } else if (id === 'healthcare-ai-solutions' || id === 'healthcare-ai') {
    imgSrc = healthcareAiPlain;
    imgAlt = 'Healthcare AI Clinical Operations and Predictive Diagnostics';
  } else {
    imgSrc = dataPipelinePlain;
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-950 group/img">
      <img
        src={imgSrc}
        alt={imgAlt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
        loading="lazy"
        width={640}
        height={360}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
    </div>
  );
}
