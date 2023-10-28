import React, { useRef } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { SearchProducts } from '../actions/ProductsAction';

const SearchComponent = ({dispatch}) => {

    const TextRef = useRef();
    const handleSearch = () => {
        dispatch(SearchProducts(TextRef.current.value));
    }
    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    ref={TextRef}
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                />
                <InputGroup>
                    <Button variant="primary" onClick={handleSearch}>Search</Button>
                </InputGroup>
            </InputGroup></div>
    )
}

export default SearchComponent