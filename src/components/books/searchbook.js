import { AuthContext } from "../../context/authProvider";
import { useContext } from "react";
import { Card } from "../cards";
import { BooksNav } from "./bookNav";
import { Bars, Oval, TailSpin } from  'react-loader-spinner'

export const SearchBook=()=>{
    const{results} = useContext(AuthContext);

    const searchList = results.map((book)=>
    <Card key={book._id}
    image={book.image}
            name={book.name}
            author={book.author}
            isbn={book.isbn}
            />)
    return(
        <>
        <div className="edges">
        <BooksNav name="Books" />
        <div className='main' style={{boxShadow: '0 0 11px rgba(33,33,33,.2)'}}>
        {results.length==0?<TailSpin color="#00BFFF" height={80} width={80} />:
            <div className="row search">{searchList}</div>
        }
            </div>
            </div>
        </>
    )
}