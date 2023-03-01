import { Divider, Input } from 'antd';
import { useState } from 'react';

const Search = (props) => {
  const { searchFood } = props;

  console.log(searchFood)
  const [searchValue, setSearchValue] = useState("");
  console.log("searchValue", searchValue)

  const handleSearch = (e) => {
    console.log(e)
    setSearchValue(e.target.value);
    searchFood(e.target.value)
  }
  return (
     <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchValue} type="text" onChange={handleSearch} />
    </>
  )
}
export default Search;