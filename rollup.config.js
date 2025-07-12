https://github.com/nodegin/eslint-plugin-canonical/commit/7cf6a5d3f892dc40340ce54cc3423a9958dee1f1

// const path = require('path');
// const fs = require('fs');
const typescript = require('@rollup/plugin-typescript');
// const copy = require('rollup-plugin-copy');
const json = require('@rollup/plugin-json');

// const SRC_DIR = 'src';
// const DIST_DIR = 'dist';

// function getInputFiles(dir = SRC_DIR) {
//   const files = [];
//   for (const entry of fs.readdirSync(dir)) {
//     const fullPath = path.join(dir, entry);
//     const stat = fs.statSync(fullPath);
//     if (stat.isDirectory()) {
//       files.push(...getInputFiles(fullPath));
//     } else if (stat.isFile() && fullPath.endsWith('.ts')) {
//       files.push(fullPath);
//     }
//   }
//   return files;
// }

module.exports = [
  {
    input: './src/index.ts',
    output: [{ file: 'dist/index.js', format: 'cjs' }],
    // input: getInputFiles(),
    // output: {
    //   dir: DIST_DIR + '/' + SRC_DIR,
    //   format: 'cjs',
    //   preserveModules: true,
    //   preserveModulesRoot: SRC_DIR,
    //   // exports: 'auto',
    //   exports: 'named',
    //   entryFileNames: '[name].js',
    // },
    plugins: [
      typescript(),
      json(),
      // copy({ targets: [{ src: 'src/configs', dest: 'dist/src/configs' }] }),
    ],
  },
];
