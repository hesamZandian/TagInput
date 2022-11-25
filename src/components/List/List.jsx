import React from "react";
import styles from "./List.module.css";
const List = ({ showTagsList, tags, activeTag, setActiveTag, onAddTag }) => {
  return (
    <div
      className={`${styles.List} ${!tags.length ? styles.Empty : ""} ${
        showTagsList ? styles.Open : ""
      }`}
    >
      {tags.map((tag, tagIndex) => {
        return (
          <div
            className={`${styles.List__Item} ${
              tagIndex === activeTag ? styles.Active : ""
            }`}
            key={tag.id}
            onMouseOver={() => setActiveTag(tagIndex)}
            onClick={() => onAddTag(tag.label)}
          >
            {tag.label}
          </div>
        );
      })}
    </div>
  );
};

export default List;
