import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useTagInput from "../../hooks/useTagInput";

it('should add, a tag when user write "Sample Value" and hit comma', async () => {
  const { result } = renderHook(() => useTagInput());
  await act(() => {
    result.current.onBaseTextInputKeyDown(",", "Sample Value");
  });
  expect(result.current.selectedTags.length).toBe(1);
});
