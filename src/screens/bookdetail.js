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
        const response = await axios.get(`/search/isbn/${location.state.isbn}`,{
            headers:{
            Authorization:`Bearer ${token}`}
          })
          if(response.data[0].copies<1)setBtnValue('Not available');
          else{
          let flag=0;
         
          issue.every(book=>{
              if(book.isbn==location.state.isbn){
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
        
    })

    const btnHandle=()=>{
        
        if(btnValue=='Issued'){
            addToast('Book is already issued',{ appearance: 'error' });
        }
        if(btnValue=='Not available')addToast('Book is not available at this moment try after sometime',{appearance:'error'})
        else{
        issueBooks(location.state);
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
				<img class='photo'src={location.state.image} />
			</div>
	<div class="product__info">
		<div class="title">
			<h1>{location.state.name}</h1>
			<span>Author name</span>
		</div>
		
		
		<div class="description">
			<h3>Details</h3>
			<ul>
				<li>Language-english</li>
				<li>Publisher</li>
				<li>ISBN</li>
				<li>Rating</li>
                <li>Stauts</li>
			</ul>
		</div>
        {role==='user'?
		<button onClick={btnHandle} class={btnColor}>{btnValue}</button>:
        <button onClick={()=>deletebtn(location.state.isbn)} class='buy--btn'>Delete Book</button>}
        
	</div>
</section>

        </div>
        </div>
        </>
    )
}