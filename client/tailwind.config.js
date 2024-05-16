module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // 根据你的项目结构调整路径
  ],
  theme: {
    extend: {
        animation: {
            marquee: 'marquee 15s linear infinite',
        },
        keyframes: {
            marquee: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-100%)' }
            }
        }
    }
},
  plugins: [],
}
