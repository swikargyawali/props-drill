import Card from "./components/Card";
import User from "./components/User";

import "./index.css";
const arr=[
  {user:"Swikar",
  age:30

  },
  {user:"Swikar",
    age:20

  },
  {user:"Aman",
    age:24
  }];

arr.map(function(elem){
  console.log(elem.age);
})



const App=()=>{
  return(
    <div className="parent">
      {/* arr[0], arr[1], arr[2] takes time and space both , so we use map and pass elem ==> map is loop simply*/}

      {/* {arr.map(function(elem){
        return <h1>{elem/2}</h1>;
      })} */}
    </div>
  )
}

export default App;