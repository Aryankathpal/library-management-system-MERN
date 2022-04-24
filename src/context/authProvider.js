import React,{ createContext,useState,useReducer } from "react";
import axios from "../api/axios";

export const AuthContext = createContext({});

const getdate = ()=>{
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth()+1;
    const year = d.getFullYear();
    const date = `${day}/${month}/${year}`;
    return date;
}
const returndate=()=>{
    const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 14);
var dd = targetDate.getDate();
var mm = targetDate.getMonth() + 1; // 0 is January, so we must add 1
var yyyy = targetDate.getFullYear();

var dateString = `${dd}/${mm}/${yyyy}`;
return dateString
}

// const BookReducer = (state,action)=>{
//     switch(action.type){
//         case 'get_books':
//             console.log(action.payload);
//             return action.payload

//         default:
//             return state;
//     }
// }

export const AuthProvider = ({children}) =>{

    const[token,setToken] = useState('');
    const[issue,setIssue] = useState([]);
    const[entertainment,setEntertainment] = useState([]);
    const[humour,setHumour] = useState([]);
    const[biography,setBiography] = useState([]);
    const[poetry,setPoetry] = useState([]);
    const[art,setArt] = useState([]);
    const[returned,setReturned] = useState([]);
    const[results,setResults] = useState([]); 
    const[role,setRole] = useState('');
    const [requested,setRequested] = useState([]);
    const [fine,setFine] = useState(1);

    // const [books,dispatch] = useReducer(BookReducer,[])

    const getIssueBooks=async()=>{
        try{
            const response= await axios.get('/getissuebooks',
            {
                headers:{
                Authorization:`Bearer ${token}`}
              });
              

              setIssue(response.data);
        }
        catch(e){
            console.log(e.response);
        }
    }

    const getBooks=async(id)=>{
        try{
            const response = await axios.get(`/search/${id}`,
            {
                headers:{
                Authorization:`Bearer ${token}`}
              });
            //   dispatch({type:'get_books',payload:response.data})

            if(id==='Entertainment'){
                setEntertainment(response.data);
            }
            else if(id==='Humour'){
                setHumour(response.data);
            }
            else if(id==='Biography'){
                setBiography(response.data);
            }
            else if(id==='Poetry-Drama'){
                setPoetry(response.data);
            }
            else if(id==='Art-Photography'){
                setArt(response.data);
            }

        }
        catch(e){
            console.log(e.response);
        }
    }

    const issueBooks=async(Book)=>{
        try{
             await axios.post('/issued-books',JSON.stringify({Name:Book.name,author:Book.author,isbn:Book.isbn,IssuedOn:getdate(),returnDate:returndate()}),
            {
                headers:{
                Authorization:`Bearer ${token}`}
              })
            
        }
        catch(e){
            console.log(e.response);
        }
    }

    // const returnBooks=async(Book)=>{
    //     try{
    //         await axios.post('/returned-books',JSON.stringify({Name:Book.Name,author:Book.author,isbn:Book.isbn,issuedOn:Book.IssuedOn,returnedOn:'1'}),
    //         {
    //             headers:{
    //             Authorization:`Bearer ${token}`}
    //           })
    //     }
    //     catch(e){
    //         console.log(e.data);
    //         console.log(e);
    //     }
    // }

    const getReturnBooks=async()=>{
        try{
            const response = await axios.get('/getreturnbooks',
            {
                headers:{
                Authorization:`Bearer ${token}`}
              })
              
              setReturned(response.data);
              
        }
        catch(e){
            console.log(e.response);
        }
    }

    const deleteIssue=async(isbn)=>{
        
        try{
            await axios.post(`/delete-issue/`,JSON.stringify({isbn}),
            {
                headers:{
                    Authorization:`Bearer ${token}`} 
            })
        }
        catch(e){
            console.log(e.response);
        }
    }

    const requestbook=async(bookName,author)=>{
        console.log(bookName,author);
        try{
            await axios.post('/request',JSON.stringify({bookName,author}),{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
        }
        catch(e){
            console.log(e);
        }
    }
    const searchbook=async(id)=>{
        try{
            const response = await axios.get(`/searchs/${id}`,
            {
                headers:{
                Authorization:`Bearer ${token}`}
              })
              setResults(response.data);
              console.log(response.data);
        }
        catch(e){
            console.log(e);
        }
    }

    const getRequestedBooks = async ()=>{
        try{
            const response = await axios.get('/getrequest',{
                headers:{
                    Authorization:`Bearer ${token}`}
            })
            setRequested(response.data)
        }
        catch(e){
            console.log(e);
        }
    }

    const deletereq=async(book)=>{
        try{
            await axios.post('/deletereq',JSON.stringify({name:book.name}),{
                headers:{
                    Authorization:`Bearer ${token}`}  
            })
        }
        catch(e){
            console.log(e);
        }
    }

    const addbook=async(book)=>{
        try{
            await axios.post('/addbook',JSON.stringify({image:book.image,name:book.name,isbn:book.isbn,author:book.author,category:book.category,book_depository_stars:book.book_depository_stars}),{
                headers:{
                    Authorization:`Bearer ${token}`}  
            })
        }
        catch(e){
            console.log(e);
        }
    }

    const getFine=async()=>{
        try{
            const response = await axios.get('/getfine',{
                headers:{
                    Authorization:`Bearer ${token}`}  
            })
            setFine(response.data[0].fine);
            console.log(response.data[0].fine);
        }
        catch(e){
            console.log(e);
        }
    }

    const deleteBook=async(isbn)=>{
        try{
            await axios.post('/deletebook',JSON.stringify({isbn}),{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <AuthContext.Provider value={{
            setToken,token,getIssueBooks,setIssue,
            issue,entertainment,biography,humour,poetry
            ,art,getBooks,issueBooks,getReturnBooks,returned
            ,deleteIssue,requestbook,results,searchbook,role
            ,setRole,getRequestedBooks,requested,deletereq,addbook
            ,getFine,fine,deleteBook
        }}>{children}</AuthContext.Provider>
    )
}