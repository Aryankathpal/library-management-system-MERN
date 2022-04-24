import { AuthContext } from "../../context/authProvider"
import { useContext, useEffect } from "react"
import { BooksNav } from "../../components/books/bookNav";
import { useNavigate } from "react-router-dom";

export const RequestedBooks = ()=>{

    const{requested,deletereq,getRequestedBooks} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        getRequestedBooks();
    })


    const requestedList = requested.map((book,index)=>
    <tr key={book._id}>
      <th scope="row" >{index+1}</th>
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td >{book.username}</td>
      <td></td>
      <td><button onClick={()=>navigate('/home/add-book',{state:book})} className='btn btn-success accept'>Accept</button></td>
      <td><button onClick={()=>deletereq(book)} className='btn btn-danger'>Reject</button></td>
    </tr>)


    return(
        <>
        <div className="edges">
        <BooksNav name="Requested Books" />
        <div className='main'>
        {requested.length==0?<img src={require('../../css/no-data.png')} style={{width:'500px',height:'500px'}}/>:<>
        <table class="table table-hover t-edit">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Book Title</th>
      <th scope="col">Author</th>
      <th scope="col">User</th>
    </tr>
  </thead>
  <tbody>
    {requestedList}
  </tbody>
</table></>}
            </div>
            </div>
        </>
    )
}