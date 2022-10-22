import React from 'react';
import { TextEditorPropTypes } from './texteditor.types';
import styles from '../../styles/components/texteditor.module.scss';

function TextEditor({ value, onChange, sanitize, name }: TextEditorPropTypes) {
  return (
    <div className={styles.texteditor}>
      <label>Description</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onBlur={sanitize}
      />
    </div>
  );
}

export default TextEditor;
