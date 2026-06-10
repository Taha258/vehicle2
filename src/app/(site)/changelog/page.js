export default function ChangelogPage() {
  const versions = [
    {
      version: 'Version 1.1',
      changes: ['Fixed Dropdown Issue'],
    },
    {
      version: 'Version 1.0',
      changes: ['Initial Release of the MotorDeal Webflow Template'],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e5e5e5', fontFamily: 'sans-serif' }}>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ height: '280px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/HeroSectionimage.jpg')" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.58)' }} />
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full"
          style={{ paddingTop: '64px' }}
        >
          <h1
            className="text-white text-center uppercase"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '42px',
              fontWeight: 700,
              letterSpacing: '4px',
              marginBottom: '12px',
            }}
          >
            Changelog
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.80)',
              fontSize: '13px',
              lineHeight: '1.7',
              textAlign: 'center',
            }}
          >
            All versions and updates of this template will be tracked here.
          </p>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '60px 24px 80px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {versions.map((v) => (
          <div
            key={v.version}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '32px 36px',
            }}
          >
            {/* Version heading */}
            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '18px',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#111',
                marginBottom: '20px',
              }}
            >
              {v.version}
            </h2>

            {/* Changes box */}
            <div
              style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                padding: '18px 22px',
              }}
            >
              <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {v.changes.map((change, i) => (
                  <li key={i} style={{ fontSize: '13px', color: '#333', lineHeight: '1.6' }}>
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}