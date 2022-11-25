import React from "react";
import styles from "./TagInput.module.css";
import useTagInput from "../../hooks/useTagInput";
import BaseTextInput from "../BaseTextInput/BaseTextInput";

const TagInput = () => {
  const {
    tagInputRef,
    search,
    onChangeBaseTextInput,
    onFocusTagInput,
    showTagsList,
    tagsList,
    activeTag,
    setActiveTag,
    onBaseTextInputKeyDown,
    selectedTags,
    onAddTag,
    onDeleteTag,
  } = useTagInput();

  return (
    <div className={styles.TagInput}>
      <BaseTextInput
        tagInputRef={tagInputRef}
        search={search}
        onChangeBaseTextInput={onChangeBaseTextInput}
        onFocusTagInput={onFocusTagInput}
        showTagsList={showTagsList}
        tagsList={tagsList}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        onBaseTextInputKeyDown={onBaseTextInputKeyDown}
        onAddTag={onAddTag}
      />
      <div className={styles.TagInputList}>
        {selectedTags.map((selectedTag) => {
          return (
            <div className={styles.Tag} onClick={() => onDeleteTag(selectedTag)}>
              <span>{selectedTag}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TagInput;
