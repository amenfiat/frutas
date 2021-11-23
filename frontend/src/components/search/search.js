import { useNavigate } from "react-router-dom";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const history = useNavigate();
  const onSubmit = (e) => {
    history.push(`?s=${searchQuery}`);
    e.preventDefault();
  };

  return (
    <form
      action="/searchresult"
      method="get"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Buscar en tienda"
        name="s"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;