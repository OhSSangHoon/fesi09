"use client";

import { useState, useEffect } from "react";

type FriendType = {
  이름: string;
  나이: string;
  성별: string;
};
export default function Home() {
  // 친구 목록과 새 친구 정보를 저장할 변수
  const [친구들, 친구들변경] = useState<FriendType[]>([]);
  const [새친구정보, 새친구정보변경] = useState<FriendType>({
    이름: "",
    나이: "",
    성별: "남자",
  });

  // 친구를 추가하는 함수
  function 친구추가() {
    if (새친구정보.이름 === "" || 새친구정보.나이 === "") {
      return alert("이름과 나이를 입력해주세요.");
    }

    const 새친구목록 = [...친구들, 새친구정보];
    친구들변경(새친구목록);

    // 로컬스토리지에 저장
    localStorage.setItem("친구들", JSON.stringify(새친구목록));

    // 입력창 초기화
    새친구정보변경({
      이름: "",
      나이: "",
      성별: "남자",
    });
  }

    // 첫 렌더링 시 로컬 스토리지에서 저장된 친구 목록 불러오기
    useEffect(() => {
        const 저장된친구들 = localStorage.getItem("친구들");
        if (저장된친구들) {
            친구들변경(JSON.parse(저장된친구들));
        }
    }, []);

    // 테마 설정
    const [fill, setFill] = useState("#000000");
    const [border, setBorder] = useState("#000000");

    const handleFillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFill = e.target.value;
        setFill(newFill);
        localStorage.setItem("fill", newFill);
    }

    const handleBorderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newBorder = e.target.value;
        setBorder(newBorder);
        localStorage.setItem("border", newBorder);
    }

    useEffect(() => {
        const savedFill = localStorage.getItem("fill");
        const savedBorder = localStorage.getItem("border");

        if (savedFill) {
            setFill(savedFill);
        }
        if (savedBorder) {
            setBorder(savedBorder);
        }
    }, []);
        

  return (
    <>
        <div className="flex flex-col items-center p-8 bg-blue-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">내 친구 목록</h1>

            {/* 친구 추가 폼 */}
            <div className="flex flex-col gap-4 mb-8 w-full max-w-md">
                <input
                    type="text"
                    value={새친구정보.이름}
                    onChange={(e) =>
                        새친구정보변경({ ...새친구정보, 이름: e.target.value })
                    }
                    placeholder="친구 이름 입력"
                    className="px-4 py-2 border border-blue-300 rounded"
                />
                <input
                    type="number"
                    value={새친구정보.나이}
                    onChange={(e) =>
                        새친구정보변경({ ...새친구정보, 나이: e.target.value })
                    }
                    placeholder="나이 입력"
                    className="px-4 py-2 border border-blue-300 rounded"
                />
                <select
                    value={새친구정보.성별}
                    onChange={(e) =>
                        새친구정보변경({ ...새친구정보, 성별: e.target.value })
                    }
                    className="px-4 py-2 border border-blue-300 rounded"
                >
                <option value="남자">남자</option>
                <option value="여자">여자</option>
                </select>
                <button
                    onClick={친구추가}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                친구 추가
                </button>
            </div>

            {/* 친구 목록 */}
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl mb-4 text-blue-600">
                    친구들 ({친구들.length}명)
                </h2>

                {친구들.length === 0 ? (
                    <p className="text-gray-500">
                        아직 친구가 없어요. 친구를 추가해보세요!
                    </p>
                ) : (
                <ul className="space-y-2">
                    {친구들.map((친구, 번호) => (
                    <li
                        key={번호}
                        className="p-3 bg-blue-50 rounded flex items-center justify-between"
                    >
                        <span className="text-blue-700 font-medium">
                        👫 {친구.이름} ({친구.나이}세, {친구.성별})
                        </span>
                    </li>
                    ))}
                </ul>
                )}
            </div>
        </div>
        {/* 테마 설정 */}
        <div className="flex h-screen flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-bold">테마 설정</h1>
        <div className="flex items-center justify-center gap-6">
          <div className="flex h-18 w-48 items-center justify-center gap-2 rounded-md bg-gray-300">
            <span>채우기</span>
            <input
              type="color"
              name="fill"
              id="fill"
              value={fill}
              onChange={handleFillChange}
            />
          </div>
          <div className="flex h-18 w-48 items-center justify-center gap-2 rounded-md bg-gray-300">
            <span>테두리</span>
            <input
              type="color"
              name="border"
              id="border"
              value={border}
              onChange={handleBorderChange}
            />
          </div>
        </div>
        <div
          className={`h-24 w-48 rounded-md border-4`}
          style={{ backgroundColor: fill, borderColor: border }}
        ></div>
      </div>
    </>
  );
}