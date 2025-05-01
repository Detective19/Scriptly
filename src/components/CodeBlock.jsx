import React from 'react';

const CodeBlock = ({ code, language = 'javascript' }) => {
  const highlightJS = (code) => {
    return code
      .replace(
        /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|true|false|null|undefined)\b/g,
        '<span class="keyword">$1</span>'
      )
      .replace(
        /(["'`])(.*?)\1/g,
        '<span class="string">$1$2$1</span>'
      )
      .replace(
        /\b(console|document|window|Math|Array|Object|String|Number|Boolean)\b/g,
        '<span class="function">$1</span>'
      )
      .replace(
        /\/\/(.*)/g,
        '<span class="comment">// $1</span>'
      );
  };

  return (
    <pre className="code-block">
      <code dangerouslySetInnerHTML={{ __html: highlightJS(code) }} />
    </pre>
  );
};

export default CodeBlock;