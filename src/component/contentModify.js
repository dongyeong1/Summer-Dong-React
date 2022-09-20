import React,{useEffect, useState}from 'react'
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
function contentModify({setContetnModal,openContentModal,contentModal,contentPost,id}) {
    const { confirm } = Modal;



    const showConfirm = (data) => {
        confirm({
          title: '수정하시겠습니까?',
          icon: <ExclamationCircleOutlined />,
          
      
          onOk() {
            console.log('OK');
            
            
          },
      
          onCancel() {
            console.log('Cancel');
          },
        });
      };



   

  return (
    <Modal title={contentPost.title} visible={contentModal} onCancel={openContentModal} footer={null}>
          <p>{contentPost.text}</p>
    </Modal>
  )
}

export default contentModify