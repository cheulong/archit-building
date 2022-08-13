const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',
  '**/*.{js,jsx,ts,tsx}': ['yarn format:fix', buildEslintCommand],
  '**/*.{css,scss,less}': ['yarn format:fix'],
  '**/*.(md|json)': (filenames) => `yarn format:fix ${filenames.join(' ')}`,
};
