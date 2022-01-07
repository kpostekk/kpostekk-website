import React from "react";
import {MDXProvider} from "@mdx-js/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Layout({ children }) {
  return (
    <MDXProvider
      components={{
        h1: props => <div>
          <h1 {...props} style={{fontWeight: 100}} />
          <hr/>
        </div>,
        h2: props => <h2 {...props} style={{fontWeight: 300}}/>,
        code: props => <SyntaxHighlighter
          style={dark} showLineNumbers={true} customStyle={{
            backgroundColor: '#202028',
          border: 'solid #f1f1f1 1px', borderRadius: '10px',
          fontFamily: 'JetBrains Mono', fontSize: '11pt', fontWeight: 300
        }}
        >
          {props.children}
        </SyntaxHighlighter>
      }}
    >
      <div style={{margin: '10px', display: "flex", flexDirection: 'column'}}>
        <div style={{margin: 'auto', width: '40vw'}}>
          {children}
        </div>
      </div>
    </MDXProvider>
  )
}
