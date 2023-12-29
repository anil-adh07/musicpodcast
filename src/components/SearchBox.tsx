interface SearchBoxProps {
  onSearchChange: (searchTerm: string) => void;
}
export default function SearchBox({ onSearchChange }: SearchBoxProps) {
  return (
    <>
      <div className="topcontent p-7 ">
        <div className="text-white font-semibold text-3xl">
          <h1>Top Artists</h1>
        </div>
        <div className="searchbox mt-4 md:w-96">
          <span>
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-6 h-6 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 ps-10 text-neutral-100  rounded-lg bg-neutral-800 focus:outline-none ring-2 ring-neutral-800  focus:ring-neutral-600"
                  placeholder="  Search for artists"
                  onChange={(e) => onSearchChange(e.target.value)}
                  required
                />
              </div>
            </form>
          </span>
        </div>
      </div>
    </>
  );
}
