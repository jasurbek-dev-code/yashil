import { getPages } from "@/helpers/getpages";
import Image from "next/image";
import React, { useState } from "react";
interface PaginationProps {
  paginationPages: number;
  currentPage: number;
  pageSize: number;
  changePage: (pageNumber: number | string) => void;
}
export default function Pagination({
  paginationPages,
  currentPage,
  pageSize,
  changePage,
}: PaginationProps) {
    const [firstPage, setFirstPage] = useState(currentPage)
  const pages = getPages(paginationPages, pageSize,currentPage);

  return (
    paginationPages > 10 && (
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-center h-[40px] space-x-1">
          <div
            className={`box-border relative w-[40px] h-full  flex items-center rotate-180 justify-center text-[18px] border  ${
              currentPage === 1
                ? "bg-gray-300 border-transparent"
                : "hover:bg-green-500 hover:cursor-pointer transition duration-300 border-gray-300 bg-white"
            }`}
            onClick={() => currentPage !== 1 && changePage(currentPage - 1)}
          >
            <Image src={"/icons/right.svg"} alt="prev" width={20} height={20} />
          </div>

          {pages.map((page, i) =>
            page === "..." ? (
              <div
                key={i * Math.random()}
                className="w-[40px] h-full flex items-center justify-center text-[18px] text-gray-500"
              >
                ...
              </div>
            ) : (
              <div
                key={page}
                className={`w-[40px] h-full flex items-center justify-center text-[18px] border border-gray-300 cursor-pointer transition duration-300 ${
                  page === currentPage
                    ? "bg-green-700 text-white"
                    : "bg-white hover:bg-green-500"
                }`}
                onClick={() => changePage(page)}
              >
                {page}
              </div>
            )
          )}

          <div
            className={`box-border relative w-[40px] h-full  flex items-center justify-center text-[18px] border   ${
              currentPage === Math.ceil(paginationPages / pageSize)
                ? "bg-gray-300 border-transparent"
                : "hover:bg-green-500 hover:cursor-pointer transition duration-300 border-gray-300 bg-white"
            }`}
            onClick={() =>
              currentPage !== Math.ceil(paginationPages / pageSize) &&
              changePage(currentPage + 1)
            }
          >
            <Image src={"/icons/right.svg"} alt="next" width={20} height={20} />
          </div>
        </div>
      </div>
    )
  );
}
