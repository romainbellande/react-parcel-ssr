#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const snapshot = require('react-snap')

const dir = process.env.BUILD_DIR || 'dist'

function createSnapshot() {
  let distDir = path.join(__dirname, '../', dir)
  let snapshotDir = path.join(distDir, 'snapshot')

  let indexHtml = path.join(distDir, 'index.html')

  if(fs.existsSync(snapshotDir)) {
    execSync(`rm -rf ${snapshotDir}`)  
  }

  if(fs.existsSync(indexHtml)) {
    fs.unlinkSync(indexHtml)
  }

  execSync(`mkdir ${snapshotDir}`)
  execSync(`cp ${distDir}/*.js ${snapshotDir}`)
  execSync(`cp ${distDir}/*.html ${snapshotDir}/index.html`)

  snapshot.run({
    source: 'dist/snapshot',
    puppeteerArgs: ["--no-sandbox", "--disable-setuid-sandbox"]
  })
}

createSnapshot()
