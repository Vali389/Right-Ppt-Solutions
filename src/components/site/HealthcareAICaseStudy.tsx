import { Link } from '@tanstack/react-router';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Target,
  Award,
  AlertTriangle,
  Layers,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface HealthcareModule {
  category: string;
  title: string;
  bullets: string[];
  tone: 'blue' | 'violet' | 'pink' | 'green';
}

export const healthcareModules: HealthcareModule[] = [
  // Row 1: Clinical Operations (Blue tone)
  {
    category: 'Clinical Operations',
    title: 'AI Care Coordination',
    bullets: [
      'GenAI clinical co-pilot for treatment suggestions',
      'Smart patient routing by acuity & bed availability',
    ],
    tone: 'blue',
  },
  {
    category: 'Clinical Operations',
    title: 'Workflow Automation',
    bullets: [
      'Auto-generate discharge summaries',
      'Speech-to-EHR transcription & structuring',
    ],
    tone: 'blue',
  },

  // Row 2: Diagnostics & Treatment (Violet/Purple tone)
  {
    category: 'Diagnostics & Treatment',
    title: 'Predictive Diagnostics',
    bullets: [
      'Anomaly detection',
      'Predictions based on medical records',
    ],
    tone: 'violet',
  },
  {
    category: 'Diagnostics & Treatment',
    title: 'Personalized Treatment',
    bullets: [
      'GenAI mental-health chatbot therapy guides',
      'Suggestions and Engagement for on-going treatment',
    ],
    tone: 'violet',
  },

  // Row 3: Patient Engagement (Pink/Rose tone)
  {
    category: 'Patient Engagement',
    title: 'Virtual Health Assistants',
    bullets: [
      '24×7 multilingual appointment/chat triage Agent',
      'Symptom checker & Medication reminder',
    ],
    tone: 'pink',
  },
  {
    category: 'Patient Engagement',
    title: 'Remote Care & Adherence',
    bullets: [
      'Post-discharge monitoring & recovery tracking',
      'Continuous patient engagement & wellness check-ins',
    ],
    tone: 'pink',
  },

  // Row 4: Administration & Compliance (Green/Mint tone)
  {
    category: 'Administration & Compliance',
    title: 'Ops Optimization',
    bullets: [
      'Bed-occupancy optimization',
      'Staff-shift rostering & maintenance-request prioritization',
    ],
    tone: 'green',
  },
  {
    category: 'Administration & Compliance',
    title: 'Compliance & Governance',
    bullets: [
      'Automated HIPAA audit logging & compliance tracking',
      'Clinical protocol verification & accreditation reporting',
    ],
    tone: 'green',
  },

  // Row 5: Research & Drug Discovery (Blue tone)
  {
    category: 'Research & Drug Discovery',
    title: 'Literature Mining',
    bullets: [
      'GenAI summarizing 1,000s of papers',
      'AI-agent spotting novel biomarker correlations',
    ],
    tone: 'blue',
  },
  {
    category: 'Research & Drug Discovery',
    title: 'Molecular Viz & Simulation',
    bullets: [
      'AI molecule generator + in-silico testing',
      'Clinical-trial outcome simulator',
    ],
    tone: 'blue',
  },

  // Row 6: Revenue Cycle & Supply Chain (Violet & Pink tones)
  {
    category: 'Claims, Billing & Revenue Cycle',
    title: 'Claims & Revenue Cycle',
    bullets: [
      'GenAI appeal-letter drafting for denials',
      'Payment variance dashboards',
    ],
    tone: 'violet',
  },
  {
    category: 'Supply Chain & Procurement',
    title: 'Supply Chain Optimization',
    bullets: [
      'Predictive inventory management & equipment maintenance',
      'Automated vendor reconciliation & contract compliance',
    ],
    tone: 'pink',
  },

  // Row 7: Workforce & Semantic Insights (Green & Blue tones)
  {
    category: 'Workforce Management',
    title: 'Staffing & Retention',
    bullets: [
      'AI-agent optimal shift-roster generator',
      'Learning-path personalization',
    ],
    tone: 'green',
  },
  {
    category: 'Semantic Insights',
    title: 'Insights & Dashboards',
    bullets: [
      'Enterprise semantic search across database',
      'Conversational Analytics, Dashboard & Alerts',
    ],
    tone: 'blue',
  },
];

