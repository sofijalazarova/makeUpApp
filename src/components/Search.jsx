/* eslint-disable react/prop-types */
function Search({ setSearchVal, handleSearchClick }) {
  return (
    <div className="max-w-md mx-auto pt-36 lg:pt-28">
      <div className="relative">
        <input
          onChange={(e) => setSearchVal(e.target.value)}
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500"
          placeholder="Search Bronzer, Eyeliner..."
        ></input>
        <button
          onClick={handleSearchClick}
          className=" absolute end-2.5 bottom-2.5  hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300  px-4 py-2   dark:focus:ring-zinc-700 text-sm font-bold text-white rounded-lg shadow-md bg-primary shadow-primary outline"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
