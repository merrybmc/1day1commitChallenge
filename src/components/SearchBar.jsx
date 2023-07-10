import { forwardRef } from "react";

const SearchBar = forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor=""></label>
      <input type="text" ref={ref} />
      <button
        onClick={() => {
          props.onSearchHandler(ref.current.value);
        }}
      >
        검색
      </button>
    </div>
  );
});

export default SearchBar;
