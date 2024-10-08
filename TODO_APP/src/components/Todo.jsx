import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchData } from '../action'

const Todo = ({data,loading,error,fetchData}) => {
  useEffect(()=>{
    fetchData()

  },[])
  return (
    <>
    <div>Todo</div>
    <ul>
      {data.map((row)=>(
        <li>{row.title}</li>
      ))}
    </ul>
    </>
  )
}
const mapStateToProps=(state)=>({
  data:state.data,
  loading:state.loading,
  error:state.error
})

export default connect(mapStateToProps,{fetchData}) (Todo)















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { List, ListItem, ListItemText, Container, Typography, CircularProgress, TextField } from '@mui/material';

// const Todo = () => {
//   const [todos, setTodos] = useState([]);


//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/todos')
//       .then((response) => {
//         setTodos(response.data); 
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError('Error fetching data'); 
//         setLoading(false);
//       });
//   }, []);

  


// //return displaysss




//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Todo List
//       </Typography>
//       <List>
//         {todos.map((todo) => (
//           <ListItem key={todo.id}>
//             <ListItemText primary={todo.id} />
//             <TextField id="outlined-basic" label="Outlined" value={todo.title} variant="outlined" /><br />
//             {/* <ListItemText primary={todo.title} /> */}
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default Todo;





// // import { TextField } from '@mui/material';
// // import axios from 'axios';
// // import React from 'react';


// // function Todo() { 
// //     const [todos, setTodos] = useState([]);


// //   useEffect(() => {
// //     axios
// //       .get('https://jsonplaceholder.typicode.com/todos')
// //       .then((response) => {
// //         setTodos(response.data); 
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         setError('Error fetching data'); 
// //         setLoading(false);
// //       });
// //   }, []);
 
// //   return (
// //     <>
// //       <div><h2>Todo</h2></div>
     
// //         <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br />
// //         <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br />
// //         <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br />
    
// //     </>
// //   );
// // }

// // export default Todo;









