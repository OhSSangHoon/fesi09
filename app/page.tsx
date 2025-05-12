// app/page.tsx
"use client";

import useCounterStore from "./stores/useCounterStore";

export default function Home() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div className="flex gap-2 items-center justify-center">
      <button
        className="bg-red-500 text-white p-2 rounded-md"
        onClick={decrement}
      >
        감소
      </button>
      <p>Count: {count}</p>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={increment}
      >
        증가
      </button>
    </div>
  );
}
