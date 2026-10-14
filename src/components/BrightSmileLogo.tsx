import React from 'react';

interface BrightSmileLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const BrightSmileLogo: React.FC<BrightSmileLogoProps> = ({
  className = '',
  size = 40,
  showText = false
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-xs"
        aria-label="Bright Smile Tooth Logo"
      >
        <defs>
          {/* Tooth body gradient */}
          <linearGradient id="toothBodyGrad" x1="100" y1="20" x2="100" y2="155" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#F4FAFF" />
            <stop offset="85%" stopColor="#D8EEFE" />
            <stop offset="100%" stopColor="#BFE3FD" />
          </linearGradient>

          {/* Tooth inner glossy highlight */}
          <linearGradient id="toothGloss" x1="45" y1="30" x2="80" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Swoosh gradient */}
          <linearGradient id="swooshGrad" x1="20" y1="90" x2="185" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00A8FF" />
            <stop offset="60%" stopColor="#0090F5" />
            <stop offset="100%" stopColor="#0072DE" />
          </linearGradient>

          {/* Sparkle star gradient */}
          <linearGradient id="sparkleGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Filter for subtle tooth volume */}
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0C4C97" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* 1. Sparkle Stars (Upper Right) */}
        {/* Large 4-point star */}
        <path
          d="M 152 25 Q 152 35 142 35 Q 152 35 152 45 Q 152 35 162 35 Q 152 35 152 25 Z"
          fill="url(#sparkleGrad)"
        />
        {/* Smaller 4-point star */}
        <path
          d="M 166 45 Q 166 51 160 51 Q 166 51 166 57 Q 166 51 172 51 Q 166 51 166 45 Z"
          fill="url(#sparkleGrad)"
        />

        {/* 2. Tooth Body */}
        {/* Path matching the smiling tooth crown and two rounded roots */}
        <path
          d="M 68 28
             C 80 23, 94 27, 100 32
             C 106 27, 120 23, 132 28
             C 148 35, 158 55, 155 82
             C 152 108, 145 130, 137 146
             C 131 158, 116 160, 108 147
             C 104 140, 101 138, 100 138
             C 99 138, 96 140, 92 147
             C 84 160, 69 158, 63 146
             C 55 130, 48 108, 45 82
             C 42 55, 52 35, 68 28 Z"
          fill="url(#toothBodyGrad)"
          stroke="#095DB1"
          strokeWidth="6.5"
          strokeLinejoin="round"
          filter="url(#softShadow)"
        />

        {/* Glossy inner top-left highlight */}
        <path
          d="M 66 35
             C 75 32, 85 34, 91 38
             C 83 45, 63 56, 56 75
             C 53 60, 57 44, 66 35 Z"
          fill="url(#toothGloss)"
        />

        {/* 3. Happy Smiling Face */}
        {/* Left eye: closed happy crescent */}
        <path
          d="M 72 73 C 77 67, 85 67, 90 73"
          stroke="#095DB1"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Right eye: closed happy crescent */}
        <path
          d="M 110 73 C 115 67, 123 67, 128 73"
          stroke="#095DB1"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Open joyful smile */}
        <g>
          {/* Mouth outline and dark blue interior */}
          <path
            d="M 78 86
               C 90 89, 110 89, 122 86
               C 120 106, 80 106, 78 86 Z"
            fill="#095DB1"
          />
          {/* Mouth tongue (light blue accent inside) */}
          <path
            d="M 87 97
               C 93 93, 107 93, 113 97
               C 109 104, 91 104, 87 97 Z"
            fill="#38BDF8"
          />
        </g>

        {/* 4. Dynamic Orbital Swoosh wrapping across the tooth */}
        <path
          d="M 32 75
             C 27 98, 46 122, 92 122
             C 134 122, 168 98, 178 64
             C 174 74, 150 112, 92 112
             C 50 112, 33 92, 32 75 Z"
          fill="url(#swooshGrad)"
        />
      </svg>

      {/* Optional full text logo lockup */}
      {showText && (
        <div className="flex flex-col select-none">
          <div className="flex items-center text-2xl font-black tracking-tight leading-none">
            <span className="text-[#095DB1]">Bright</span>
            <span className="text-[#00A0F0] ml-1">Smile</span>
          </div>
          <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mt-1">
            Dental Studio
          </span>
        </div>
      )}
    </div>
  );
};
