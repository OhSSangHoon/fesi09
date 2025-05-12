import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Button from "./Button";

test("버튼 클릭 테스트", async () => {
    render(<Button />);
    const buttonElement = screen.getByText("좋아요 버튼");

    fireEvent.click(buttonElement);

    await waitFor(() => {
        expect(buttonElement).toHaveClass("bg-red-500");
    });
});
