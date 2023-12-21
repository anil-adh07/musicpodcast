

export default function SearchBox() {
  return (
    <>
      <div className="topcontent p-10 ">
        <div className="text-white font-semibold text-3xl">
          <h1>Top Artists</h1>
        </div>
        <div className="searchbox mt-4 md:w-96">
          <span>
            <form>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-gray-900  rounded-lg"
                  placeholder="Search for artists" required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#171717] hover:bg-black  
                font-medium rounded-lg text-sm px-4 py-2">Search</button>

              </div>
            </form>
          </span>
        </div>
      </div>
    </>

  );
}
