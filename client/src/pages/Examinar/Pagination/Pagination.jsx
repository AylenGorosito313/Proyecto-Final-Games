import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import CardsExam from "../CardsExam";
import Style from "../Examinar.module.css";

export default function PaginatedCards({ examinarGames }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = examinarGames.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(examinarGames.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % examinarGames.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <CardsExam 
        currentCards={currentItems}
      />
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName={Style.pagination}
          pageLinkClassName={Style.page_num}
          previousLinkClassName={Style.page_num}
          nextLinkClassName={Style.page_num}
          activeClassName={Style.active}
        />
      </div>
    </>
  );
}
