import { Window, hot, View } from '@nodegui/react-nodegui'
import React from 'react'
import { QIcon } from '@nodegui/nodegui'
import path from 'path'
import nodeguiIcon from '../assets/nodegui.jpg'

import { Content } from './components/content'
import { Editor } from './components/editor'
import { Preview } from './components/preview'

const minSize = { width: 500, height: 520 }
const winIcon = new QIcon(path.resolve(__dirname, nodeguiIcon))
class App extends React.Component {
  render() {
    return (
      <Window
        windowIcon={winIcon}
        windowTitle='LinkNote📒'
        minSize={minSize}
        styleSheet={styleSheet}
      >
        <View style={containerStyle}>
          <Content />
          <Editor />
          <Preview />
        </View>
      </Window>
    )
  }
}

const containerStyle = `
  flex: 1;
  flex-direction: 'row';
`

const styleSheet = `
  #welcome-text {
    font-size: 24px;
    padding-top: 20px;
    font-family: 'sans-serif';
  }
`

export default hot(App)
