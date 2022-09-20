import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Dong from './pages/dong'
import 'antd/dist/antd.css'
import Header from './component/header';
import {Col,Row} from 'antd'
import UserProfile from './component/userProfile';
import {useState} from 'react'
import LoginForm from './component/LoginForm';
function App() {
const [abc,setAbc]=useState(false)

const [name,setName]=useState('')
  return (

    <BrowserRouter>
    <div className="App">

    <Header></Header>
    <Row>
      <Col span={6}>
       {abc?<UserProfile setAbc={setAbc} name={name} setName={setName}/>:<LoginForm  setAbc={setAbc}name={name} setName={setName}/>

       } 
      </Col>
      <Col span={18}>
        <Routes>
         
          <Route exact path='/dong' element={<Dong name={name}></Dong>}>
          </Route>
          
        </Routes>
      </Col>
    
    </Row>
     
    </div>
    </BrowserRouter>
  );
}


export default App;
