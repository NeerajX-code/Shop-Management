import React from 'react'

const Loading = () => {
  return (
 <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #6366F1 0%, #A5B4FC 100%)"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 12px 40px 0 rgba(99, 102, 241, 0.18)",
        padding: 48,
        borderRadius: 28,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
        maxWidth: 320,
        width: "90%"
      }}>
        <svg width="90" height="90" viewBox="0 0 50 50">
          <defs>
            <linearGradient id="loader-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#A5B4FC" />
            </linearGradient>
          </defs>
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="url(#loader-gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="90"
            strokeDashoffset="60"
            style={{
              transformOrigin: "center",
              animation: "spin 1s cubic-bezier(.68,-0.55,.27,1.55) infinite"
            }}
          />
          {/* Removed the upper dot */}
          <style>
            {`
              @keyframes spin {
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </svg>
        <span style={{
          marginTop: 28,
          textAlign:"center",
          color: "#3730A3",
          fontWeight: 800,
          fontFamily: "Lexend, sans-serif",
          fontSize: 24,
          letterSpacing: 1.2,
          textShadow: "0 2px 8px #A5B4FC44"
        }}>
          Please wait, loading your data...
        </span>
      </div>
    </div>
  )
}

export default Loading