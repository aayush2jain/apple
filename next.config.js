// next.config.js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/videos/', // Saves videos to the /static/videos directory
            publicPath: '/_next/static/videos/', // Makes the video accessible in the app
          },
        },
      ],
    });

    return config;
  },
};
