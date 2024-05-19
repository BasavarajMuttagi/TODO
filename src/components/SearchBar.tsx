function SearchBar() {
  return (
    <div className="w-full rounded outline-none bg-white min-h-10 text-neutral-400 flex justify-between items-center max-w-screen-lg shrink-0">
      <div className="font-semibold text-white/80 flex-1 overflow-x-hidden text-nowrap">
        <input
          type="search"
          placeholder="search task"
          className="bg-inherit outline-none p-2 w-full text-black/80"
        />
      </div>
    </div>
  );
}

export default SearchBar;
