"use client";

import Cookies from "js-cookie";

// 쿠키 설정하기
// 1. 기본 사용법: Cookies.set('키', '값')
// 2. 옵션 추가: Cookies.set('키', '값', { expires: 7 }) - 7일 후 만료
// 3. 경로 지정: Cookies.set('키', '값', { path: '/' }) - 모든 경로에서 접근 가능
// 4. 보안 설정: Cookies.set('키', '값', { secure: true }) - HTTPS에서만 접근 가능
// 5. 쿠키 가져오기: Cookies.get('키')
// 6. 쿠키 삭제하기: Cookies.remove('키')
// 한글 쿠키 처리
// 한글을 쿠키에 저장할 때는 encodeURIComponent로 인코딩해야 함
// 1. 한글 저장: Cookies.set('키', encodeURIComponent('한글값'))
// 2. 한글 가져오기: decodeURIComponent(Cookies.get('키') || '')
// 
// 예시:
// Cookies.set('koreanKey', encodeURIComponent('안녕하세요'));
// const koreanValue = decodeURIComponent(Cookies.get('koreanKey') || '');

Cookies.set(encodeURIComponent("name"), encodeURIComponent("sanghun"));
Cookies.get(encodeURIComponent("name"));
Cookies.remove(encodeURIComponent("이름"));

export default function CookiePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      CookiePage
    </div>
  );
}