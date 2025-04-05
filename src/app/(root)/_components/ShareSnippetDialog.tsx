import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useMutation } from "convex/react";
import { useState } from "react"
import { api } from "../../../../convex/_generated/api";

function ShareSnippetDialog({onClose}: {onClose: () => void}) {
    const [title, setTitle] = useState("");
    const [isSharing, setIsSharing] = useState(false);
    const { language, getCode } = useCodeEditorStore();
    const createSnippet = useMutation(api.snippets.createSnippet);

  return (
    <div>ShareSnippetDialog</div>
  )
}

export default ShareSnippetDialog