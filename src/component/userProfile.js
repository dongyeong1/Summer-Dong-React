import React from 'react'
import {Card,Avatar,Button} from 'antd'


function userProfile({setAbc,name}) {
  return (
    <div>
    <Card
       actions={[
        <div key="twit">게시물수<br/>1<br/></div>,
        <div key="following">팔로잉<br/>2</div>,

        <div key="follower">팔로워<br/>3</div>

    ]}  
 
    >
        <Card.Meta
        avatar={<Avatar>{name[0]}</Avatar>}
        title={name}
        />
    <Button onClick={()=>setAbc(false)} > 로그아웃</Button>

        
    </Card>
    
</div>
  )
}

export default userProfile