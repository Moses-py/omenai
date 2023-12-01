"use client";

// Typescript Version

import React, { useRef, useEffect } from "react";
import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const Editor = () => {
  const editor = useRef<SunEditorCore>();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };
  return (
    <div>
      <SunEditor
        getSunEditorInstance={getSunEditorInstance}
        placeholder="Start typing..."
        height="500px"
        width="100%"
        setOptions={{
          defaultStyle: "font-family: arial; font-size: 16px;",
          buttonList: [
            // Default
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            ["paragraphStyle", "blockquote"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["fontColor", "hiliteColor", "textStyle"],
            ["removeFormat"],
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "lineHeight"],
            ["table", "link", "image", "video", "audio"],
            ["imageGallery"],
            ["fullScreen", "showBlocks", "codeView"],
            ["preview", "print"],
            ["save", "template"],
            ["-left", "#fix", "dir_ltr", "dir_rtl"],
            // (min-width:992px)
            [
              "%992",
              [
                ["undo", "redo"],
                [
                  ":p-More Paragraph-default.more_paragraph",
                  "font",
                  "fontSize",
                  "formatBlock",
                  "paragraphStyle",
                  "blockquote",
                ],
                ["bold", "underline", "italic", "strike"],
                [
                  ":t-More Text-default.more_text",
                  "subscript",
                  "superscript",
                  "fontColor",
                  "hiliteColor",
                  "textStyle",
                ],
                ["removeFormat"],
                ["outdent", "indent"],
                ["align", "horizontalRule", "list", "lineHeight"],
                ["-right", "dir"],
                [
                  "-right",
                  ":i-More Misc-default.more_vertical",
                  "fullScreen",
                  "showBlocks",
                  "codeView",
                  "preview",
                  "print",
                  "save",
                  "template",
                ],
                [
                  "-right",
                  ":r-More Rich-default.more_plus",
                  "table",
                  "link",
                  "image",
                  "video",
                  "audio",
                  "math",
                  "imageGallery",
                ],
              ],
            ],
            // (min-width:768px)
            [
              "%768",
              [
                ["undo", "redo"],
                [
                  ":p-More Paragraph-default.more_paragraph",
                  "font",
                  "fontSize",
                  "formatBlock",
                  "paragraphStyle",
                  "blockquote",
                ],
                [
                  ":t-More Text-default.more_text",
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "subscript",
                  "superscript",
                  "fontColor",
                  "hiliteColor",
                  "textStyle",
                  "removeFormat",
                ],
                [
                  ":e-More Line-default.more_horizontal",
                  "outdent",
                  "indent",
                  "align",
                  "horizontalRule",
                  "list",
                  "lineHeight",
                ],
                [
                  ":r-More Rich-default.more_plus",
                  "table",
                  "link",
                  "image",
                  "video",
                  "audio",
                  "math",
                  "imageGallery",
                ],
                ["-right", "dir"],
                [
                  "-right",
                  ":i-More Misc-default.more_vertical",
                  "fullScreen",
                  "showBlocks",
                  "codeView",
                  "preview",
                  "print",
                  "save",
                  "template",
                ],
              ],
            ],
          ],
        }}
      />
    </div>
  );
};
export default Editor;
