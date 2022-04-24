import '../css/dashboard.css';
import { BooksNav } from '../components/books/bookNav';
import { AuthContext } from '../context/authProvider';




import { useContext, useEffect,useState } from 'react';
export const Dashboard=()=>{

    const {token,getBooks,role,getRequestedBooks,getFine,fine} = useContext(AuthContext);
    
    useEffect(async()=>{
        
        await getBooks('Entertainment');
        await getBooks('Humour');
        await getBooks('Biography');
        await getBooks('Poetry-Drama');
        await getBooks('Art-Photography');
        await getRequestedBooks();
        getFine();
        return()=>{
            console.log("loaded");
        }
        
    },[])
    
    return(
       
        <div className="edges">
        <BooksNav name="Dashboard" />
         <div className="main">
             <h1>h</h1>
             <h1>{role}</h1>
             <h1>{fine}</h1>
             <h1>{token}</h1>
        </div>
        </div>
    )
}