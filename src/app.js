import React,{useState}  from 'react';
// import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
// import Home from './pages/CityList';
// import CityList from './pages/CityList';
function Example() {
     const [count, setCount] = useState(0);
     return (
         <div>
             <p>you xl {count}</p>
             <button onClick={()=>setCount(count+1)}>click me </button>
         </div>
     )
  }
class App extends  React.Component {
    render() {
        return <Example>djsjdksd</Example>
    }
}
 

export default App  