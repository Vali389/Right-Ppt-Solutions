import React from 'react';

interface RightPptLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function RightPptLogo({ className, ...props }: RightPptLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 680 430"
      className={className}
      role="img"
      aria-label="Right PPT Solutions Logo"
      {...props}
    >
      <defs>
        <linearGradient id="logoBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00a8ff" />
          <stop offset="60%" stopColor="#0077e6" />
          <stop offset="100%" stopColor="#0060c7" />
        </linearGradient>
        <linearGradient id="logoGreenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="60%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="logoPurpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="60%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id="logoArrowGrad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00b4d8" />
          <stop offset="100%" stopColor="#0066cc" />
        </linearGradient>
        <filter id="logoBadgeShadow" x="-5%" y="-10%" width="115%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* 1. TOP BLUE STREAM */}
      <path d="M 230 20 L 290 20 C 370 20 440 98 506 122 L 506 127 C 438 107 368 76 290 76 L 230 76 Z" fill="url(#logoBlueGrad)" />

      {/* 2. MIDDLE GREEN STREAM */}
      <path d="M 230 92 L 290 92 C 370 92 438 123 506 127 L 506 133 C 438 137 370 148 290 148 L 230 148 Z" fill="url(#logoGreenGrad)" />

      {/* 3. BOTTOM PURPLE STREAM */}
      <path d="M 230 164 L 290 164 C 368 164 438 153 506 133 L 506 138 C 440 162 370 220 290 220 L 230 220 Z" fill="url(#logoPurpleGrad)" />

      {/* 4. TOP BLUE PILL BADGE */}
      <rect x="10" y="20" width="280" height="56" rx="28" fill="url(#logoBlueGrad)" filter="url(#logoBadgeShadow)" />
      {/* People Icon */}
      <g transform="translate(24, 28) scale(1.6)" fill="#ffffff">
        <circle cx="12" cy="7" r="3.2" />
        <path d="M 6.5 17.5 C 6.5 13.8 8.9 12 12 12 C 15.1 12 17.5 13.8 17.5 17.5 Z" />
        <circle cx="6" cy="9" r="2.2" />
        <path d="M 2 17.5 C 2 14.8 3.8 13.5 6 13.5 C 6.8 13.5 7.5 13.7 8.1 14 C 7.5 14.9 7.2 16.1 7.2 17.5 Z" opacity="0.85" />
        <circle cx="18" cy="9" r="2.2" />
        <path d="M 16 17.5 C 16 16.1 15.7 14.9 15.1 14 C 15.7 13.7 16.4 13.5 17.2 13.5 C 19.4 13.5 21.2 14.8 21.2 17.5 Z" opacity="0.85" />
      </g>
      <text x="74" y="44" fill="#ffffff" fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.8">RIGHT</text>
      <text x="74" y="63" fill="#ffffff" fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.8">PEOPLE</text>

      {/* 5. MIDDLE GREEN PILL BADGE */}
      <rect x="10" y="92" width="280" height="56" rx="28" fill="url(#logoGreenGrad)" filter="url(#logoBadgeShadow)" />
      {/* Gear Icon */}
      <g transform="translate(26, 100) scale(1.6)" fill="#ffffff">
        <path d="M 12 8 C 9.79 8 8 9.79 8 12 C 8 14.21 9.79 16 12 16 C 14.21 16 16 14.21 16 12 C 16 9.79 14.21 8 12 8 Z M 19.43 12.98 C 19.47 12.66 19.5 12.34 19.5 12 C 19.5 11.66 19.47 11.34 19.43 11.02 L 21.54 9.37 C 21.73 9.22 21.78 8.95 21.66 8.73 L 19.66 5.27 C 19.54 5.05 19.27 4.96 19.05 5.05 L 16.56 6.05 C 16.04 5.65 15.48 5.32 14.87 5.07 L 14.49 2.42 C 14.46 2.18 14.25 2 14 2 L 10 2 C 9.75 2 9.54 2.18 9.51 2.42 L 9.13 5.07 C 8.52 5.32 7.96 5.66 7.44 6.05 L 4.95 5.05 C 4.73 4.96 4.46 5.05 4.34 5.27 L 2.34 8.73 C 2.21 8.95 2.27 9.22 2.46 9.37 L 4.57 11.02 C 4.53 11.34 4.5 11.67 4.5 12 C 4.5 12.33 4.53 12.66 4.57 12.98 L 2.46 14.63 C 2.27 14.78 2.21 15.05 2.34 15.27 L 4.34 18.73 C 4.46 18.95 4.73 19.03 4.95 18.95 L 7.44 17.95 C 7.96 18.35 8.52 18.68 9.13 18.93 L 9.51 21.58 C 9.54 21.82 9.75 22 10 22 L 14 22 C 14.25 22 14.46 21.82 14.49 21.58 L 14.87 18.93 C 15.48 18.68 16.04 18.34 16.56 17.95 L 19.05 18.95 C 19.27 19.04 19.54 18.95 19.66 18.73 L 21.66 15.27 C 21.78 15.05 21.73 14.78 21.54 14.63 L 19.43 12.98 Z" />
      </g>
      <text x="74" y="116" fill="#ffffff" fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.8">RIGHT</text>
      <text x="74" y="135" fill="#ffffff" fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.8">PROCESS</text>

      {/* 6. BOTTOM PURPLE PILL BADGE */}
      <rect x="10" y="164" width="280" height="56" rx="28" fill="url(#logoPurpleGrad)" filter="url(#logoBadgeShadow)" />
      {/* Circuit Icon */}
      <g transform="translate(24, 172) scale(1.6)" fill="#ffffff" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" fill="#ffffff" stroke="none" />
        <line x1="12" y1="9" x2="12" y2="4" strokeWidth="1.8" />
        <circle cx="12" cy="3" r="2" fill="#ffffff" stroke="none" />
        <line x1="12" y1="15" x2="12" y2="20" strokeWidth="1.8" />
        <circle cx="12" cy="21" r="2" fill="#ffffff" stroke="none" />
        <line x1="9" y1="12" x2="4" y2="12" strokeWidth="1.8" />
        <circle cx="3" cy="12" r="2" fill="#ffffff" stroke="none" />
        <line x1="15" y1="12" x2="20" y2="12" strokeWidth="1.8" />
        <circle cx="21" cy="12" r="2" fill="#ffffff" stroke="none" />
        <line x1="7" y1="7" x2="5" y2="5" strokeWidth="1.4" />
        <circle cx="4.5" cy="4.5" r="1.5" fill="#ffffff" stroke="none" />
        <line x1="17" y1="17" x2="19" y2="19" strokeWidth="1.4" />
        <circle cx="19.5" cy="19.5" r="1.5" fill="#ffffff" stroke="none" />
      </g>
      <text x="74" y="188" fill="#ffffff" fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.8">RIGHT</text>
      <text x="74" y="207" fill="#ffffff" fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="15" letterSpacing="0.5">TECHNOLOGY</text>

      {/* 7. CONCENTRIC BULLSEYE TARGET */}
      <g transform="translate(510, 130)">
        <circle cx="0" cy="0" r="92" fill="none" stroke="#0a192f" strokeWidth="18" />
        <circle cx="0" cy="0" r="74" fill="none" stroke="#ffffff" strokeWidth="18" />
        <circle cx="0" cy="0" r="56" fill="none" stroke="#0a192f" strokeWidth="16" />
        <circle cx="0" cy="0" r="39" fill="none" stroke="#ffffff" strokeWidth="16" />
        <circle cx="0" cy="0" r="24" fill="#0084ff" />
      </g>

      {/* 8. SHARP BLUE ARROW */}
      <g>
        <line x1="645" y1="-5" x2="512" y2="128" stroke="url(#logoArrowGrad)" strokeWidth="14" strokeLinecap="round" />
        <polygon points="510,130 540,110 528,142" fill="#0077e6" />
        <polygon points="635,5 665,-25 640,-35 615,-10" fill="#00a8ff" />
        <polygon points="645,15 675,-15 655,-22 630,5" fill="#0084ff" opacity="0.9" />
      </g>

      {/* 9. LOWER BRAND TYPOGRAPHY: RIGHT PPT */}
      <text x="340" y="340" textAnchor="middle" fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="64" letterSpacing="-1">
        <tspan fill="#0a192f">RIGHT </tspan>
        <tspan fill="#0084ff">PPT</tspan>
      </text>

      {/* 10. LOWER SUBTITLE: — SOLUTIONS — */}
      <line x1="85" y1="388" x2="195" y2="388" stroke="#0a192f" strokeWidth="4.5" strokeLinecap="round" />
      <text x="340" y="396" textAnchor="middle" fill="#0a192f" fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="23" letterSpacing="12">SOLUTIONS</text>
      <line x1="485" y1="388" x2="595" y2="388" stroke="#0a192f" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}
