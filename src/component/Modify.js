import React,{useState} from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';

import {
    Modal,
    Card,
    Form,
    Input,
    Button,
    DatePicker,
    TimePicker,
    Select,
    Space,
    Radio,
  } from "antd";
import { attachTypeApi } from 'antd/lib/message';

function Modify({setIsModal,isModal,openModal,posts,id,contentPost}) {
    const { confirm } = Modal;


    const [title,setTitle]=useState(contentPost.title)
    const [text,setText]=useState(contentPost.text)
    const onChangeTitle=(e)=>{
        setTitle(e.target.value)
    }

    const onChangeText=(e)=>{
      setText(e.target.value)
    }

    const showConfirm = (data) => {
        confirm({
          title: '수정하시겠습니까?',
          icon: <ExclamationCircleOutlined />,
          
      
          onOk() {
            console.log('OK');
            data[0].title=title
            data[0].text=text
            setIsModal(false)
            
          },
      
          onCancel() {
            console.log('Cancel');
          },
        });
      };



    const onSubmit=()=>{
        console.log(title)
        console.log(id)
        const a=posts.filter((p)=>{
            return p.id===id
        })
       
        showConfirm(a)
       




    }

  return (
    <Modal visible={isModal} onCancel={openModal} footer={null}>
     
      <div>
        <Form onFinish={onSubmit} layout="horizontal" size="large">
       
       
         
          <h2>수정</h2>
            <Form.Item name="title" rules={[{ required: true }]}>
              <Input
                onChange={onChangeTitle}
                placeholder={contentPost.title}
                value={contentPost.title}
                

              />
            </Form.Item>
            <Form.Item  name="text">
              <Input.TextArea 
              onChange={onChangeText}
              // style={{width:600,height:100,marginTop:10}}
              value={contentPost.text}
               placeholder={contentPost.text}/>
            </Form.Item>
          

            <Button style={{marginLeft:400}}type="primary" ghost htmlType="submit" >
              수정
            </Button>
        </Form>
      </div>
    </Modal>
  )
}

export default Modify