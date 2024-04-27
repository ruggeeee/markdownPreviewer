import { combineReducers } from 'redux';

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

I just love **bold text**.

> Dorothy followed her through many of the beautiful rooms in her castle.

1. First item
2. Second item
3. Third item
4. Fourth item


![Tux, the Linux mascot](/assets/images/tux.png)

\`\`\`html
<html>
<head>
  <title>Test</title>
</head>
\`\`\`

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

\`nano\`

Here's some code, \``

const markdownReducer = (state = defaultMarkdown, action) => {
  switch (action.type) {
    case 'UPDATE_MARKDOWN':
      return action.payload;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  markdown: markdownReducer
});

export default rootReducer;