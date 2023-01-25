import useGetSearchRestaurant from "hooks/api/useGetSearchRestaurant";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router";

function Search() {
  const [search, setSearch] = useState<string>("");
  const { searchValue } = useGetSearchRestaurant();
  const navigate = useNavigate();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // searchValue();
    navigate(`/search/${search}`);
    if (search == "") {
      navigate("/");
    }
  }

  function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={search} onChange={onChangeSearch} />
      <button></button>
    </form>
  );
}

export default Search;
