"use client";
import { Snippet } from "@/types"
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

function SnippetCard({snippet}: {snippet: Snippet}) {
    const { user } = useUser();
    const deleteSnippet = useMutation(api.snippets.deleteSnippet);
    const [isDeleting, setIsDeletng] = useState(false);

    const handleDelete = async () => {

    }

  return (
    <motion.div
        className="group relative"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
    >
        
        <Link href={`/snippets/${snippet._id}`} className="h-full block">
            <div
                className="relative h-full bg-[#1e1e2e]/80backdrop-blur-sm rounded-xl p-4 border border-[#313244]/50 hover:border-[#313244] transition-all duration-300 overflow-hidden"
            >
                <div>
                    
                </div>
            </div>
        </Link>

    </motion.div>
  )
}

export default SnippetCard