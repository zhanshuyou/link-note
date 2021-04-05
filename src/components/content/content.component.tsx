import React, { useEffect, useState } from 'react'
import { Text, View } from '@nodegui/react-nodegui'
import * as styles from './content.style'
import fs from 'fs'
import path from 'path'
import { QFileDialog, FileMode } from '@nodegui/nodegui'

const DEFAULT_DIR = '/Users/Shared/*'

export const Content = () => {
  const [ dirs, setDirs ] = useState<string[]>([])

  useEffect(() => {
    const res = fs.readdirSync(path.dirname(DEFAULT_DIR))
    setDirs(res)

    const fileDialog = new QFileDialog()
    fileDialog.setFileMode(FileMode.AnyFile)
    fileDialog.exec()

    const selectedFiles = fileDialog.selectedFiles()
    console.log(selectedFiles)
  }, [])

  function renderDirs() {
    return dirs.map((dir, index) => {
      return (
        <Text key={index}>{dir}</Text>
      )
    })
  }

  return (
    <View style={styles.content}>
      <Text>
        目录
      </Text>
      {renderDirs()}
    </View>
  );
}
