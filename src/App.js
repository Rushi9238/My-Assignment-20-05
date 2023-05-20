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
  const [nowPage, setNowPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const [dataAPI, setDataAPI] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const api = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${nowPage}&_limit=10`);
        const respo = await api.json();
        const totalCount = api.headers.get('X-Total-Count');
        dispatch(postdata(respo))
        setTotalPages(Math.ceil(totalCount / 10));
      } catch (error) {
        console.error("Data Not fetching plaese wait or refersh the page:", error);
      }
    }
    fetchUsers();
  }, [nowPage]);

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
          setNowPage((prevPage) => Math.max(prevPage - 1, 1));
        }} disabled={nowPage === 1}>Previous</button>
        <span>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((ele) => (
            <button 
              className={ele ===nowPage?"active":"numbers"}
              key={ele}
              onClick={() => {
                setNowPage(ele);
              }}
            >
              {ele}
            </button>
          ))}
        </span>
        <button onClick={() => {
          setNowPage((prevPage) => Math.min(prevPage + 1, totalPages));
        }} disabled={nowPage === totalPages}>Next</button>
      </div>
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
