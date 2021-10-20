import path from 'path'
import sass from 'node-sass'
import fs from 'fs'

before(() => {
  const { css } = sass.renderSync({
    file: path.join(__dirname, '../src/styles/main.scss'),
  })

  fs.writeFileSync(path.join(__dirname, '../src/styles/main.css'), css)
})
