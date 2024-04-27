import React from 'react';
import { connect } from 'react-redux';
import { marked } from 'marked';

marked.setOptions({
  breaks: true, // This will make sure that single line breaks are converted to <br>
  gfm: true
});

function Preview({ markdown }) {
  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { sanitize: true });
    return { __html: rawMarkup };
  };

  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={getMarkdownText()}
    />
  );
}

const mapStateToProps = state => ({ markdown: state.markdown });

export default connect(mapStateToProps)(Preview);