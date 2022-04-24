import '../css/card.css';
import { AuthContext } from '../context/authProvider';
import { useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
export const Card=(props)=>{
  const navigate = useNavigate();
    return(
      <>
      <div class="card" onClick={()=>{
        navigate('/home/books/book-details',{state:props})
      }}>
         <img src={props.image} class="card-img-top" style={{height:'11rem'}}/>
         <div class="card-body">
         <p class="card-title" style={{fontWeight:'bold'}}>{props.name}</p>
         <p class="card-text" style={{color:'#616161'}}>{props.author}</p>
         </div>
        </div>
      
      </>
    )
}