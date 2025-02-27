"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useState } from "react";

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useCodeEditorStore();
  return (
    <div>ThemeSelector</div>
  )
}

export default ThemeSelector