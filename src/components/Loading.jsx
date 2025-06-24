import React from 'react'

const Loading = () => {
  return (
 <div style={{
  width: "100vw",
  height: "100vh",
  display: "flex",
  position: "absolute",
  zIndex: 100,
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, rgb(19, 20, 25) 0%, rgb(26, 29, 40) 100%)"
}}>
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 48,
    borderRadius: 28,
    backdropFilter: "blur(12px)",
    maxWidth: 320,
    width: "90%",
  }}>
    <svg width="90" height="90" viewBox="0 0 50 50">
      <defs>
        <linearGradient id="loader-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#C4B5FD" />
        </linearGradient>
      </defs>
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="url(#loader-gradient)"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeDasharray="100"
        strokeDashoffset="65"
        style={{
          transformOrigin: "center",
          animation: "spin 1.2s ease-in-out infinite",
        }}
      />
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
      textAlign: "center",
      color: "#E0E7FF",
      fontWeight: 700,
      fontFamily: "Lexend, sans-serif",
      fontSize: 22,
      letterSpacing: 1.2,
      textShadow: "0 2px 10px #818CF8"
    }}>
      Loading...
    </span>
  </div>
</div>

  )
}

export default Loading