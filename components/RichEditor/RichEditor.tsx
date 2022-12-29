/* eslint-disable @typescript-eslint/no-explicit-any */
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import Dropcursor from "@tiptap/extension-dropcursor";
import Image from "@tiptap/extension-image";
import Document from "@tiptap/extension-document";
import Placeholder from "@tiptap/extension-placeholder";
import Paragraph from "@tiptap/extension-paragraph";
import TextAlign from "@tiptap/extension-text-align";
import Gapcursor from "@tiptap/extension-gapcursor";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { Buttons, Bubble, Floating } from "./Elements";
import {
  EditorContent,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

const RichEditor = () => {
  const CustomDocument = Document.extend({
    content: "heading block*",
  });

  const editor: any = useEditor({
    extensions: [
      Highlight,
      TableRow,
      TableCell,
      Table.configure({
        resizable: true,
      }),
      TableHeader,
      Gapcursor,
      Typography,
      Image,
      CustomDocument,
      StarterKit.configure({
        document: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "heading") {
            return "What’s the title?";
          }

          return "Can you add some further context?";
        },
      }),
      Dropcursor.configure({
        color: "#ff0000",
      }),
      Paragraph,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: ``,
  });


  return (
    <div className="richEditor">
      <Buttons editor={editor} />
      {editor && <Bubble editor={editor} />}
      {editor && <Floating editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichEditor;
