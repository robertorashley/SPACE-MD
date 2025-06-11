require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAIpay1oRclWUUQQAAHIHAAAKAAAAY3JlZHMuanNvbpVV27KiOBT9l7xqNahc1KpTNcBBRLzhBdGpeYgQIHI1CSB2+e9TaJ8+*TDTc4ankOzaWXvttXa+gyzHFFmoAePvoCC4ggy1S9YUCIyBWgYBIqALfMggGANtJeHEj46ZXvpFVO16nM4v3USoBMvi9SBbjxw1DyNHSr038OiCojwn2PtNQieg87vobxTu2Dc3qhZ0dumiv8uFvA4gxh6*13Ff4KJZj76BR5sRYoKzUC8ilCICEws1a4jJ1+Bji16U5XJZDDtrthl4t7XZ371z3OZ47y*3+3gpuZXIT*q6U38NfmWXuyNjbrztz7FaT2xizAR*Mo1YersZxkn2+vLKOt+wbr7gUxxmyDd9lDHMmi*zbs3Wwu727uq3GMVqvGm2gWNHd7ZcNGssybeomanaTq+8ff414ALn4Ikj70*FlnFTN+OHllDcJUZnMCp6pX01kqM4O5yvivIr8DX50Er8v3hf1sl9NJmPSu8uWJbraWG0iLyNIAcRnm*z3YjSFFcd19C*Br8uuFhCqzuJF4boiM5usJA21+Gq1LB0HVxH6ITEuG46c1v*hA9ZSX6Hkt9xzqZTqLWKp+Y7qpPBkeooz8SYKX1cNkZuaTVTCTvc68NFid1SKOsL5zVJqqDLQdYiNsxUM2XnbXhfBjTc5r1L+PasKEaN6YNx79EFBIWYMgIZzrPnnjToAuhXW+QRxJ70gmkpqZVERFMXcMMmEURD3SVi53y9ams+cPehf1Gprdj88Q10QUFyD1GK*CmmLCfNAlEKQ0TB+M+*uiBDN*ZqXHvdoNcFASaU7bOySHLof3T14xB6Xl5mbNtkntYuEAFj*nMbMYazkLY8lhkkXoQrpEWQUTAOYELRzwoRQT4YM1Kin67Vcr8l*iQM+sfF2gJdkD4bgn0wBn1RkofCYNSTZXk8GPxBv9VtWlgU3zLEQBckrzBhOBB4nh9KI3ko8W1ke*D4ibBN6CMGcULbiWVZlSzEmr7iFoVnGoaqhIoWKuCzog9pvKi3p4UOy5MjmXtZg*5J3aeWFttRrB0OTmfk+ok6GVJxP715b*+QBIzBenDwKTtuMoZWjaAeRWbXwmh+uNzcvHeBRtN3d9d7cVgO7xXfyWon70nzMumxFdXFRKATDVNzHpNePXVi67KasFhQ7Lf2Nh9V2EO*XmYeN8ZZWa4UxYRTIqnNJTCW3HTi2vomyhx1r3vixQgmrnDbmofQFsXB*US2jEytPPfR4brj9Ft4wcKBQ9NzORHnqzm2X6J9mib5MazwU05tr9rfAKOn9zPYdvC*e*cC3kqMf3R*yfFjmvyLI9W9Km0MkjoIT1Z1mh1sZ4bDQjdPSpIkQeUMTvYmmK8cdeiCx+OvLigSyIKcpGAMYOaTHPugC0hetpo1syD*3dum7E39h10TSJny6YMdThFlMC3AuCcLI0ngh73hK2pN8mIKadSSYAhKWraibpSi2DLIPmwFlPZ73+ng8TdQSwECFAMUAAAICACKWstaEXJVlFEEAAByBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  BOT_ADMIN: process.env.BOT_ADMIN || '256784391777',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'robertorashley',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  
  //⚠️ Premium users settings ⚠️
  PREMIUM_KEY: process.env.PREMIUM_KEY || '',
  MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
  EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
//Need premium? Purchase one here => https://wa.me/tylor
