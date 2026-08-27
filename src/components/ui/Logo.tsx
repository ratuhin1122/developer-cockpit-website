import * as React from "react"

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function Logo({ className = "w-8 h-8", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        {/* Main Vertical Purple-to-Cyan Gradient */}
        <linearGradient id="headerLogoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A267C" />
          <stop offset="35%" stopColor="#2F4EA7" />
          <stop offset="70%" stopColor="#0288D1" />
          <stop offset="100%" stopColor="#00D4E7" />
        </linearGradient>

        {/* Left/Right Bracket Gradient */}
        <linearGradient id="headerBracketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A267C" />
          <stop offset="50%" stopColor="#1E66BA" />
          <stop offset="100%" stopColor="#00D4E7" />
        </linearGradient>

        {/* Eye Pupil Gradient */}
        <linearGradient id="headerEyeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B2667" />
          <stop offset="60%" stopColor="#1E6CB5" />
          <stop offset="100%" stopColor="#00C4DF" />
        </linearGradient>
      </defs>

      {/* Left Code Bracket "<" */}
      <path
        d="M 105 255 L 50 325 L 105 390"
        stroke="url(#headerBracketGradient)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Code Bracket ">" */}
      <path
        d="M 395 255 L 450 325 L 395 390"
        stroke="url(#headerBracketGradient)"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Boy's Hair Base Silhouette */}
      <path
        d="M 115 320 
           C 115 170 200 65 285 65 
           C 310 65 330 50 340 35 
           C 335 65 350 75 385 120 
           C 355 110 330 115 325 125
           C 370 145 385 220 385 320 
           Z"
        fill="url(#headerLogoGradient)"
      />

      {/* Face/Skin Cutout under Bangs */}
      <path
        d="M 152 320 
           C 152 245 200 180 250 180 
           C 300 180 348 245 348 320 
           Z"
        fill="#FFFFFF"
      />

      {/* Hair Bangs Over Face */}
      <path
        d="M 200 178 
           C 240 240 280 260 305 235 
           C 285 245 250 220 235 178 
           Z"
        fill="url(#headerLogoGradient)"
      />
      <path
        d="M 285 210 
           C 315 250 330 255 335 240 
           C 328 245 315 230 305 200 
           Z"
        fill="url(#headerLogoGradient)"
      />
      <path
        d="M 320 215 
           C 338 250 350 255 355 240 
           C 348 245 338 230 330 205 
           Z"
        fill="url(#headerLogoGradient)"
      />

      {/* Left Eyebrow */}
      <path
        d="M 178 260 C 190 248 210 248 222 260"
        stroke="url(#headerLogoGradient)"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right Eyebrow */}
      <path
        d="M 278 260 C 290 248 310 248 322 260"
        stroke="url(#headerLogoGradient)"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Glasses Main Frame (Outer) */}
      <path
        d="M 125 275 
           H 375 
           C 384 275 390 281 390 290 
           V 305 
           C 390 314 384 320 375 320 
           H 360 
           V 365 
           C 360 385 345 395 325 395 
           H 280 
           C 260 395 245 385 245 365 
           V 320 
           H 255 
           V 320 
           H 245 
           V 365 
           C 245 385 230 395 210 395 
           H 165 
           C 145 395 130 385 130 365 
           V 320 
           H 115 
           C 106 320 100 314 100 305 
           V 290 
           C 100 281 106 275 115 275 
           Z"
        fill="url(#headerLogoGradient)"
      />

      {/* Glasses Lens Cutouts */}
      <rect
        x="146"
        y="300"
        width="80"
        height="75"
        rx="18"
        fill="#FFFFFF"
      />
      <rect
        x="264"
        y="300"
        width="80"
        height="75"
        rx="18"
        fill="#FFFFFF"
      />

      {/* Left Eye Pupil */}
      <circle
        cx="186"
        cy="338"
        r="20"
        fill="url(#headerEyeGradient)"
      />
      {/* Left Eye Highlight */}
      <circle
        cx="179"
        cy="330"
        r="6"
        fill="#FFFFFF"
      />

      {/* Right Eye Pupil */}
      <circle
        cx="304"
        cy="338"
        r="20"
        fill="url(#headerEyeGradient)"
      />
      {/* Right Eye Highlight */}
      <circle
        cx="297"
        cy="330"
        r="6"
        fill="#FFFFFF"
      />
    </svg>
  )
}
