import React, { forwardRef, Ref } from 'react';

// The props interface now correctly defines three separate refs.
export interface LogoIconProps {
  hexagonRef: Ref<SVGPathElement>;
  bracketsRef: Ref<SVGPathElement>;
  heartRef: Ref<SVGPathElement>;
}

export const LogoIcon = forwardRef<SVGSVGElement, LogoIconProps>(
  ({ hexagonRef, bracketsRef, heartRef }, ref) => (
    <svg
      ref={ref}
      width="86"
      height="70"
      viewBox="0 0 86 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Path 1: The Outer Hexagon */}
      <path
        ref={hexagonRef}
        d="M21.6603 2H64.3397L85.6795 38L64.3397 74H21.6603L0.32051 38L21.6603 2Z"
        stroke="#E5E7EB"
        strokeWidth="3"
      />
      {/* Path 2: The <> Brackets (Sized correctly) */}
      <path
        ref={bracketsRef}
        d="M60 24L70 38L60 52M26 52L16 38L26 24"
        stroke="#E5E7EB"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Path 3: The Inner Heart */}
      <path
        ref={heartRef}
        d="M51.5 31.8333C49.5 29.8333 46.3333 29.8333 44.3333 31.8333L43 33.1667L41.6667 31.8333C39.6667 29.8333 36.5 29.8333 34.5 31.8333C32.5 33.8333 32.5 37 34.5 39L43 47.5L51.5 39C53.5 37 53.5 33.8333 51.5 31.8333Z"
        stroke="#E5E7EB"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);

LogoIcon.displayName = 'LogoIcon';