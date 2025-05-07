"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 타이핑 효과 애니메이션
export const TypingEffect = ({
  text,
  typingSpeed = 150,
}: {
  text: string;
  typingSpeed?: number;
}) => {
  // 현재 입력된 텍스트
  const [displayText, setDisplayText] = useState("");
  // 현재 입력된 텍스트의 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(currentIndex < text.length){
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);

      //useEffect가 재실행되기 전 타이머 제거 cleanup 함수
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, typingSpeed]);

  return (
    <div className="font-mono text-2xl">
      {/* 현재 입력된 텍스트 */}
      {displayText}
      {/* 깜빡거리는 타이핑 커서 */}
      <motion.span
        className="ml-1 inline-block h-5 w-2 bg-black"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

// 단어 변경 애니메이션
export const WordChangeAnimation = ({
  prefix,
  suffix,
  words,
  interval = 2000,
}: {
  prefix: string;
  suffix: string;
  words: string[];
  interval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // currentIndex를 현재 단어 개수로 나눈 나머지를 구함
      // 단어가 4개라면 0, 1, 2, 3, 0, 1, 2, 3, ...
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);


  return (
    <div className="flex h-12 items-center overflow-hidden text-2xl">
      <span>{prefix}</span>
      <div className="relative mx-2 inline-block w-12 overflow-hidden">
        {/* 단어가 사라질땐 위로 올라가면서 페이드아웃 나타날떈 밑에서 올라오면서 페이드인 */}
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            className="inline-block font-bold text-blue-600"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {`${words[currentIndex]}`}
          </motion.span>
        </AnimatePresence>
      </div>
      <span>{suffix}</span>
    </div>
  );
};

// 프로그레스바 애니메이션
export const AnimatedProgressBar = ({ maxValue = 100, height = 12 }) => {
  // API 응답으로 받을 값을 저장할 상태
  const [value, setValue] = useState(0);
  // API 로딩 상태 관리
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // API 호출을 시뮬레이션 (실제로는 여기서 API 요청을 수행)
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // 실제 API 호출 예시:
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        // setValue(data.progressValue);

        // API 호출 시뮬레이션 (0.5초 ~ 2초 사이 지연)
        await new Promise((resolve) =>
          setTimeout(resolve, 500 + Math.random() * 1500),
        );

        // 랜덤 값으로 시뮬레이션 (실제로는 API 응답 데이터를 사용)
        const randomValue = Math.floor(Math.random() * 100);
        setValue(randomValue);
         
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  // 퍼센트로 변환
  const percentage = Math.min(100, Math.max(0, (value / maxValue) * 100));

  return (
    <div className="w-full">
      {/* 프로그레스바 컨테이너 */}
      <div
        className="w-full overflow-hidden rounded-full bg-gray-200"
        style={{ height: `${height}px` }}
      >
        {!isLoading && <motion.div className="h-full bg-blue-500" 
          animate={{ width: `${percentage}%` }}
          initial={{ width: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />}
      </div>

      {/* 로딩 및 값 표시 */}
      <div className="mt-2 text-right text-sm">
        {isLoading ? (
          <div className="animate-pulse text-gray-500">데이터 로딩 중...</div>
        ) : (
          <motion.div className="font-medium text-blue-600"
            animate={{ opacity:1, y:0 }}
            initial={{ opacity:0, y:10 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {value} / {maxValue} ({percentage.toFixed(1)}%)
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default function Page() {
  // 단어 목록
  const words = ["러닝", "게임", "볼링", "요가", "독서"];

  // 3번째 쿠키 출력
  // const cookieValue = decodeURIComponent(document.cookie.split(";")[2].split("=")[1]);
  return (
    <>
    <div className="p-8">
      <WordChangeAnimation
        prefix="오늘은"
        suffix="어떤가요?"
        words={words}
        interval={2000}
      />
    </div>
    <div className="p-8">
      <TypingEffect text="오늘은 러닝 어떤가요?" typingSpeed={100} />
    </div>
    <div className="mx-auto max-w-xl space-y-8 p-6">
      <h2 className="mb-4 text-xl font-bold">
        API 데이터로 애니메이션되는 프로그레스바
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="mb-2 text-lg font-medium">사용자 진행도</h3>
          <AnimatedProgressBar maxValue={100} height={12} />
        </div>

        <div>
          <h3 className="mb-2 text-lg font-medium">다운로드 상태</h3>
          <AnimatedProgressBar maxValue={100} height={8} />
        </div>

        <div>
          <h3 className="mb-2 text-lg font-medium">시스템 리소스</h3>
          <AnimatedProgressBar maxValue={100} height={16} />
        </div>
      </div>
      {/* {cookieValue} */}
    </div>
  </>
  );
}
