import '../css/dashboard.css'
import '../css/issued.css'
import { BooksNav } from '../components/books/bookNav';
import axios from '../api/axios';
import { AuthContext } from '../context/authProvider';
import { useEffect,useContext ,useState} from 'react';
export const Issued=()=>{

   
    const {getIssueBooks,setIssue,issue,deleteIssue} = useContext(AuthContext);
    
    useEffect(async()=>{
      await getIssueBooks();
    })

    const returnbtn=async(book)=>{
      
      await deleteIssue(book.isbn);
     var list = [...issue];
     var index = issue.indexOf(book);
     console.log(`clicked on ${book.Name}`);
     if(index!==-1){
       list.splice(index,1);
        setIssue(list);
     }
    //  await returnBooks(book);
    }
    const issueList = issue.map((book,index)=>
    <tr key={book._id}>
      <th scope="row" >{index+1}</th>
      <td>{book.isbn}</td>
      <td>{book.Name}</td>
      <td>{book.author}</td>
      <td>{book.IssuedOn}</td>
      <td>{book.returnDate}</td>
      <td><button onClick={()=>returnbtn(book)} className='btn btn-success'>Return</button></td>

    </tr>)

    return(
         <div className="edges">
        <BooksNav name="Issued Books" />
        <div className='main'>
          {issue.length==0?<img src={require('../css/no-data.png')} style={{width:'500px',height:'500px'}}/>:<>
        <table class="table table-hover t-edit">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ISBN</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Issued date</th>
      <th scope="col">Return date</th>
    </tr>
  </thead>
  <tbody>
    {issueList}
  </tbody>
</table></>}
</div>
        </div>
    )
}