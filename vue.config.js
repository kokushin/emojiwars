module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/emojiwars/'
    : '/',
  outputDir: 'docs'
}