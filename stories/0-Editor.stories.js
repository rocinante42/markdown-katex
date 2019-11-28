import React from "react";
import Editor from "../src";

export default {
  title: "Editor"
};

export const DefaultProps = () => <Editor />;

export const WithDefaultValue = () => {
  const defaultValue = `This is to display the 
\`\$\$\c = \\pm\\sqrt{a^2 + b^2}\$\$\`
 in one line

\`\`\`KaTeX
c = \\pm\\sqrt{a^2 + b^2}
\`\`\`
`;
  return <Editor value={defaultValue} />;
};

export const WithOnChange = () => (
  <Editor
    onChange={e => {
      console.log(e);
    }}
  />
);

WithOnChange.story = {
  name: "With onChange"
};
