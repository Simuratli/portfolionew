import React, { useState } from 'react';
import sanitizeHtml from 'sanitize-html';
import styles from '../../styles/components/texteditor.module.scss';

function TextEditor() {
  const [data, setData] = useState({
    html: `<p>Hello <b>World</b> !</p><p>Paragraph 2</p>`,
    editable: true,
  });

  const handleChange = (evt: any) => {
    setData((prev) => ({
      ...prev,
      html: evt.target.value,
    }));
  };

  const sanitizeConf = {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'h1'],
    allowedAttributes: { a: ['href'] },
  };

  const sanitize = () => {
    setData((prev) => ({
      ...prev,
      html: sanitizeHtml(prev.html, sanitizeConf),
    }));
  };

  const toggleEditable = () => {
    setData((prev) => ({
      ...prev,
      editable: !prev.editable,
    }));
  };

  return (
    <div className={styles.texteditor}>
      <label>Description</label>
      <textarea value={data.html} onChange={handleChange} onBlur={sanitize} />
    </div>
  );
}

export default TextEditor;
