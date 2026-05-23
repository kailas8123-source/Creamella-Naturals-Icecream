interface CreamellaLogoProps {
  compact?: boolean;
}

export default function CreamellaLogo({ compact = false }: CreamellaLogoProps) {
  if (compact) {
    return (
      <span className="logo-badge" aria-label="Creamella">
        <img src="/favicon.svg" alt="" />
      </span>
    );
  }

  return (
    <span className="logo-lockup" aria-label="Creamella">
      <img src="/brand/creamella-logo.svg" alt="Creamella" />
    </span>
  );
}
