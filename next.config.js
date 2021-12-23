module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/product',
        destination: '/product/Product',
      },
    ]
  }
}
