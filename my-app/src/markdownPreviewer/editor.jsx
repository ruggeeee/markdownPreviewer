import React from 'react';
import { connect } from 'react-redux';
import { updateMarkdown } from '../redux/actions/actions';

function Editor({ markdown, updateMarkdown }) {
  return (
    <textarea
      id="editor"
      value={markdown}
      onChange={(e) => updateMarkdown(e.target.value)}
      placeholder="Enter Markdown here..."
    />
  );
}

const mapStateToProps = state => ({ markdown: state.markdown });
const mapDispatchToProps = { updateMarkdown };

export default connect(mapStateToProps, mapDispatchToProps)(Editor);