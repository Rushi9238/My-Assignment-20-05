import React from 'react'
import { useSelector } from 'react-redux'
import '../CSS-files/HomeCotaine.css'
import { useNavigate } from 'react-router-dom'
const HomeCotaine = () => {
    const navigate=useNavigate()

    const post=useSelector(select=>select.ReducerSlice.data)
    console.log(post);
  return (
    <>
    <main>
    <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {post?.map((ele) => (
            <tr onClick={() => {
                navigate(`/Comments/${ele.userId}`);
              }} key={ele.id}>
              <td>{ele.userId}</td>
              <td>{ele.id}</td>
              <td>{ele.title}</td>
              <td>{ele.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      

{/* 



            isLoading ? (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          ) : 
 */}
    </main>
    </>
  )
}

export default HomeCotaine