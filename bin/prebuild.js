#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

if(fs.existsSync('../build/index.html')) {
  fs.unlinkSync('../build/index.html')
}

let files = execSync('ls ../build/*.html', 
  { cwd: __dirname, encoding: 'utf-8' }
)

let source = path.join(__dirname, '../build', files.split('\n')[0])
let target = path.join(__dirname, '../build/index.html')
fs.renameSync(source, target)

