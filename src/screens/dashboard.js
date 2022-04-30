import '../css/dashboard.css';
import { BooksNav } from '../components/books/bookNav';
import { AuthContext } from '../context/authProvider';
import {InfoCard} from '../components/infocard';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';




import { useContext, useEffect,useState } from 'react';
export const Dashboard=()=>{
    const {token,role,getFine,fine,issue,returned,getIssueBooks,getReturnBooks} = useContext(AuthContext);
    
    useEffect(async()=>{
        // await getBooks('Entertainment');
        // await getBooks('Humour');
        // await getBooks('Biography');
        // await getBooks('Poetry-Drama');
        // await getBooks('Art-Photography');
        // await getRequestedBooks();
        getFine();
        getReturnBooks();
        getIssueBooks();
    },[])
    
    return(
        <>
       
        <div className="edges">
        <BooksNav name="Dashboard" />
      
             <div className='row'>
             <InfoCard style={{height:'20px'}} 
             heading='Books Issued'
             color='linear-gradient(195deg,#ec407a,#d81b60)'
              icon={<LibraryAddCheckIcon  />}
              data={issue.length}
              
              />
             <InfoCard heading='Books Returned'
             color='linear-gradient(195deg,#66bb6a,#43a047)'
              icon={<ThumbUpAltIcon  />}
             data={returned.length}
              />
                <InfoCard heading='Fine' 
             color='linear-gradient(195deg,#42424a,#191919)'
              icon={<CurrencyRupeeIcon/>}
              data={fine}
              />
             </div>
             {/* <h1>h</h1>
             <h1>{role}</h1>
             <h1>{fine}</h1> */}
             {/* <h1>{token}</h1> */}

        
        </div>
        </>
    )
}