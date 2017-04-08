var replace = require('rollup-plugin-replace');
var argv = require('argv');

// Read environment from passed parameter.
var env = 'config/environment.dev';
env = (argv.dev !== undefined) ? 'config/environment.dev' : env;
env = (argv.production !== undefined) ? 'config/environment.production' : env;
env = (argv.qa !== undefined) ? 'config/environment.qa' : env;

plugins: [
    replace({
      exclude: 'node_modules/**',
      'config/environment.poc': env
    }),

]
