import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./screens/homepage";
import LoginCard from "./screens/login";
import SignupCard from "./screens/Signup";
import { AuthProvider } from "./context/authProvider";
import {ToastProvider} from 'react-toast-notifications';
import { AuthContext } from "./context/authProvider";
import { useContext } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";
import { Home } from "./screens/home";
import { Dashboard } from './screens/dashboard';
import {Books } from './screens/books';
import {Issued } from './screens/issued';
import {Returned } from './screens/returned';
import {NotReturned } from './screens/notReturned';
import { RequestBook } from "./screens/requestBook";

import { BookDetail } from "./screens/bookdetail";
import {SearchBook }from "./components/books/searchbook";
import {AddBook} from "./screens/admin/addbook";
import { RequestedBooks } from "./screens/admin/requestedbooks";



function App() {
  const{role} = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/login" element={<LoginCard />} />
            <Route path="/signup" element={<SignupCard />} />
          </Route>
          <Route path="/home" element={<Home/>}>
          <Route path="/home" element={<Navigate replace to='/home/dashboard'/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="books" element={<Books />} />
          <Route path="books/book-details" element={<BookDetail/>} />
          <Route path="books/search" element={<SearchBook/>} />
          <Route path="issued" element={<Issued />} />
          <Route path="returned" element={<Returned />} />
          <Route path="request-book" element={<RequestBook />} />
          
          
          {role==='admin'?
          <>
          <Route path="/home" element={<Navigate replace to='/home/books'/>} />
          <Route path="add-book" element={<AddBook />} />
          <Route path="requested-books" element={<RequestedBooks />} />

          </>:
          <Route path='add-book' element={<Navigate replace to='/login' />}/>
          }
          </Route>
            
        </Routes>
      </Router>
    </div>
  );
}

function App1(){
  return(
    <AuthProvider >
      <ToastProvider placement="bottom-right" autoDismiss={true}><App /></ToastProvider> 
    </AuthProvider>
  )
}

export default App1;
