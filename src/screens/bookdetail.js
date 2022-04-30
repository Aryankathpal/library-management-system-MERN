import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BooksNav } from "../components/books/bookNav"
import { AuthContext } from "../context/authProvider";
import '../css/booksdetails.css';
import { useToasts } from 'react-toast-notifications';
import axios from "../api/axios";

export const BookDetail=()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const {issueBooks,issue,token,role,getIssueBooks,deleteBook} = useContext(AuthContext);
    const [btnValue,setBtnValue] = useState('Loading..');
    const [btnColor,setBtnColor] = useState('buy--btn');
    const { addToast } = useToasts();
    const [copies,setCopies] = useState(true);

    useEffect( async ()=>{
        await getIssueBooks();
        
        const response = await axios.get(`/search/isbn/${location.state.data.isbn}`,{
            headers:{
            Authorization:`Bearer ${token}`}
          })
          console.log(response.data[0].copies);
          if(response.data[0].copies<1){
              setBtnValue('Not available');
              setBtnColor('btn-secondary disabled');
            }
          else{
          let flag=0;
         
          issue.every(book=>{
              if(book.isbn==location.state.data.isbn){
                  flag=1;
                  return false;
              }
              return true
          }) 
          if(flag==1){
              setBtnColor('btn--change');
              setBtnValue('Issued');
          }
          else{
              setBtnValue("Issue Book")
          }
        }
        
    },[])

    const btnHandle=()=>{
        
        if(btnValue=='Issued'){
            addToast('Book is already issued',{ appearance: 'error' });
        }
        if(btnValue=='Not available')addToast('Book is not available at this moment try after sometime',{appearance:'error'})
        else{
        issueBooks(location.state.data);
        setBtnValue('Issued');
        setBtnColor('btn--change');
        }
        
    }

    const deletebtn=(isbn)=>{
        deleteBook(isbn);
        navigate('/home/books');
        addToast('Book deleted successfully',{ appearance: 'success' });

    }
    return(
        <>
        <div className="edges">
            <BooksNav name='Book details'/>
        <div className="main">
        {/* <h1>Book name</h1>
        <h1>Book details</h1> */}
        <section class="product">	
			<div class="photo-main">
				<img class='photo'src={location.state.data.image} />
			</div>
	<div class="product__info">
		<div class="title">
			<h1>{location.state.data.name}</h1>
			<span>{location.state.data.author}</span>
		</div>
		
		
		<div class="description">
			<h3>Details</h3>
			<ul>
				<li>Language    -   english</li>
				<li>Publisher   -   None</li>
				<li>ISBN        -   {location.state.data.isbn}</li>
				<li>Rating      -   {location.state.data.book_depository_stars}</li>
                <li>category    -   {location.state.data.category}</li>
			</ul>
		</div>
        {role==='user'?
		<button onClick={btnHandle} class={(btnValue=='Not available'?"btn btn-secondary disabled":btnColor)}>{btnValue}</button>:
        <button onClick={()=>deletebtn(location.state.data.isbn)} class='buy--btn'>Delete Book</button>}
        
	</div>
</section>

        </div>
        </div>
        </>
    )
}