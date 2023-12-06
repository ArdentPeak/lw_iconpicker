/*
  This generator is a bit different from the rest. Line-awesome uses
  a prefix (ex: 'lab', 'las', 'lar', etc) to determine which font file to
  use. However, this information is not in the css file that we will
  be parsing. So, we open the old line-awesome.js file (which was
  made for web, not node), read it in, make adjustments, and eval it
  (yeah I know, eval bad). Then we make a map of fonts and the
  prefixes so we can add the prefix back. If it's a new font, we make
  the prefix '---' so we can search the file for it and hand-curate
  the prefix manually. Then, we have a finished file.
*/
const path = require('path')
const { green, blue, red } = require('kolorist')
const { readFile, writeFile } = require('../utils')
const { validateTags } = require('../utils')

const name = 'line-awesome'
const inputLocation = `../../src/components/icon-set/${name}.js`
const outputLocation = `../../src/components/icon-set/${name}.js`
const oldIcons = {}
const icons = []
const blacklisted = [
  'la-font-awesome-logo-full'
]

let fa = readFile(path.resolve(__dirname, inputLocation))
fa = fa.split('\n')
fa.shift()
fa.shift()
fa.shift()
fa.pop()
fa.pop()
fa.pop()
fa = '[\n' + fa.join('\n') + '\n]\n'
// eslint-disable-next-line no-eval
fa = eval(fa)
fa.forEach(f => {
  const name = f.name
  const prefix = f.prefix
  const tags = f.tags
  if (oldIcons[name] !== void 0) {
    oldIcons[name].prefix.push(prefix)
  }
  else {
    if (prefix === 'lab') {
      if (tags.includes('brand') !== true) {
        tags.push('brand')
      }
    }
    oldIcons[name] = { prefix: Array(prefix), tags: tags.sort() }
  }
})

const location = require.resolve('@quasar/extras/line-awesome/line-awesome.css')
const fileContents = readFile(location)

fileContents
  .split('\n')
  .forEach(line => {
    line = line.trim()
    if (line.startsWith('.')) {
      const pos = line.indexOf(':before')
      if (pos > 0) {
        const name = line.slice(1, pos)
        if (blacklisted.includes(name) !== true) {
          if (oldIcons[name] !== void 0) {
            oldIcons[name].prefix.forEach(pfx => {
              // if type is 'lab' make sure it has brand
              if (pfx === 'lab') {
                if (oldIcons[name].tags.includes('brand') !== true) {
                  oldIcons[name].tags.push('brand')
                }
              }
              // validate tags
              validateTags(oldIcons[name].tags)
              const tags = oldIcons[name].tags.map(tag => {
                if (tag === '') return tag
                return "'" + tag + "'"
              }).join(', ')
              icons.push(`{ name: '${name}', prefix: '${pfx}', tags: [${tags}] }`)
            })
          }
          else {
            if (!name.startsWith('la.la')) {
              icons.push(`{ name: '${name}', prefix: '---', tags: [] }`)
            }
          }
        }
      }
    }
  })

if (icons.length === 0) {
  console.log(`${red('[error]')}  ${name} icons parsed 0 icons...exiting`)
  process.exit(1)
}

let output = 'export default {\n'
output += `  name: '${name}',\n`
output += '  icons: [\n'

icons.forEach((icon, index) => {
  if (index !== 0) {
    output += ',\n'
  }

  output += `    ${icon}`
})

output += '\n  ]\n'
output += '}\n'

writeFile(path.resolve(__dirname, outputLocation), output)
console.log(`${blue('[icon]')} ${green(name + ':')} ${icons.length} generated`)
