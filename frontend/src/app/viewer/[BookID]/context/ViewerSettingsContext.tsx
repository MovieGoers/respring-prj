"use client";

/** 뷰어 설정을 전역으로 관리하는 Context */

import { createContext, useContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react";

/** 3가지 테마 타입 */
export type ThemeType = "basic" | "gray" | "dark";

/** 페이지 넘김 효과 타입 */
export type PageTransitionType = "none" | "slide" | "fade";

/** Viewer 설정 Context에 담길 값들 */
export interface ViewerSettingsContextProps {
  theme: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;

  fontSize: number;
  setFontSize: Dispatch<SetStateAction<number>>;

  lineHeight: number;
  setLineHeight: Dispatch<SetStateAction<number>>;

  letterSpacing: number;
  setLetterSpacing: Dispatch<SetStateAction<number>>;

  pageTransition: PageTransitionType;
  setPageTransition: Dispatch<SetStateAction<PageTransitionType>>;

  // ✅ 글꼴 추가!
  fontFamily: string;
  setFontFamily: Dispatch<SetStateAction<string>>;
}

/** Context 생성 */
const ViewerSettingsContext = createContext<ViewerSettingsContextProps | null>(null);

/** Provider: 자식 컴포넌트들이 theme, fontSize 등을 전역으로 사용 가능하게 함 */
export function ViewerSettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>("basic");
  const [fontSize, setFontSize] = useState<number>(16);
  const [lineHeight, setLineHeight] = useState<number>(1.6);
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [pageTransition, setPageTransition] = useState<PageTransitionType>("none");

  // ✅ 글꼴 상태 추가(기본 글꼴 설정)
  const [fontFamily, setFontFamily] = useState<string>("font-laundrygothicregular");

  const value: ViewerSettingsContextProps = {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    lineHeight,
    setLineHeight,
    letterSpacing,
    setLetterSpacing,
    pageTransition,
    setPageTransition,
    fontFamily,
    setFontFamily,
  };

  return <ViewerSettingsContext.Provider value={value}>{children}</ViewerSettingsContext.Provider>;
}

/** 커스텀 훅: Context를 쉽게 쓰도록 도와줌 */
export function useViewerSettings() {
  const context = useContext(ViewerSettingsContext);
  if (!context) {
    throw new Error("useViewerSettings must be used within <ViewerSettingsProvider>!");
  }
  return context;
}
