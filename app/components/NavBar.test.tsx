import NavBar from "./NavBar";
import { render, screen } from "@testing-library/react";

test("NavBar 컴포넌트가 제대로 렌더링되는지 확인", () => {
    render(<NavBar />);
    
    //h1 요소 찾기
    const logo = screen.getByRole("heading", { name: "웹사이트 로고" });
    //h1 요소가 화면에 있는지 확인
    expect(logo).toBeInTheDocument();

    //input 요소 찾기
    const searchInput = screen.getByRole("searchbox", { name: "검색" });
    //input 요소가 화면에 있는지 확인
    expect(searchInput).toBeInTheDocument();

    //button 요소 찾기
    const loginButton = screen.getByRole("button", { name: "로그인" });
    //button 요소가 화면에 있는지 확인
    expect(loginButton).toBeInTheDocument();
})
