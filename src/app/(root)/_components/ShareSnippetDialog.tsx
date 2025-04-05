import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useState } from "react"

function ShareSnippetDialog({onClose}: {onClose: () => void}) {
    const [title, setTitle] = useState("");
    const [isSharing, setIsSharing] = useState(false);
    const { language, getCode } = useCodeEditorStore();

  return (
    <div>ShareSnippetDialog</div>
  )
}

export default ShareSnippetDialog