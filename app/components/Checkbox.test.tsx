import { render, screen, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";


test("체크박스 클릭 시 상태가 변경되는지 확인", () => {
    render(<Checkbox />);
    
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked(); //체크박스가 체크되어 있지 않은 상태인지 확인

    fireEvent.click(checkbox); //체크박스를 클릭
    expect(checkbox).toBeChecked(); //체크박스가 체크되어 있는 상태인지 확인

    //한번 더 클릭 시 체크박스 해제
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked(); //체크박스가 체크되어 있지 않은 상태인지 확인
});