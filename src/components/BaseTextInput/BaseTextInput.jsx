import React from "react";
import List from "../List/List";
import styles from "./BaseTextInput.module.css";

const BaseTextInput = (props) => {
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
    onAddTag,
  } = props;

  return (
    <div className={styles["BaseTextInput--Container"]} ref={tagInputRef}>
      <input
        type="text"
        data-testid="tag_input"
        onFocus={onFocusTagInput}
        value={search}
        onChange={onChangeBaseTextInput}
        onKeyDown={(e) => onBaseTextInputKeyDown(e.key, search)}
        className={styles.BaseTextInput}
        placeholder="Add tags..."
      />
      <List
        showTagsList={showTagsList}
        tags={tagsList}
        search={search}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
        onAddTag={onAddTag}
      />
    </div>
  );
};

export default BaseTextInput;
