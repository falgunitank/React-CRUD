import './App.css';
import ListEmployee  from './components/ListEmployee';
import CreateEmployee from './components/CreateEmployee';
import { BrowserRouter as Router, Route , Routes }
    from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
            <Route path='/' element ={<ListEmployee />}/>
            <Route path = "/employees" element = {ListEmployee}></Route>
            <Route path = "/add-employee/:id" element = {CreateEmployee}></Route>
            {/* <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route> */}
          </Routes>
       </Router>
    </div>
  );
}

export default App;
