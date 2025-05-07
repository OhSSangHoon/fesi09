"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  toggleDarkMode: (newTheme: "light" | "dark" | "system") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme은 ThemeProvider 내부에서 사용해야 합니다.");
  }

  return context;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }

    if(
        typeof window !== "undefined" && 
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return true;
    }

    return false;
  });

  const toggleDarkMode = (newTheme: "light" | "dark" | "system") => {
    if (newTheme === "system") {
        localStorage.removeItem("theme");
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false);
    } else {
        localStorage.setItem("theme", newTheme);
        setIsDark(newTheme === "dark");
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // OS 시스템 변경 시 감지
  useEffect(() => {
    // 브라우저의 MediaQuery API를 사용하여 사용자의 시스템이 다크모드를 사용하고 있는지 확인하는 코드
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (!("theme" in localStorage)) {
        // 다크 모드 사용 시 e.matches 값이 true, 라이트 모드 사용 시 false
        setIsDark(e.matches);
      }
    };

    // 미디어 쿼리 변경 시 이벤트 리스너 추가
    mediaQuery.addEventListener("change", handleChange);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleDarkMode }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
}