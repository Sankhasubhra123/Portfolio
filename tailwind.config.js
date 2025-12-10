/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors - Trust-building brand anchor, professional confidence
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          900: "#1E3A8A", // blue-900
          DEFAULT: "#2563EB", // blue-600
        },
        
        // Secondary Colors - Supporting content hierarchy, technical credibility
        secondary: {
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1E293B", // slate-800
          900: "#0F172A", // slate-900
          DEFAULT: "#64748B", // slate-500
        },
        
        // Accent Colors - Success states, achievement highlights
        accent: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          DEFAULT: "#10B981", // emerald-500
        },
        
        // Background Colors - Clean content canvas, reduces eye strain
        background: "#FAFAFA", // gray-50
        
        // Surface Colors - Card elevation, content separation
        surface: "#FFFFFF", // white
        
        // Text Colors
        text: {
          primary: "#0F172A", // slate-900 - Extended reading comfort, high contrast
          secondary: "#475569", // slate-600 - Clear information hierarchy, supporting details
        },
        
        // Status Colors
        success: "#059669", // emerald-600 - Positive reinforcement, completed actions
        warning: "#D97706", // amber-600 - Attention without alarm, important notices
        error: "#DC2626", // red-600 - Helpful problem identification, form validation
        
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // slate-200
          accent: "#2563EB", // blue-600
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      
      fontSize: {
        'responsive-xl': ['clamp(1.5rem, 4vw, 2.25rem)', { lineHeight: '1.2' }],
        'responsive-lg': ['clamp(1.25rem, 3vw, 1.5rem)', { lineHeight: '1.3' }],
      },
      
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      },
      
      borderWidth: {
        '1': '1px',
        '2': '2px',
      },
      
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      
      transitionTimingFunction: {
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      animation: {
        'fade-in': 'fadeIn 400ms cubic-bezier(0, 0, 0.2, 1)',
        'slide-up': 'slideUp 400ms cubic-bezier(0, 0, 0.2, 1)',
        'typing': 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#2563EB' },
        },
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      backdropBlur: {
        xs: '2px',
      },
      
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-smooth': {
          transition: 'all 300ms cubic-bezier(0, 0, 0.2, 1)',
        },
        '.transition-fast': {
          transition: 'all 200ms cubic-bezier(0, 0, 0.2, 1)',
        },
        '.scroll-reveal': {
          opacity: '0',
          transform: 'translateY(30px)',
          transition: 'all 400ms cubic-bezier(0, 0, 0.2, 1)',
        },
        '.scroll-reveal.revealed': {
          opacity: '1',
          transform: 'translateY(0)',
        },
        '.text-gradient': {
          background: 'linear-gradient(to right, #2563EB, #10B981)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}