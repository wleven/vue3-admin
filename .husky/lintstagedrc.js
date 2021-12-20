module.exports = {
  '*.{js,jsx,ts,tsx,vue}': ['eslint --fix', 'prettier --write'],
  'package.json': ['prettier --write'],
  '*.{scss,less,styl,html}': ['prettier --write'],
};
