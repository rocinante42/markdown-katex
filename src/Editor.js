import React from "react";
import PropTypes from "prop-types";
import MDEditor from "@uiw/react-md-editor";
// No import is required in the WebPack.
// import "@uiw/react-md-editor/dist/markdown-editor.css";
import katex from "katex";
import "katex/dist/katex.css";

const renderers = {
  inlineCode: ({ children }) => {
    if (/^\$\$(.*)\$\$/.test(children)) {
      const html = katex.renderToString(
        children.replace(/^\$\$(.*)\$\$/, "$1"),
        {
          throwOnError: false
        }
      );
      return <code dangerouslySetInnerHTML={{ __html: html }} />;
    }
    return children;
  },
  code: ({ children, language, value }) => {
    if (language.toLocaleLowerCase() === "katex") {
      const html = katex.renderToString(value, {
        throwOnError: false
      });
      return (
        <pre>
          <code dangerouslySetInnerHTML={{ __html: html }} />
        </pre>
      );
    }
    return children;
  }
};

const Editor = React.memo(({ value, onChange }) => {
  return (
    <MDEditor
      value={value}
      onChange={onChange}
      previewOptions={{ renderers: renderers }}
    />
  );
});
Editor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};
Editor.defaultProps = {
  value: "",
  onChange: null
};

export default Editor;
