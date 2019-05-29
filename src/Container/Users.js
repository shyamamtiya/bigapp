import React ,{useState,useEffect}from 'react';
import UserList from '../Components/UserList/UserList';

function Users(props) {
    const [users,setUsers]=useState([]);
    const [searchInput,setSearchInput]=React.useState('')

    useEffect(()=>{
        async function fetchData (){
            const res = await fetch('https://jsonplaceholder.typicode.com/users') ;
            const data= await res.json();
            setUsers(data);
        }
        fetchData();
    },[]);

    const setValue =React.useCallback((value)=>{
        setSearchInput(value);
    },[]);

    return <UserList users={users}  setValue={setValue}  searchInput={searchInput} {...props} />;
    
}

export default Users;

