import React from 'react'
import {Menu,Input,Row,Col} from 'antd'
import {Link} from 'react-router-dom'


function header() {
  return (
      <div>
           <Menu mode="horizontal">
           
                <Menu.Item style={{marginLeft:10 }}>
                <Link to="/dong"><div style={{display:'flex'}}>
                <img width={70} src='https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F9d%2Ffc%2F30%2F9dfc30b15d1d55b284e5c6e98d9012df.gif&type=a340'></img
                ><h1 style={{marginTop:15,marginLeft:10}}>Twitter</h1></div></Link>

                </Menu.Item>
              
                {/* <Menu.Item>
                    검색하기
                <Input.Search enterButton style={{verticalAlign:'middle' ,marginLeft:'10px'}}/>

                </Menu.Item> */}
              


            </Menu>
      </div>
  )
}

export default header