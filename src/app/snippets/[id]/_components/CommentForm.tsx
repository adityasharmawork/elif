import { useState } from "react";

interface CommentFormProps {
    onSubmit: (content: string) => Promise<void>;
    isSubmitting: boolean;
}

function CommentForm({onSubmit, isSubmitting}: CommentFormProps) {

    const [comment, setComment] = useState("");
    const [isPreview, setIsPreview] = useState(false);

    const handleKeyDown = () => {

    }

    const handleSubmit = () => {

    }

  return (
    <form onSubmit={handleSubmit} className="mb-8" >
        <div className="bg-[#0a0a0f] rounded-xl border border-[#ffffff0a] overflow-hidden">

            {/* Comment form header */}
            <div className="flex justify-end gap-2 px-4 pt-2">
                <button
                    type="button"
                    onClick={() => setIsPreview(!isPreview)}
                    className={`text-sm px-3 py-1 rounded-md transition-colors ${
                    isPreview ? "bg-blue-500/10 text-blue-400" : "hover:bg-[#ffffff08] text-gray-400"
                    }`}
                >
                    {isPreview ? "Edit" : "Preview"}
                </button>
            </div>

        </div>
    </form>
  )
}

export default CommentForm