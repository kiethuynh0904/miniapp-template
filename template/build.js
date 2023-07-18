const Metro = require('metro');
Metro.loadConfig().then(async config => {
  Metro.runBuild(config, {
    entry: './App.tsx',
    out: './dist/entry.js',
  });
});
