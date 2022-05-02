import { Input, Spacer } from "@nextui-org/react";
import { useState } from "react";

function SearchBar() {
  const [searchField, setSearchField] = useState("");

  return <>
    <Spacer y={0.5} />
    <Input
      size="sm"
      placeholder="검색어를 입력해주세요."
    />
  </>
}


export default SearchBar;