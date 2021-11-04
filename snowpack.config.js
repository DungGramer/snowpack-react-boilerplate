module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },

  "plugins": [
    // "@snowpack/plugin-react-refresh",
    // "@snowpack/plugin-babel",
    // "@snowpack/plugin-dotenv",
    "@snowpack/plugin-sass",
  ],

  // packageOptions: {
  //   knownEntrypoints: [
  //      'react/jsx-runtime'
  //   ]
  // },

  // devOptions: {
  //   open: 'true',
  //   port: 9000
  // },

  alias: {
    '~': './src',
    '@components': './src/components',
  }
}