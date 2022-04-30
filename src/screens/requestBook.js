import { BooksNav } from "../components/books/bookNav";
import "../css/requuestBook.css";
import { AuthContext } from "../context/authProvider";
import { useContext ,useState} from "react";
import { useToasts } from 'react-toast-notifications';

export const RequestBook = () => {
  const{requestbook} = useContext(AuthContext)

  const[names,setNames]=useState('');
  const[author,setAuthor]=useState('');
  const { addToast } = useToasts();

  const handleReq=async(props)=>{
    props.preventDefault();
    if(names=='' || author=='')addToast('Please fill all the details', { appearance: 'warning' });
    else{
    requestbook(names,author)
    addToast('Book requested successfully', { appearance: 'success' });
    }
  }

  return (
    <>
      <div className="edges">
        <BooksNav name="Request Book" />
        <div className="main">
          {/* <div className='request-form'> */}
          <form onSubmit={handleReq} className="req-form">
            <div class="row g-3 align-items-center">
              <div class="col-auto">
                <label for="bookName" class="col-form-label bookLabel">
                  Book Name
                </label>
              </div>
              <div class="col-auto">
                <input
                  type="text"
                  id="bookName"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                  onChange={(e)=>setNames(e.target.value)}
          value={names}
                />
              </div>
              <div class="row g-3 align-items-center">
                <div class="col-auto">
                  <label for="authorName" class="col-form-label bookLabel">
                    Author's Name
                  </label>
                </div>
                <div class="col-auto">
                  <input
                    type="text"
                    id="authorName"
                    class="form-control"
                    aria-describedby="passwordHelpInline"
                    onChange={(e)=>setAuthor(e.target.value)}
          value={author}
                  />
                  
                </div>
              </div>
              {/* <div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="isbn" class="col-form-label">ISBN No.</label>
  </div>
  <div class="col-auto">
    <input type="password" id="isbn" class="form-control" aria-describedby="passwordHelpInline" />
  </div>
  </div> */}
            </div>
            <button type="submit" class="btn btn-primary submitBtn" style={{backgroundColor:'#FF725E',borderColor:'#FF725E'}}>
              Submit
            </button>
            </form>
                      <div className='request-form'>

            <img className='reqbook' src={require('../css/reqbook.png')} />

          </div>

        </div>
      </div>
      
    </>
  );
};
