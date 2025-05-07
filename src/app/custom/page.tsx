export default function Custom() {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen sanghun gap-4">
      <h1 className="text-flow-blue text-2xl font-semibold">Custom</h1>
      <p className="bg-[#000] p-4 rounded-lg text-flow-orange text-2xl font-semibold">Custom</p>
      <button className="bg-flow-blue text-white rounded-md px-4 py-2 hover:bg-flow-purple transition-colors duration-300 focus:ring-flow-blue focus:ring-2 focus:ring-offset-0">로그인</button>
    </div>

    <div className="font-noto-sans-kr min-h-screen bg-gray-100">
    {/* 헤더 섹션 */}
    <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
      {/* 여기에 헤더 내용 구현 */}
      {/* 텍스트에 flow-blue 색상 적용 */}
      <h1 className="text-flow-blue text-2xl font-semibold">헤더</h1>
      <div className="flex gap-2">
        <button className="rounded-md bg-gray-200 px-4 py-2">로그인</button>
        {/* 회원가입 버튼에 배경색을 flow-blue로 설정 */}
        <button className="rounded-md bg-flow-blue px-4 py-2 text-white">
          회원가입
        </button>
      </div>
    </header>

    <main className="container mx-auto p-4">
      {/* 통계 카드 섹션 */}
      <section className="mb-8">
        {/* 텍스트에 flow-purple 색상 적용 */}
        <h2 className="text-flow-purple mb-4 text-2xl font-semibold">
          대시보드 개요
        </h2>

        {/* 보조 색상 적용 */}
        <div className="text-flow-teal grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          카드
        </div>
      </section>

      {/* 최근 활동 섹션 */}
      <section className="mb-8">
        {/* 여기에 최근 활동 목록 구현 */}
        최근 활동
      </section>

      {/* CTA 섹션 */}
      {/* 강조 색상 적용 */}
      <section className="mb-8 ">
        {/* 여기에 CTA 섹션 구현 */}
        <button className="rounded-md bg-flow-orange px-4 py-2 text-white">
          CTA 버튼
        </button>
      </section>
    </main>
  </div>
  {/* hover, focus 실습문제 */}
  <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form className="mx-auto w-full max-w-sm">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            이메일
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900
                hover:border-blue-400 focus:ring-2 focus:ring-blue-300
                dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500
            "
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900
                hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-300
                dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500
            "
            required
          />
        </div>
        <div className="mb-5 flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="h-4 w-4 rounded-sm border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-blue-400
                dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800
              "
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            아이디 저장
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white
            hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300
            sm:w-auto
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
          "
        >
          로그인
        </button>
      </form>
    </div>
    {/* 폼 실습문제 */}
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form className="mx-auto max-w-md">
        <div className="relative z-0 mb-5 w-full">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="absolute top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 dark:text-gray-400
              peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
              peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600
              peer-dark:text-blue-500
            "
          >
            이메일 주소
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="absolute top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 dark:text-gray-400
              peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
              peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600
              peer-dark:text-blue-500
            "
          >
            비밀번호
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_repeat_password"
            className="absolute top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 dark:text-gray-400
              peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
              peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600
              peer-dark:text-blue-500
            "
          >
            비밀번호 확인
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 dark:text-gray-400
                peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600
                peer-dark:text-blue-500
              "
            >
              이름
            </label>
          </div>
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_last_name"
              className="absolute top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 dark:text-gray-400
                peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600
              "
            >
              성
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="absolute top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 dark:text-gray-400
                peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600
                peer-dark:text-blue-500
              "
            >
              전화번호
            </label>
          </div>
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_company"
              className="absolute top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 dark:text-gray-400
                peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600
                peer-dark:text-blue-500
              "
            >
              회사
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300"
        >
          가입하기
        </button>
      </form>
    </div>
  </>
  );
}