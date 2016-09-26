const NWBuilder = require('nw-builder')

const nw = new NWBuilder({
  files: ['app/**/*', '!app/src${/*}', '!**/node_modules/**'],
  version: 'latest',
  flavor: 'normal',
  platforms: ['win32', 'linux'],
  macIcns: 'app/icon/icon.icns',
  winIco: 'app/icon/icon.ico'
})


nw.on('log', console.log)

nw
  .build()
  .then(() => console.log('All done!'))
  .catch(error => console.error(error))
