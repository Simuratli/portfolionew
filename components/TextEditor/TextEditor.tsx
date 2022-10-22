import React from 'react';
import { TextEditorPropTypes } from './texteditor.types';
import styles from '../../styles/components/texteditor.module.scss';

function TextEditor({ value, onChange, name }: TextEditorPropTypes) {
  return (
    <div className={styles.texteditor}>
      <label>Description</label>
      <textarea name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default TextEditor;
