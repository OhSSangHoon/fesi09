import UserProfile from "./UserProfile";
import { render, screen } from "@testing-library/react";


test("UserProfile 컴포넌트가 제대로 렌더링되는지 확인", () => {
    render(<UserProfile name="홍길동" isVerified={true} />);

    // div는 getByTestId로 찾기
    const profileContainer = screen.getByTestId("profile-container");
    // div가 verified 클래스를 가지는지 확인
    expect(profileContainer).toHaveClass("verified");

    //h2 요소 찾기
    const h2 = screen.getByText("홍길동님의 프로필");
    //h2 요소가 화면에 있는지 확인
    expect(h2).toHaveTextContent("홍길동님의 프로필");

    //img 요소 찾기
    const img = screen.getByAltText("프로필 이미지");
    //img 요소가 화면에 있는지 확인
    expect(img).toBeInTheDocument();

    //button 요소 찾기
    const button = screen.getByRole("button", { name: "프로필 수정" });
    //button 요소가 활성화되어 있는지 확인
    expect(button).not.toBeDisabled();
});
