import React from 'react';
import Editor from './markdownPreviewer/editor.jsx';
import Preview from './markdownPreviewer/preview.jsx';

function App() {
  return (
    <div className="App">
      <Editor />
      <Preview />
    </div>
  );
}

export default App;