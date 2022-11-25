import { useEffect, useMemo, useRef, useState } from "react";

const useTagInput = () => {
  const tagInputRef = useRef(null);
  const [showTagsList, setShowTagsList] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagsList, setTagsList] = useState([]);

  const filteredTagsList = useMemo(
    () =>
      tagsList.filter(
        (tag) =>
          tag.label.toLowerCase().includes(search.trim().toLowerCase()) &&
          !selectedTags.includes(tag.label.toLowerCase())
      ),
    [search, selectedTags, tagsList]
  );

  /**
   * if user click outside of tag input
   * hide the tags list
   */
  useEffect(() => {
    if (tagsList.length) {
      const click_handle = (e) => {
        if (!tagInputRef.current.contains(e.target)) {
          setShowTagsList(false);
        }
      };
      window.addEventListener("click", click_handle);
      return () => {
        window.removeEventListener("click", click_handle);
      };
    }
    // eslint-disable-next-line
  }, [tagsList.length]);

  const onAddTag = (tag) => {
    setSelectedTags([...selectedTags, tag]);
    setShowTagsList(false);
  };

  const onFocusTagInput = () => {
    fetch("/api/tags")
      .then((response) => {
        return response.json();
      })
      .then((tags) => {
        setTagsList(tags);
        setShowTagsList(true);
      });
  };

  const onChangeBaseTextInput = (e) => {
    setSearch(e.target.value);
    if (!showTagsList && !search) {
      setShowTagsList(true);
    }
  };

  const onBaseTextInputKeyDown = (key, tag) => {
    if (key === "Enter" && search) {
      onAddTag(search);
      setSearch("");
      return;
    }
    if (filteredTagsList.length) {
      // add tag when user hit enter key
      if (key === "Enter") {
        onAddTag(filteredTagsList[activeTag]?.label);
      }

      // change highlighted tag when user hit ArrowUp and ArrowDown keys
      if (key === "ArrowUp") {
        if (activeTag > 0) {
          setActiveTag(activeTag - 1);
        }
      }
      if (key === "ArrowDown") {
        if (activeTag < filteredTagsList.length - 1) {
          setActiveTag(activeTag + 1);
        }
      }

      if (key === "Escape") {
        setShowTagsList(false);
      }
    }

    if (key === ",") {
      if (tag) {
        onAddTag(tag);
        setTimeout(() => {
          setSearch("");
        }, 50);
      }
    }
  };

  const onDeleteTag = (tag) => {
    setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
  };

  return {
    tagInputRef,
    search,
    onChangeBaseTextInput,
    activeTag,
    setActiveTag,
    onFocusTagInput,
    showTagsList,
    tagsList: filteredTagsList,
    setTagsList,
    selectedTags,
    onAddTag,
    onDeleteTag,
    onBaseTextInputKeyDown,
  };
};

export default useTagInput;
