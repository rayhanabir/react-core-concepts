import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['razzak','jashim', 'manna', 'alomgor', 'salman Shah']
  const friends =[
    {name:'shamim',id:'1'},
    {name:'shakib', id: '2'},
    {name:'mamun',id: '3'},
    {name:'Ibrahim', id: '4'}
  ]
  
  return (
    <div className="App">
      <header className="App-header">
      {
        friends.map(friend => <Person friend ={friend}></Person>)
      }
      <Counter></Counter>
      <Users></Users>
       
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count+1)
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={ () => setCount(count+1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
//Api in React:
function Users (){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res =>res.json())
    .then(data =>setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic User : {users.length}</h3>
     <ul>
       {
         users.map(user=><li>{user.title}</li>)
       }
     </ul>
    </div>
  )
}


function Person(props){
  const personStyle = {
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
 
  return (
          <div style={personStyle}>
            <h2>{props.friend.name}</h2>
            <h4>{props.friend.id}</h4>
            <button>Add Me</button>
        </div>
  )
}

export default App;
