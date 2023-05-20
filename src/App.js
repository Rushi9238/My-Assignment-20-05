import React,{useState,useEffect} from 'react'
import './App.css';
import Header from './Components/Header';
import { postdata } from './Redux/ReducerSlice';
import { useDispatch } from 'react-redux';
import HomeCotaine from './Components/HomeCotaine';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import CommentsPage from './Components/CommentsPage';


function App() {
  const dispatch=useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const [dataAPI, setDataAPI] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`);
        const data = await res.json();
        const totalCount = res.headers.get('X-Total-Count');
        dispatch(postdata(data))
        setTotalPages(Math.ceil(totalCount / 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchUsers();
  }, [currentPage]);

  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
      <Routes>
        <Route path='/' element={<HomeCotaine/>} />
        <Route path='/comment/:id' element={<CommentsPage/>}/>
      </Routes>
     <div className='paginations'>
        <button onClick={() => {
          setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
        }} disabled={currentPage === 1}>Previous</button>
        <span>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((ele) => (
            <button 
              className={ele ===currentPage?"active":"numbers"}
              key={ele}
              onClick={() => {
                setCurrentPage(ele);
              }}
            >
              {ele}
            </button>
          ))}
        </span>
        <button onClick={() => {
          setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
        }} disabled={currentPage === totalPages}>Next</button>
      </div>
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
