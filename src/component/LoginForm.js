import React,{useState} from 'react'
import { Form,Input,Button,Card } from 'antd';
import {Link} from 'react-router-dom'



function LoginForm({setAbc,name,setName}) {

const [password,setPassword]=useState('')

const onChangeName=(e)=>{
  setName(e.target.value)
}
const onChangePassword=(e)=>{
  setPassword(e.target.value)
}

const onSubmit=()=>{
  console.log(name[0])
  setAbc(true)
}

  return (
  <Card>
    <Form onFinish={onSubmit} >
    <div>
        <label htmlFor='user-email'>이름 </label>
        <br></br>
        <Input onChange={onChangeName} name="user-email" value={name} required></Input>
    </div>
    <div>
        <label htmlFor='user-password'>비밀번호 </label>
        <br></br>
        <Input name="user-password"onChange={onChangePassword}  type="password" value={password}  required></Input>
    </div> 
    <div style={{marginTop:'10px'}}>
        <Button type="primary" htmlType='submit'  >로그인</Button>
        <Link to="/signup"><a><Button>회원가입</Button></a></Link>
    </div>
    </Form>
    </Card>
  )
}

export default LoginForm