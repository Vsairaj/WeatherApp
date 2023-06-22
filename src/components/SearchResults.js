// SearchResults Component
import { HtmlElementTypeError } from "@testing-library/jest-dom/dist/utils";
import React from "react";
import { useState } from "react";


const SearchResults = (props) => {


  const onClickOption = (e) => {
    props.setLocation(e.target.id);
    setTimeout(() => {
      props.setShowSearchResults(false);
    }, 0) 
    setTimeout(() => {
      props.setLoading(true);
    }, 0) 
    ;
  };


try {
    return (
      <>
        <div className="search-results">
          {props.data.results.length>0? (props.data.results.map((elem) =>
          {return <div className="search-option" id={elem.id} onClick={onClickOption}>{elem.name}</div>})) : "No Results"}
        </div>
      </>
    );
  } catch(error)
  {return <></>;}
};


export default SearchResults;
