import React, {  useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'
import { SearchProducts } from '../actions/ProductsAction';

const PaginationComponent = ({ nbPage,dispatch }) => {
  
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageClick = (page) => {
        setCurrentPage(page);
 
        dispatch(SearchProducts("", page));
        
  
    };
  
    return (
        <div>
            <Pagination>
                <Pagination.First onClick={() => handlePageClick(0)} />
              
                {
                    currentPage>0 ? <Pagination.Prev onClick={() => handlePageClick(currentPage-1)} /> :""
                }
               
                {Array.from({ length: nbPage })?.map((_,idx) =>
                    <Pagination.Item key={idx}
                        active={idx == currentPage}
                        onClick={() => handlePageClick(idx)}
                    >{idx + 1}</Pagination.Item>)}
                {
                    currentPage<nbPage-1 ? <Pagination.Next  onClick={() => handlePageClick(currentPage+1)} /> :""
                }
               
                <Pagination.Last onClick={() => handlePageClick(nbPage-1)} />
            </Pagination></div>
    )
}

export default PaginationComponent