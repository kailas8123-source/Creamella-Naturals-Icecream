import { type ReactNode } from 'react';

interface GlassPillProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export default function GlassPill({ children, className = '', icon }: GlassPillProps) {
  return (
    <div className={`glass-pill px-5 py-2.5 flex items-center gap-2 ${className}`}>
      {icon && <span className="pill-icon flex-shrink-0">{icon}</span>}
      <span className="pill-label font-label text-xs uppercase text-[#2B2B2B]">{children}</span>
    </div>
  );
}
