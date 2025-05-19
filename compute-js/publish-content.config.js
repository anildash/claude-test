const config = {
  // these paths are relative to compute-js dir
  rootDir: '../public',

  // Include/exclude filters (optional):
  excludeDirs: ['node_modules'],
  excludeDotfiles: true,
  includeWellKnown: true,

  // Advanced filtering (optional):
  kvStoreAssetInclusionTest: (key, contentType) => {
    return true; // include everything by default
  },

  // Server settings
  server: {
    publicDir: './public',
    autoIndex: ['index.html'],
    autoExt: ['.html'],
    staticItems: ['/static/', '/assets/'],
    allowedEncodings: ['br', 'gzip'],
  }
};

export default config;
