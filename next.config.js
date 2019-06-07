const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const nextConfig = {
  webpack(config, { isServer, dev }) {
    if (!dev) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: path.join(
            __dirname,
            '.report',
            isServer ? 'server-report.html' : 'client-report.html',
          ),
        }),
      );
    }
    return config;
  },
};

module.exports = nextConfig;
