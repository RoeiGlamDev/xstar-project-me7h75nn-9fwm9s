import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#FF0000', // Custom red color
        },
        orange: {
          DEFAULT: '#FFA500', // Custom orange color
        },
        white: '#FFFFFF', // Custom white color
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
});

/
 * Tailwind CSS Configuration for "AI" Technology Business
 * 
 * This configuration is tailored for the "AI" brand, focusing on modern design principles 
 * suitable for the technology industry. The color scheme includes red, orange, and white 
 * to create a vibrant and engaging user experience for the VidNexus platform, which specializes 
 * in AI-generated videos.
 */