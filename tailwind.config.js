/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import tailwindcssTextshadow from 'tailwindcss-textshadow';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
         float: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(-120vh) scale(0.5)", opacity: "0" },
        },
        egg: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "25%": { transform: "rotate(-2deg) scale(1.02)" },
          "50%": { transform: "rotate(2deg) scale(1.04)" },
          "75%": { transform: "rotate(-1deg) scale(1.02)" },
        },
         shine: {
        '0%': { backgroundPosition: '-500%' },
        '100%': { backgroundPosition: '500%' },
      },
      slideInLeft: {
        '0%': { transform: 'translateX(-100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      slideInRight: {
        '0%': { transform: 'translateX(100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
        fireGlowWave: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 0, 0, 0.6)' },
          '50%': { boxShadow: '0 0 25px rgba(255, 0, 0, 1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255, 0, 0, 0.6)' },
          '50%': { boxShadow: '0 0 50px rgba(255, 0, 0, 1)' },
        },
        glowPulseOrange: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(255,165,0,0.8)" },
          "50%": { boxShadow: "0 0 25px rgba(255,165,0,1)" },
        },
        glowPulseYellow: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(255,223,0,0.8)" },
          "50%": { boxShadow: "0 0 16px rgba(255,223,0,1)" },
        },
        glowBlue: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(0,120,255,0.8)" },
          "50%": { boxShadow: "0 0 14px rgba(0,120,255,1)" },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
         float: "float linear infinite",
        egg: "egg 3s ease-in-out infinite",
         shine: 'shine 2s linear infinite',
      'slide-in-left': 'slideInLeft 1s ease-out forwards',
      'slide-in-right': 'slideInRight 1s ease-out forwards',
        glowPulse: 'glowPulse 1.5s infinite alternate',
        glowPulseOrange: "glowPulseOrange 1.5s infinite alternate",
        glowPulseYellow: "glowPulseYellow 1.5s infinite alternate",
        glowPulseBlue: "glowBlue 1.5s infinite alternate",
        'spin-slow': 'spinSlow 5s linear infinite', // Adjust timing as needed
        fireGlowWave: 'fireGlowWave 2.5s infinite alternate',
      },
      colors: {
        primary: '#e74c3c', // Red primary color
        secondary: '#ffffff', // White text color
        background: '#1e1e1e', // Dark background color
        divider: '#404040', // Divider color
         gold: '#FFD700', // Gold color
        brown: '#8B4513', // Brown color for the border
      },

      transitionProperty: {
        'max-height': 'max-height',
      },
      maxHeight: {
        '0': '0px',
        '500': '500px', // Set a max height large enough to expand the dropdown
      },
    
      textShadow: {
        'glow': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)',
        'red-glow': '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6)',
        'yellow-glow': '0 0 5px rgba(255, 255, 0, 0.6), 0 0 10px rgba(255, 255, 0, 0.4)',
        'red-glow2': '0 0 10px rgba(139, 0, 0, 0.8), 0 0 20px rgba(139, 0, 0, 0.6)',
        'orange-glow': '0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6)',
        'green-glow': '0 0 10px rgba(16, 185, 129, 0.8), 0 0 20px rgba(16, 185, 129, 0.6)',
        'blue-glow': '0 0 10px rgba(88, 101, 242, 0.8), 0 0 20px rgba(88, 101, 242, 0.6)',
      },
      

      fontFamily: {
        Platino: ['Bitter', 'sans-serif'],
        Cinzel: ['Cinzel', 'sans-serif'],
        Rokkit: ['Rokkit', 'sans-serif'],
        COP1: ['COPRGTB', 'sans-serif'],
        COO1: ['COOPBL', 'sans-serif'],
        ERA1: ['ERASBD', 'sans-serif'],
        GEO1: ['georgiab', 'sans-serif'],
        ROCKB: ['ROCKB', 'sans-serif'],
        SCHLBKB: ['SCHLBKB', 'sans-serif'],
        segoeuiz: ['segoeuiz', 'sans-serif'],
        SitkaB: ['SitkaB', 'sans-serif'],
        tahomabd: ['tahomabd', 'sans-serif'],
        timesbd: ['timesbd', 'sans-serif'],
        verdanab: ['verdanab', 'sans-serif'],
        ITC: ['ITC', 'sans-serif'],
        ITC2: ['ITC2', 'sans-serif'],
      },

      backgroundImage: {
        'BG': "url('/src/assets/BG.jpg')",
        'BGPoster': "url('/src/assets/Poster3.jpg')",
        'BGPoster2': "url('/src/assets/Poster2.jpg')",
        'BG1': "url('/src/assets/bg1.jpg')",
        'BG2': "url('/src/assets/BG2.jpg')",
        'BG3': "url('/src/assets/BG3.jpg')",
        'BG4': "url('/src/assets/BG4.jpg')",
        'BG5': "url('/src/assets/BG5.png')",
        'BG6': "url('/src/assets/BG6.jpg')",
        'BG7': "url('/src/assets/BG7.jpg')",
        'BG8': "url('/src/assets/BG8.jpg')",
        'BGTexture': "url('/src/assets/RedTexture.jpg')",
        'BGTextureRed': "url('/src/assets/RedTexture2.jpg')",
        'BGTexture2': "url('/src/assets/OrangeTexture.jpg')",
        'BGTexture3': "url('/src/assets/YellowTexture.jpg')",
        'BGTexture4': "url('/src/assets/BlackTexture.jpg')",
        'GearBG' : "url('/src/assets/GearBG.png')",
        'GearBG2' : "url('/src/assets/GearBG2.png')",
        'GearBG3' : "url('/src/assets/GearBG3.png')",
      },
      backgroundSize: {
        'cover': 'cover', // Added cover
        'contain': 'contain', // Added contain
        'full': '100% 100%', 
      },
      backgroundPosition: {
        'custom-center': 'center',
      },
      backgroundAttachment: {
        'fixed': 'fixed', 
      },
    },

    keyframes: {
      shine: {
        '0%': { backgroundPosition: '-500%' },
        '100%': { backgroundPosition: '500%' },
      },
      slideInLeft: {
        '0%': { transform: 'translateX(-100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      slideInRight: {
        '0%': { transform: 'translateX(100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
    },
    animation: { 
      shine: 'shine 2s linear infinite',
      'slide-in-left': 'slideInLeft 1s ease-out forwards',
      'slide-in-right': 'slideInRight 1s ease-out forwards',
      'slide-up': 'slideUp 1s ease-out forwards',
      fadeIn: 'fadeIn 1s ease-in-out forwards',
    },
  },
  plugins: [
    daisyui,
    tailwindcssTextshadow
    
  ],
}
