import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";
import userEvent from "@testing-library/user-event";

// 검색어를 입력하고 폼을 제출하면 onSearch 함수가 호출되어야 함
// onSearch 함수는 입력된 검색어를 인자로 받아야 함
test("검색 폼 작동 확인", async () => {
    const user = userEvent.setup();
    const onSearch = jest.fn();
    render(<SearchForm onSearch={onSearch} />);

    const inputElement = screen.getByLabelText("검색:");
    await user.type(inputElement, "리액트");

    const buttonElement = screen.getByRole("button", { name: "검색" });
    await user.click(buttonElement);

    expect(onSearch).toHaveBeenCalledWith("리액트");
});
