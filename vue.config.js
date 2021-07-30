module.exports = {
  pluginOptions: {
    electronBuilder: {
      externals: ['sequelize', 'sqlite3s'],
      nodeIntegration: true
    }
  }
}
