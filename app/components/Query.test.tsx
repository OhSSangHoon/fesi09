import { render, screen } from "@testing-library/react";
import Home from "./Query";

test("Home 컴포넌트가 사용자 데이터를 올바르게 렌더링한다", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ id: 1, name: "김철수", email: "kim@example.com" }]),
    })
  ) as jest.Mock;

  render(<Home />);

  expect(screen.getByText("로딩중...")).toBeInTheDocument();

  await screen.findByText("이름: 김철수");
  await screen.findByText("이메일: kim@example.com");

  expect(screen.queryByText("로딩중...")).not.toBeInTheDocument();
});
