//=====================================================================================
// #1 - Base Imports
//=====================================================================================
import React from "react";

//=====================================================================================
// #4 - Import * FontAwesome Icons
//=====================================================================================
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search({ placeholder, name, value, onChange }) {

    return (
        <div className="search">
            <form className="searchForm">
                <input
                    type="search"
                    placeholder={!placeholder ? "Faça uma busca" : placeholder}
                    name={!name ? "field_search" : name}
                    defaultValue={value}
                    onChange={onChange}
                />

                <button type="submit">
                    <I icon={faSearch} />
                </button>
            </form>
        </div>

    )
}