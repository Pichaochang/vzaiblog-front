import React, { useState, useEffect } from 'react'
import { Tag } from 'antd'
import axios from 'axios'
import servicePath from '@/config/api'
import css from '../../styles/css-module/tags.module.sass'
const FriendLink = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getFriendLink).then((res) => {
        setNavArray(res.data.data)
        return res.data.data
      })
      setNavArray(result)
    }
    fetchData()
  }, [])
  //跳转到列表页
  const handleClick = (item:any) => {
    window.open(item.address)
  }
  return (
    <div className={css["tags"]}>
      <div className={css['tags-title']}>友情链接</div>
      <div className={css['tags-content']}>
        {navArray.map((item:any) => {
          return (
            <Tag color={item.color} className={css['tags-item']} onClick={() => handleClick(item)} key={item.id}>{item.addressName}</Tag>
          )
        })}
      </div>
    </div>
  )
}

export default FriendLink
