const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Adicione o loader para arquivos PDF
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files',
            outputPath: 'static/files',
            name: '[name].[ext]',
          },
        },
      ],
    });

    return config;
  },
};
