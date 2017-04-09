module.exports = {
    extends: 'airbnb',
    plugins: [
        'react',
        'jsx-a11y',
        'import',
    ],
    rules: {
      'no-console': 0,
      'no-else-return': 0,
      //'linebreak-style': ["error", "windows"]
    },
    env: {
        "browser": true
    }
};
