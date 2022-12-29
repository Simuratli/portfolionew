/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

function BubleAndFloat({ editor }: any) {
  return (
    <div className="richEditor__buttons">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`richEditor__button ${
          editor?.isActive("heading", { level: 1 })
            ? "richEditor__button__active"
            : ""
        }`}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`richEditor__button ${
          editor?.isActive("heading", { level: 2 })
            ? "richEditor__button__active"
            : ""
        }`}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`richEditor__button ${
          editor?.isActive("heading", { level: 3 })
            ? "richEditor__button__active"
            : ""
        }`}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`richEditor__button ${
          editor?.isActive("paragraph") ? "richEditor__button__active" : ""
        }`}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`richEditor__button ${
          editor?.isActive("bold") ? "richEditor__button__active" : ""
        }`}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`richEditor__button ${
          editor?.isActive("italic") ? "richEditor__button__active" : ""
        }`}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`richEditor__button ${
          editor?.isActive("strike") ? "richEditor__button__active" : ""
        }`}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`richEditor__button ${
          editor?.isActive("highlight") ? "richEditor__button__active" : ""
        }`}
      >
        highlight
      </button>
    </div>
  );
}

export default BubleAndFloat;
