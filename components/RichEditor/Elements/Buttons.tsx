/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsCardImage } from "react-icons/bs";
import React from 'react'
import { TableButtons } from './'

function Buttons({ editor }: any) {

    const addImage = () => {
        const url = window.prompt("URL");

        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    return (
        <div className="richEditor__buttons">
            <button
                className="richEditor__button"
                onClick={() =>
                    editor
                        .chain()
                        .focus()
                        .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                        .run()
                }
            >
                insertTable
            </button>
            {
                editor?.isActive("table") && <TableButtons editor={editor} />
            }
            <button className="richEditor__button" onClick={addImage}>
                <BsCardImage />
            </button>
            {/* aligins  */}
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={`richEditor__button ${editor?.isActive("heading", { level: 1 })
                    ? "richEditor__button__active"
                    : ""
                    }`}
            >
                h1
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={`richEditor__button ${editor?.isActive("heading", { level: 2 })
                    ? "richEditor__button__active"
                    : ""
                    }`}
            >
                h2
            </button>
            <button
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={`richEditor__button ${editor?.isActive("heading", { level: 3 })
                    ? "richEditor__button__active"
                    : ""
                    }`}
            >
                h3
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`richEditor__button ${editor?.isActive("paragraph") ? "richEditor__button__active" : ""
                    }`}
            >
                paragraph
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`richEditor__button ${editor?.isActive("bold") ? "richEditor__button__active" : ""
                    }`}
            >
                bold
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`richEditor__button ${editor?.isActive("italic") ? "richEditor__button__active" : ""
                    }`}
            >
                italic
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`richEditor__button ${editor?.isActive("strike") ? "richEditor__button__active" : ""
                    }`}
            >
                strike
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHighlight().run()}
                className={`richEditor__button ${editor?.isActive("highlight") ? "richEditor__button__active" : ""
                    }`}
            >
                highlight
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign("left").run()}
                className={`richEditor__button ${editor?.isActive({ textAlign: "left" })
                    ? "richEditor__button__active"
                    : ""
                    }`}
            >
                left
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign("center").run()}
                className={`richEditor__button ${editor?.isActive({ textAlign: "center" })
                    ? "richEditor__button__active"
                    : ""
                    }`}
            >
                center
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign("right").run()}
                className={`richEditor__button ${editor?.isActive({ textAlign: "right" })
                    ? "richEditor__button__active"
                    : ""
                    }`}
            >
                right
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign("justify").run()}
                className={`richEditor__button ${editor?.isActive({ textAlign: "justify" })
                    ? "richEditor__button__active"
                    : ""
                    }`}
            >
                justify
            </button>

            {/* aligins end  */}
        </div>
    )
}

export default Buttons