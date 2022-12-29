/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { BubbleMenu } from "@tiptap/react";
import { BubleAndFloat } from "./";
function Bubble({ editor }: any) {
  return (
    <BubbleMenu
      className="floating-menu"
      tippyOptions={{ duration: 100 }}
      editor={editor}
    >
      <BubleAndFloat editor={editor} />
    </BubbleMenu>
  );
}

export default Bubble;
