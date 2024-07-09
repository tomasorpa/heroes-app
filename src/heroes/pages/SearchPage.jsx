import { useForm } from "../../hooks/useForm";

export const SearchPage = () => {
  const {searchText,onInputChange,onResetForm } = useForm({
    searchText:""
  })
  const handleOnSumbit = (event) => {
    event.preventDefault()
    if(searchText.trim().length<=1)return
    console.log({searchText})
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <main className="main-search">
        <form action="" onSubmit={handleOnSumbit}>
          <h2>Searching</h2>
          <input
            type="text"
            placeholder="Search a Hero"
            autoComplete="off"
            name="searchText"
            onChange={onInputChange}
            value={searchText}
          />
          <button className="btn btn-primary">Send</button>
        </form>
        <section className="search-info">
          <h2>Results</h2>
          <div className="alert alert-primary">Search a Hero</div>
          <div className="alert alert-danger">No heroes foound</div>
        </section>
      </main>
    </>
  );
};
