import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

import "../NavStore/NavStore.css";
import "./search.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useNavigate();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  return (
    <form
      className="form_search"
      action="/searchresult"
      method="get"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <div className="col-in">
        <input
          value={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Buscar en tienda"
          name="s"
          className="header__searchInput"
        />
      </div>
      <div className="col-bt">
        <button type="submit" className="button_search">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;