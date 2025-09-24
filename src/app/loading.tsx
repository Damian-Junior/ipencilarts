import React from 'react'

// Basic loading component used by Next.js app router while pages load.
// Kept minimal and dependency-free for easy reuse across the app.
export default function Loading() {
	return (
		<div style={containerStyle} role="status" aria-live="polite">
			<svg
				style={spinnerStyle}
				width="48"
				height="48"
				viewBox="0 0 50 50"
				aria-hidden="true"
			>
				<circle
					cx="25"
					cy="25"
					r="20"
					fill="none"
					stroke="currentColor"
					strokeWidth="5"
					strokeLinecap="round"
					strokeDasharray="31.4 31.4"
				/>
			</svg>
			<span style={labelStyle}>Loading…</span>
		</div>
	)
}

const containerStyle: React.CSSProperties = {
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '12px',
	color: '#111827',
}

const spinnerStyle: React.CSSProperties = {
	animation: 'spin 1s linear infinite',
	color: '#1f2937',
}

const labelStyle: React.CSSProperties = {
	fontSize: '14px',
	color: '#374151',
}

// Add keyframes dynamically so we don't need a CSS file.
if (typeof window !== 'undefined') {
	const styleId = 'ipencilarts-loading-keyframes'
	if (!document.getElementById(styleId)) {
		const style = document.createElement('style')
		style.id = styleId
		style.innerHTML = `@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`
		document.head.appendChild(style)
	}
}

