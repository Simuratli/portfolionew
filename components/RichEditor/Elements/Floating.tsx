/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FloatingMenu } from "@tiptap/react";
import { BubleAndFloat } from "./";
function Floating({ editor }: any) {
  return (
    <FloatingMenu
      className="floating-menu"
      tippyOptions={{ duration: 100 }}
      editor={editor}
    >
      <BubleAndFloat editor={editor} />
    </FloatingMenu>
  );
}

export default Floating;
