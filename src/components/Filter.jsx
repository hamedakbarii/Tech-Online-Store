import React, { useEffect } from "react";
import { ArrowDown2, CloseIcon } from "./Icon";
import { filterOptions } from "../utils";
import { useState } from "react";

const Filter = ({
  setShowFilter,
  filter,
  setFilter,
  FiltersShow,
  setFilterShow,
  setActionFilterHandler,
}) => {
  const [FilterCount, SetFilterCount] = useState(0);

  const HandleSetFilter = (filter, setFilter, ItemTitle, Category) => {
    if (filter[`${ItemTitle.toLowerCase()}`].indexOf(Category) !== -1) {
      setFilter((draft) => {
        draft[`${ItemTitle.toLowerCase()}`].splice(
          filter[`${ItemTitle.toLowerCase()}`].indexOf(Category),
          1
        );
      });
      SetFilterCount(FilterCount - 1);
    } else {
      setFilter((draft) => {
        draft[`${ItemTitle.toLowerCase()}`] = [
          ...draft[`${ItemTitle.toLowerCase()}`],
          Category,
        ];
      });
      SetFilterCount(FilterCount + 1);
    }
  };

  useEffect(() => {
    setActionFilterHandler(filter);
    setFilter({
      category: [],
      price: [],
      color: [],
      filtername: [],
      brands: [],
      filterprice: [0, 0],
    });
    SetFilterCount(0);
  }, [FiltersShow]);

  return (
    <div>
      <div className="flex justify-between items-center border-b">
        <h3 className="text-xl font-semibold  p-2">Filter By</h3>
        <span onClick={() => setShowFilter(false)}>
          <CloseIcon />
        </span>
      </div>

      {FiltersShow ? (
        <>
          <div className="flex flex-col" key="FilterlistActive">
            {filterOptions.map((item) => (
              <div className="flex justify-between items-center p-2 font-semibold">
                <details className="w-full">
                  <summary className="w-full list-none flex items-center justify-between">
                    {item.title}
                    <span className="text-xs font-light">
                      <ArrowDown2 />
                    </span>
                  </summary>

                  {item.title === "Color" ? (
                    <div className="flex p-2 gap-2">
                      <div
                        className="w-4 h-4 rounded-full bg-black"
                        onClick={(e) => {
                          HandleSetFilter(
                            filter,
                            setFilter,
                            item.title,
                            "black"
                          );
                        }}
                      ></div>
                      <div
                        className="w-4 h-4 rounded-full bg-red-800"
                        onClick={(e) => {
                          HandleSetFilter(filter, setFilter, item.title, "red");
                        }}
                      ></div>
                    </div>
                  ) : item.title === "Price" ? (
                    <>
                      {item.items.map((category) => (
                        <p
                          className="p-2 text-sm flex items-center before:block before:transition-all before:p-0 "
                          onClick={(e) => {
                            HandleSetFilter(
                              filter,
                              setFilter,
                              item.title,
                              category
                            );
                            if (
                              e.currentTarget.classList.contains("before:p-2")
                            ) {
                              e.currentTarget.classList.remove(
                                "before:p-2",
                                "before:rounded-full",
                                "before:mr-4",
                                "before:bg-green-700"
                              );
                            } else {
                              e.currentTarget.classList.add(
                                "before:p-2",
                                "before:rounded-full",
                                "before:mr-4",
                                "before:bg-green-700"
                              );
                            }
                          }}
                        >
                          {category[0]}.00$ - {category[1]}.00$
                        </p>
                      ))}
                    </>
                  ) : (
                    <>
                      {item.items.map((category) => (
                        <p
                          className="p-2 text-sm flex items-center before:block before:transition-all before:p-0 "
                          onClick={(e) => {
                            HandleSetFilter(
                              filter,
                              setFilter,
                              item.title,
                              category
                            );
                            if (
                              e.currentTarget.classList.contains("before:p-2")
                            ) {
                              e.currentTarget.classList.remove(
                                "before:p-2",
                                "before:rounded-full",
                                "before:mr-4",
                                "before:bg-green-700"
                              );
                            } else {
                              e.currentTarget.classList.add(
                                "before:p-2",
                                "before:rounded-full",
                                "before:mr-4",
                                "before:bg-green-700"
                              );
                            }
                          }}
                        >
                          {category}
                        </p>
                      ))}
                    </>
                  )}
                </details>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col" key="FilterlistDeActive">
            {filterOptions.map((item) => (
              <div
                className="flex justify-between items-center p-2 font-semibold"
                // onClick={(event) => filterItemsHandler(event)}
              >
                <details className="w-full">
                  <summary className="w-full list-none flex items-center justify-between">
                    {item.title}
                    <span className="text-xs font-light">
                      <ArrowDown2 />
                    </span>
                  </summary>
                  {item.title === "Color" ? (
                    <div className="flex p-2 gap-2">
                      <div
                        className="w-4 h-4 rounded-full bg-black"
                        onClick={(e) => {
                          HandleSetFilter(
                            filter,
                            setFilter,
                            item.title,
                            "black"
                          );
                        }}
                      ></div>
                      <div
                        className="w-4 h-4 rounded-full bg-red-800"
                        onClick={(e) => {
                          HandleSetFilter(filter, setFilter, item.title, "red");
                        }}
                      ></div>
                    </div>
                  ) : item.title === "Price" ? (
                    <>
                      {item.items.map((category) => (
                        <p
                          className="p-2 text-sm flex items-center before:block before:transition-all before:p-0 "
                          onClick={(e) => {
                            HandleSetFilter(
                              filter,
                              setFilter,
                              item.title,
                              category
                            );
                            if (
                              e.currentTarget.classList.contains("before:p-2")
                            ) {
                              e.currentTarget.classList.remove(
                                "before:p-2",
                                "before:rounded-full",
                                "before:mr-4",
                                "before:bg-green-700"
                              );
                            } else {
                              e.currentTarget.classList.add(
                                "before:p-2",
                                "before:rounded-full",
                                "before:mr-4",
                                "before:bg-green-700"
                              );
                            }
                          }}
                        >
                          {category[0]}.00$ - {category[1]}.00$
                        </p>
                      ))}
                    </>
                  ) : (
                    <>
                      {item.items.map((category) => (
                        <p
                          className="p-2 text-sm flex items-center before:block before:transition-all before:p-0 "
                          onClick={(e) => {
                            HandleSetFilter(
                              filter,
                              setFilter,
                              item.title,
                              category
                            );
                            if (
                              e.currentTarget.classList.contains("before:p-2")
                            ) {
                              e.currentTarget.classList.remove(
                                "before:p-2",
                                "before:rounded-full",
                                "before:mr-4",
                                "before:bg-green-700"
                              );
                            } else {
                              e.currentTarget.classList.add(
                                "before:p-2",
                                "before:rounded-full",
                                "before:mr-4",
                                "before:bg-green-700"
                              );
                            }
                          }}
                        >
                          {category}
                        </p>
                      ))}
                    </>
                  )}
                </details>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="flex items-center">
        <button
          onClick={() => {
            if (FilterCount > 0) {
              setFilterShow(true);
            }
          }}
          className="text-white border-2 border-[#0156FF] bg-[#0156FF] px-10 py-2 font-semibold flex m-auto rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]"
        >
          Apply Filters {FilterCount > 0 ? FilterCount : null}
        </button>
        <button
          onClick={() => {
            setFilterShow(false);
          }}
          className="text-red-900 border-2 border-red-600 bg-red-300 px-10 py-2 font-semibold flex m-auto rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-red-700"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
