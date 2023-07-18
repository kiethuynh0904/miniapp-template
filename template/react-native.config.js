module.exports = {
  commands: require('@callstack/repack/commands'),
  project: {
    android: {
      sourceDir: './node_modules/app_engine_micro_fe/android',
    },
    ios: {
      sourceDir: './node_modules/app_engine_micro_fe/ios',
    },
  },
};
