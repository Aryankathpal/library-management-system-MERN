import { BooksNav } from "../components/books/bookNav"
import { AuthContext } from "../context/authProvider";
import { useContext,useEffect } from "react";

export const Returned=()=>{
    const {getReturnBooks,returned} = useContext(AuthContext);


    useEffect(async()=>{
        await getReturnBooks();
      })

      const returnList = returned.map((book,index)=>
      <tr key={book._id}>
     <th scope="row" >{index+1}</th>
     <td>{book.isbn}</td>
     <td>{book.Name}</td>
     <td>{book.author}</td>
     <td>{book.IssuedOn}</td>
     <td>{book.returnedOn}</td>

   </tr>)
      
      return(
        <div className="edges">
       <BooksNav name="Returned Books" />
       <div className='main'>
         {returned.length==0?<img src={require('../css/no-data.png')} style={{width:'500px',height:'500px'}}/>:<>
       <table class="table table-hover t-edit">
 <thead>
   <tr>
     <th scope="col">#</th>
     <th scope="col">ISBN</th>
     <th scope="col">Title</th>
     <th scope="col">Author</th>
     <th scope="col">Issue date</th>
     <th scope="col">Return date</th>
   </tr>
 </thead>
 <tbody>
  {returnList}
 </tbody>
</table></>}
</div>
       </div>
   )
}


    
    


    