import React, { useState } from 'react';
import { TextEditorPropTypes } from './texteditor.types';
import styles from '../../styles/components/texteditor.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';

function TextEditor({ value, onChange, sanitize }: TextEditorPropTypes) {
  return (
    <div className={styles.texteditor}>
      <label>Description</label>
      <textarea value={value} onChange={onChange} onBlur={sanitize} />
    </div>
  );
}

export default TextEditor;
