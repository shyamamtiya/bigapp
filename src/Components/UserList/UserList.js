import React from 'react';
import PaginationComponent from '../Pagination/Pagination'
import SearchInput from '../Search/Search'

const headers = ['FULL NAME', 'PHONE', 'USER NAME', 'COMPANY NAME'];
const UserList = React.memo((props) => {

    const { users ,history,setValue,searchInput} = props;

    const handleClick = React.useCallback((item)=>{
        history.push('/transfer');
    });

    const onSearch =React.useCallback((value) =>{
        setValue(value);
    });

    return (
        <React.Fragment>
            <SearchInput onSearch={onSearch} />
            <table>
                <tbody>
                    {<tr>
                        {headers.map((header, index) => <th key={index}>{header}</th>)}
                    </tr>}
                    {
                        users.filter(item=>item.name.toLowerCase().includes(searchInput.toLowerCase()) || item.company.name.toLowerCase().includes(searchInput.toLowerCase()) || item.username.toLowerCase().includes(searchInput.toLowerCase())).map((item) => {
                            return (
                                <tr key={item.id} onClick={()=>handleClick(item)}>
                                    <td >
                                        <div className="primary">{item.name}</div>
                                        <div className="text-color" ><small>{item.email}</small></div>
                                    </td>
                                    <td>{item.phone}</td>
                                    <td>{item.username}</td>
                                    <td>{item.company.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <PaginationComponent total={users.length} defaultPageSize={10} />
            <div>
            </div>
        </React.Fragment>
    );
});

export default UserList;