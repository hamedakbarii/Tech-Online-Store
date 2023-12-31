import React, { useEffect, useState } from "react";
import Filter from "./Filter";

const FilterItems = ({
  filter,
  setFilter,
  setFilterShow,
  ActionFilterHandler,
  setActionFilterHandler,
  FiltersShow,
}) => {
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth >= 768) {
        setShowFilter(true);
      } else {
        setShowFilter(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="p-2 flex flex-col gap-4 md:bg-PrimaryBlue md:w-2/4 md:m-2 md:mt-10">
        <div className="md:hidden">
          <h3>MSI PS Series (20)</h3>
        </div>

        <div className="flex justify-between items-center gap-2">
          <button
            className="w-48 h-16 text-center border border-[#CACDD8] md:hidden"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter
          </button>
        </div>

        {showFilter ? (
          <Filter
            filter={filter}
            setFilter={setFilter}
            setShowFilter={setShowFilter}
            setFilterShow={setFilterShow}
            setActionFilterHandler={setActionFilterHandler}
            ActionFilterHandler={ActionFilterHandler}
            FiltersShow={FiltersShow}
          />
        ) : null}
      </div>
    </>
  );
};

export default FilterItems;
