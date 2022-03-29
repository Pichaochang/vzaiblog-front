import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { Tag } from 'antd'
import axios from 'axios'
import servicePath from '@/config/api'
import css from '../../styles/css-module/tags.module.sass'
interface item {
  id: string,
  color: string,
  typeName: string,
}
const Tags = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then((res) => {
        setNavArray(res.data.data)
        return res.data.data
      })
      setNavArray(result)
    }
    fetchData()
  }, [])
  //跳转到列表页
  const handleClick = (item: item) => {
    Router.push('/list?id=' + item.id)
  }
  return (
    <div className={css.tags}>
      <div className={css['tags-title']}>标签目录</div>
      <div className={css['tags-content']}>
        {navArray.map((item: item) => {
          return (
            <Tag color={item.color} className={css['tags-item']} onClick={() => handleClick(item)} key={item.id}>{item.typeName}</Tag>
          )
        })}

      </div>
    </div>
  )
}

export default Tags
