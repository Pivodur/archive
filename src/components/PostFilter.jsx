import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div className='postFilter'>
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue="Sort by"
        options={[
          { value: "title", name: "By doc name" },
          { value: "body", name: "By description" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
