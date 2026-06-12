import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F3EEE4',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 96px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Accent dot */}
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: '#BC4A24',
            marginBottom: 32,
          }}
        />

        {/* Title */}
        <div
          style={{
            color: '#171410',
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: 24,
            letterSpacing: '-2px',
          }}
        >
          Et si on vous reconnaissait,
        </div>
        <div
          style={{
            color: '#BC4A24',
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: 40,
            letterSpacing: '-2px',
          }}
        >
          par votre site ?
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: '#6F6A5D',
            fontSize: 28,
            lineHeight: 1.5,
            maxWidth: 800,
            marginBottom: 56,
          }}
        >
          Freelance design & développement web — Sites à partir de 500€, livrés en 14 jours max.
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              color: '#BC4A24',
              fontSize: 32,
              fontWeight: 800,
              letterSpacing: '-1px',
            }}
          >
            JDesign
          </div>
          <div style={{ color: '#B8B0A0', fontSize: 28 }}>—</div>
          <div style={{ color: '#6F6A5D', fontSize: 24 }}>
            jd-webdesign-nine.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
