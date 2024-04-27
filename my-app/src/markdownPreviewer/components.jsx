// const { connect } = 'react-redux';
// const { Component } = 'react';
// const { marked } = 'marked';

// const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';

// function updateMarkdown(markdown) {
//   return {
//     type: UPDATE_MARKDOWN,
//     markdown,
//   };
// }



// export class Editor extends Component {
//   handleChange = (e) => {
//     this.props.updateMarkdown(e.target.value);
//   };

//   render() {
//     return <textarea id="editor" onChange={this.handleChange} value={this.props.markdown}></textarea>;
//   }
// }

// export class Preview extends Component {
//   render() {
//     const rawMarkup = marked(this.props.markdown, { breaks: true, gfm: true });
//     return <div id="preview" dangerouslySetInnerHTML={{__html: rawMarkup}}></div>;
//   }
// }

// const mapStateToProps = state => ({ markdown: state });
// const mapDispatchToProps = { updateMarkdown };

// export const ConnectedEditor = connect(mapStateToProps, mapDispatchToProps)(Editor);
// export const ConnectedPreview = connect(mapStateToProps)(Preview);
