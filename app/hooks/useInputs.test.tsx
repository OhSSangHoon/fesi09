import { ChangeEvent } from "react";
import useInputs from "./useInputs";
import { act, renderHook } from "@testing-library/react";

describe("useInputs 훅 테스트", () => {
    const initialValues = { name: "", email: "" };
    test("초기값이 올바르게 설정된다", () => {
        //initalValues로 전달한 객체가 values에 올바르게 업데이트 되는지 확인
        const { result } = renderHook(() => useInputs(initialValues));
        expect(result.current.values).toEqual(initialValues);
    });

    test("handleChange로 한 필드의 값을 변경했을 때 values가 올바르게 업데이트되는지 확인", () => {
        const mockEvent = {
            target: {
                name: "name",
                value: "김철수",
            },
        } as ChangeEvent<HTMLInputElement>;

        const { result } = renderHook(() => useInputs(initialValues));

        act(() => {
            result.current.handleChange(mockEvent);
        }); 

        expect(result.current.values).toEqual({ name: "김철수", email: "" });
    });

    test("handleChange로 여러 필드를 변경했을 때 모든 값이 올바르게 반영되는지 확인", () => {
        const usernameEvent = {
            target: {
                name: "name",
                value: "김철수",
            },
        } as ChangeEvent<HTMLInputElement>;

        const emailEvent = {
            target: {
                name: "email",
                value: "kim@example.com",
            },
        } as ChangeEvent<HTMLInputElement>;

        const { result } = renderHook(() => useInputs(initialValues));

        act(() => {
            result.current.handleChange(usernameEvent);
            result.current.handleChange(emailEvent);
        });
        
        expect(result.current.values).toEqual({ name: "김철수", email: "kim@example.com" });
    });

    test("값을 변경한 후 reset을 호출했을 때 values가 initialValues로 돌아가는지 확인", () => {
        const { result } = renderHook(() => useInputs(initialValues));

        const mockEvent = {
            target: {
                name: "name",
                value: "김철수",
            },
        } as ChangeEvent<HTMLInputElement>;
        
        act(() => {
            result.current.handleChange(mockEvent);
            result.current.reset();
        });

        expect(result.current.values).toEqual(initialValues);
    });

    test("initialValues가 빈 객체일 때 handleChange와 reset이 정상 동작하는지 확인. 동적 폼에서 초기값이 없을 수 있는 엣지 케이스 검사", () => {
        const { result } = renderHook(() => useInputs({}));

        const mockEvent = {
            target: {
                name: "name",
                value: "김철수",
            },
        } as ChangeEvent<HTMLInputElement>;

        act(() => {
            result.current.handleChange(mockEvent);
        });

        expect(result.current.values).toEqual({ name: "김철수"});

        act(() => {
            result.current.reset();
        });

        expect(result.current.values).toEqual({});
    });
});