export function HealthcareAICaseStudyModalContent({ onClose }: { onClose?: () => void }) {
  return (
    <div className="healthcare-case-study-root bg-white text-slate-800 p-6 sm:p-10 rounded-2xl max-w-5xl mx-auto">
      {/* 1. Header Banner matching User Screenshot 1 */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mb-3 font-serif">
            Healthcare AI Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-serif">
            Deploy autonomous, goal-driven AI systems that learn, adapt, and collaborate—minimizing manual overhead while maximizing impact.
          </p>

          {/* Pill Badges matching Screenshot 1 */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-slate-700 bg-[#e2e8f0] shadow-xs">
              AI Agents
            </span>
            <span className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2563eb] to-[#7c3aed] shadow-xs">
              Semantic Enterprise
            </span>
            <span className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#4f46e5] via-[#9333ea] to-[#db2777] shadow-xs">
              Quick Implementation
            </span>
          </div>
        </div>

        {/* Authentic SVG Medical Shield Badge matching Screenshot 1 */}
        <div className="hidden md:flex items-center justify-center shrink-0">
          <div className="relative w-24 h-28 flex items-center justify-center">
            <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-sm" fill="none">
              <path
                d="M50 4 C76 4, 92 14, 92 28 C92 74, 60 106, 50 116 C40 106, 8 74, 8 28 C8 14, 24 4, 50 4 Z"
                fill="#e7f0fa"
                stroke="#cfe1f5"
                strokeWidth="2.5"
              />
              <path
                d="M42 38 H58 V52 H72 V68 H58 V82 H42 V68 H28 V52 H42 Z"
                fill="#2563eb"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 2. Subheader matching Screenshot 1 */}
      <div className="pt-8 pb-6">
        <h3 className="text-xl sm:text-2xl font-black text-[#1e293b] font-serif tracking-tight mb-1">
          AI Solutions
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#3b82f6] tracking-tight font-serif drop-shadow-[0_2px_2px_rgba(59,130,246,0.25)]">
          To Multiply Business Value
        </h2>
      </div>

      {/* 3. 14 Cards Grid (7 rows of 2 cards) matching Screenshots 1, 2, and 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
        {healthcareModules.map((mod, index) => {
          let toneBg = 'bg-[#edf5fd] border-[#d6e7fb]';
          if (mod.tone === 'violet') toneBg = 'bg-[#f3f0fd] border-[#e3dbfc]';
          if (mod.tone === 'pink') toneBg = 'bg-[#fdf1f4] border-[#fadce4]';
          if (mod.tone === 'green') toneBg = 'bg-[#edf8f1] border-[#d2f0df]';

          return (
            <div
              key={index}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 hover:shadow-md ${toneBg}`}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-white text-slate-800 text-[11px] sm:text-xs font-bold mb-2 border border-slate-200/60 shadow-xs">
                {mod.category}
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#1e293b] mb-2 tracking-tight font-serif">
                {mod.title}
              </h3>
              <ul className="space-y-1 text-xs sm:text-[13.5px] text-slate-700 leading-normal">
                {mod.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="text-slate-500 font-bold select-none text-sm leading-none mt-0.5">•</span>
                    <span className="font-normal">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* 4. Enterprise Security & Architecture Guarantees */}
      <div className="p-6 rounded-2xl bg-slate-900 text-white mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck size={16} />
              HIPAA Compliant · Google Cloud Certified Architecture
            </div>
            <h3 className="text-xl font-bold text-white mb-1.5">
              Robust Security, Verified Governance &amp; High Reliability
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              All healthcare AI workflows operate within VPC-isolated boundaries where medical records and patient data are never used for public model training. Full audit logging, encrypted e-signatures, and human-in-the-loop validation checkpoints are included out of the box.
            </p>
          </div>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold shrink-0">
            <Link to="/contact" onClick={onClose}>
              Deploy Healthcare AI <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* 5. Modal Footer Action */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <span className="text-xs text-slate-500 font-medium">
          Source: Healthcare AI Solutions Portfolio · Right PPT Solutions
        </span>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/917386257784?text=Hi%20RightPPT%2C%20I%20am%20interested%20in%20Healthcare%20AI%20Solutions."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition-all hover:scale-105"
          >
            WhatsApp Healthcare Lead
          </a>
          <Button asChild variant="outline" size="sm" className="rounded-xl">
            <Link to="/contact" onClick={onClose}>
              Request Technical Consultation <ArrowUpRight size={14} className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
