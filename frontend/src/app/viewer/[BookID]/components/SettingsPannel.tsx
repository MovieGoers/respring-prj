"use client";

import React, { useState } from "react";
import { useViewerSettings } from "../context/ViewerSettingsContext";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export function SettingsPanel() {
  const { theme, setTheme, fontSize, setFontSize, lineHeight, setLineHeight, letterSpacing, setLetterSpacing, pageTransition, setPageTransition } =
    useViewerSettings();
  const [isOpen, setIsOpen] = useState(false); // ✅ 패널 내부에서 상태 관리

  /** ✅ 패널 토글 */
  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* ✅ 설정 버튼 (다른 패널과 일관된 방식) */}
      <Button variant="ghost" size="icon" onClick={togglePanel} className="fixed top-2 right-4">
        <Settings className="h-5 w-5" />
      </Button>

      {/* ✅ 오버레이 (배경) */}
      {isOpen && <div className="fixed inset-0 bg-black/40 transition-opacity" onClick={togglePanel} />}

      {/* ✅ 설정 패널 */}
      <div
        className={`fixed top-0 left-0 w-full p-4 shadow-lg transition-transform duration-300 ease-in-out rounded-b-lg border-2 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } ${
          theme === "basic"
            ? "bg-white text-black border-gray-400"
            : theme === "gray"
            ? "bg-gray-800 text-white border-gray-600"
            : "bg-black text-white border-gray-800"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">설정</h2>

        {/* ✅ 테마 설정 */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">테마</label>
          <div className="flex gap-2">
            <button onClick={() => setTheme("basic")} className={`px-3 py-1 rounded border ${theme === "basic" ? "bg-gray-300 text-black" : "bg-transparent"}`}>
              기본
            </button>
            <button onClick={() => setTheme("gray")} className={`px-3 py-1 rounded border ${theme === "gray" ? "bg-gray-600 text-white" : "bg-transparent"}`}>
              그레이
            </button>
            <button onClick={() => setTheme("dark")} className={`px-3 py-1 rounded border ${theme === "dark" ? "bg-gray-900 text-white" : "bg-transparent"}`}>
              다크
            </button>
          </div>
        </div>

        {/* ✅ 폰트 크기 설정 */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">글자 크기: {fontSize}px</label>
          <input
            type="range"
            min={12}
            max={32}
            step={1}
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

        {/* ✅ 줄 간격 설정 */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">줄 간격: {lineHeight}</label>
          <input
            type="range"
            min={1.0}
            max={2.5}
            step={0.1}
            value={lineHeight}
            onChange={(e) => setLineHeight(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

        {/* ✅ 자간 설정 */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">자간: {letterSpacing}px</label>
          <input
            type="range"
            min={-1}
            max={2}
            step={0.1}
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

        {/* ✅ 페이지 넘김 효과 설정 */}
        <div className="mb-4">
          <label className="block mb-1 font-semibold">페이지 넘김 효과</label>
          <div className="flex gap-2">
            <button onClick={() => setPageTransition("none")} className={`px-3 py-1 rounded border ${pageTransition === "none" ? "bg-gray-300 text-black" : "bg-transparent"}`}>
              기본
            </button>
            <button onClick={() => setPageTransition("fade")} className={`px-3 py-1 rounded border ${pageTransition === "fade" ? "bg-gray-900 text-white" : "bg-transparent"}`}>
              페이드
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
