import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;


const SearchInput = React.memo((props) => {
    const { onSearch } = props;

    return (<Search
    placeholder="input search text"
    onChange={ev => onSearch(ev.target.value)}
    style={{ width: 200,float:'right' }}
  />);
});

export default SearchInput 
