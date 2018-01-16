#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const snap = require('react-snap')

const dir = process.env.BUILD_DIR || 'dist'

function createSnapshot() {
  let dist = path.join(__dirname, '../', dir)
  let pub = path.join(dist, 'snapshot')

  let indexHtml = path.join(dist, 'index.html')

  if(fs.existsSync(pub)) {
    execSync(`rm -rf ${pub}`)  
  }

  if(fs.existsSync(indexHtml)) {
    fs.unlinkSync(indexHtml)
  }

  execSync(`mkdir ${pub}`)
  execSync(`cp ${dist}/*.js ${pub}`)
  execSync(`cp ${dist}/*.html ${pub}/index.html`)

  snap.run({source: 'dist/snapshot'})
}

createSnapshot()
