import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#d4d4d4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        padding: '24px',
      }}
    >
      {/* 404 */}
      <h1
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(120px, 20vw, 200px)',
          fontWeight: 800,
          color: '#0f172a',
          lineHeight: 1,
          marginBottom: '24px',
          letterSpacing: '-4px',
        }}
      >
        404
      </h1>

      {/* Heading */}
      <h2
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '18px',
          fontWeight: 700,
          letterSpacing: '3px',
          color: '#0f172a',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}
      >
        Pagina Non Trovata
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '32px',
          lineHeight: '1.6',
        }}
      >
        La pagina che stai cercando non esiste o è stata spostata.
      </p>

      {/* Button */}
      <Link
        href="/"
        style={{
          backgroundColor: '#FAC104',
          color: '#fff',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          padding: '14px 28px',
          borderRadius: '8px',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'background-color 0.2s',
        }}
      >
        Torna alla Home
      </Link>
    </div>
  );
}
