const path = require('path');
const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const nextConfig = {
  webpack(config, { isServer, dev }) {
    config.resolve.alias['TimelineMax'] = path.join(
      __dirname,
      'node_modules/gsap/src/uncompressed/TimelineMax.js',
    );
    config.resolve.alias['TweenMax'] = path.join(
      __dirname,
      'node_modules/gsap/src/uncompressed/TweenMax.js',
    );
    config.resolve.alias['TweenLite'] = path.join(
      __dirname,
      'node_modules/gsap/src/uncompressed/TweenLite.js',
    );
    config.resolve.alias['ScrollMagic'] = path.join(
      __dirname,
      'node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
    );
    config.resolve.alias['AnimationGsap'] = path.join(
      __dirname,
      'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js',
    );

    config.resolve.alias['@ant-design/icons/lib/dist$'] = path.join(
      __dirname,
      'utils/icons.js',
    );

    if (!dev) {
      config.plugins.push(
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
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

module.exports = withPlugins([withCss], nextConfig);
