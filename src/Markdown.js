import React, { useEffect, useState } from 'react';
import MarkdownJsx from 'markdown-to-jsx';

const Markdown = (props) => {
  const { fileName } = props;
  const [post1, setPost1] = useState('');

  useEffect(() => {
    import(`./${fileName}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost1(res));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <MarkdownJsx>{post1}</MarkdownJsx>
    </div>
  );
};

export default Markdown;
