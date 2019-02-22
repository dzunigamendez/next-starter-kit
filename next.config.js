const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const path = require('path');

const nextConfig = {
  webpack(config) {
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

    return config;
  },
};

module.exports = withPlugins([withCss], nextConfig);
