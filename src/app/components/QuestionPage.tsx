"use client";

import { motion } from "motion/react";


interface QuestionPageProps {
  question: {
    question: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
}

export default function QuestionPage({
  question,
  onAnswer,
}: QuestionPageProps) {
  return (
    // 왼쪽에서 오른쪽으로 나오면서 애니메이션 적용
    <div className="w-full max-w-2xl px-4">
      <motion.h2 className="mb-8 text-center text-2xl font-bold animate-slide-in">
        {question.question}
      </motion.h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          //선택지들은 아래서 위로 나타나며, 나타나는 시간을 각자 다르게 적용  (delay를 다르게 줘보세요)
          <motion.button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full rounded-lg bg-white p-4 text-left shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.5 } }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98, transition: { duration: 0.2 } }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
}