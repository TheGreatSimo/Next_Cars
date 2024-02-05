"use client"
import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"


const SearchBar = () => {
  const [hmanufacturer , setManufacturer] =  useState('')
  const handleSearch = () => {}

  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item"></div>
        <SearchManufacturer />


    </form>
  )
}

export default SearchBar