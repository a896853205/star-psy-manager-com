module.exports = {
  deploy: {
    production: {
      user: 'root',
      host: 'xx.xx.xxx.xx',
      ref: 'origin/master',
      repo: 'git@github.com:xxx',
      path: '/xxx/xxx',
      'post-deploy': 'npm install && npm run build',
      'post-setup': 'npm install',
    },
  },
};
