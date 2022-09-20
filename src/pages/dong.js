import { Button,Form,Input,Card,Modal,Avatar } from 'antd';

import { ExclamationCircleOutlined } from '@ant-design/icons';

// import Card from 'antd/lib/card/Card';
import { useEffect, useState } from 'react';
import Modify from '../component/Modify';
import Modifyc from '../component/contentModify';
import { changeConfirmLocale } from 'antd/lib/modal/locale';


function Dong({name}){
  

    const [title,setTitle]=useState('')
    const [text,setText]=useState('')
    

    const [postId,setPostId]=useState()
    const [contentPost,setContentPost]=useState({})
   
    const [posts,setPost]=useState([
        {id:'1',text:'안녕하세요',title:'게시물1'},
        {id:'2',text:'반갑습니다',title:'게시물2'},
        {id:'3',text:'날씨가좋네요',title:'게시물3'}

    ])
    const { confirm } = Modal;
    const showConfirm = (data) => {
        confirm({
          title: '삭제하시겠습니까?',
          icon: <ExclamationCircleOutlined />,
          
      
          onOk() {
            console.log('OK');
            removePost(data);

          },
      
          onCancel() {
            console.log('Cancel');
          },
        });
      };

    const removePost=(id)=>{
        setPost(posts.filter(p=>{
          return p.id!==id;
        }))
    
      }
      const addPost=(post)=>{
        post.id=Date.now()
        console.log(post)

        setPost([
          ...posts,post
        ])
        setTitle('')
        setText('')
    
      }

      const [isModal, setIsModal] = useState(false);
      const [contentModal,setContentModal]=useState(false)


      const showModal = (Id) => {
        const a=posts.find((p)=>{
          return p.id===Id
        })
        setContentPost(a)
        setPostId(Id)
        setIsModal(true);
      };
      const showContentModal = (Id) => {
        setPostId(Id)
        const a=posts.find((p)=>{
          return p.id===Id
        })
        setContentPost(a)

        setContentModal(true);
      };

      const openModal = (Id) => {
        
        setIsModal((prev) => !prev);
        console.log(isModal);
      };
      const openContentModal = () => {
        setContentModal((prev) => !prev);
      };

      const titleChange=((e)=>{
        setTitle(e.target.value)
      })
      const textChange=((e)=>{
        setText(e.target.value)
      })
     
    return (
<div style={{marginTop:10}}>       
    <Card style={{position:'relative',width:900 ,marginBottom:30,marginLeft:30,backgroundColor:'lightGray'}} >
     <Form style={{margin:'10px 0 20px' ,right:120}}  onFinish={addPost}>
        
        <Form.Item
            name="title"
          >
         
            <Input  id='title' value={title} placeholder='제목' onChange={titleChange} style={{width:600,height:30}}>
            </Input>
       
          </Form.Item>

          <Form.Item  name="text">
        

          <Input.TextArea id='text' value={text} onChange={textChange}  style={{width:600,height:100}} placeholder='내용' />
          </Form.Item>
            
       
           
       <Button type="primary"  htmlType="submit" style={{width:100,position:'absolute',height:50,bottom:50,right:30}}>작성</Button>
       
       </Form>
      </Card>
      <div >
          {posts.map((p)=>(
              <Card hoverable={true} size='small' style={{width: 800 ,height:100 ,position:'relative',left:80,marginBottom:10}}>
                <div style={{display:'flex', position:'absolute', marginTop:20,width:500}}>
                    <Card.Meta avatar={<Avatar>{name[0]}</Avatar>}/>
                    <div style={{left:70,whiteSpace:'nowrap',position:'absolute',fontSize:20}}>{p.title}</div>
                </div>
             
                  {/* <p style={{marginRight:1000,whiteSpace:'nowrap'}}>{p.text}</p> */}
                  <div style={{display:'flex', position:'absolute',top:60,left:100}} >
                    
                <Modify
                 contentPost={contentPost}
                    posts={posts}
                    isModal={isModal}
                    openModal={openModal}
                    setIsModal={setIsModal}
                    id={postId}
                />
                <Modifyc
                    contentPost={contentPost}
                    contentModal={contentModal}
                    openContentModal={openContentModal}
                    setContentModal={setContentModal}
                    id={postId}
                 />
                  <Button type="primary" ghost style={{marginLeft:450}} onClick={()=>showContentModal(p.id)}>내용보기</Button>
                  <Button  type="primary"  ghost style={{marginLeft:10,}} onClick={()=>showModal(p.id)}>수정</Button>
                  <Button type="danger" ghost style={{marginLeft:10}} onClick={()=>showConfirm(p.id)} >삭제</Button>
                    
                  </div>      
                    </Card>
              
              )
              )
              }
              
      </div>
        
      </div>

    )
}

export default Dong