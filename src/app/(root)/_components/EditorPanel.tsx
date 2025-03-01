"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useEffect, useState } from "react"
import { LANGUAGE_CONFIG } from "../_constants";
import { Editor } from "@monaco-editor/react";

function EditorPanel () {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const { language, theme, fontSize, editor, setFontSize, setEditor } = useCodeEditorStore();

  useEffect(() => {
    const savedCode = localStorage.getItem(`editor-code-${language}`);
    const newCode = savedCode || LANGUAGE_CONFIG[language].defaultCode;
    if(editor) editor.setValue(newCode);
  }, [language, editor]);

  useEffect(() => {
    const savedFontSize = localStorage.getItem("editor-font-size");
    if(savedFontSize) setFontSize(parseInt(savedFontSize));
  }, [fontSize]); 

  const handleRefresh = () => {

  }

  const handleEditorChange = () => {

  }

  const handleFontSizeChange = () => {

  }



  return (
    <div className="relative">
      <div className="relative bg-[#12121a]/90 backdrop-blur rounded-xl border border-white/[0.05] p-6" >
        
      </div>
    </div>
  )
}

export default EditorPanel