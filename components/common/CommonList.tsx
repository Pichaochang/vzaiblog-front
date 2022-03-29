import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { List } from 'antd'
import Link from 'next/link'
import { marked } from 'marked'
import hljs from 'highlight.js'
const renderer = new marked.Renderer()
marked.setOptions({
  renderer: renderer,
  gfm: true,
  pedantic: false,
  sanitize: false,
  // tables: true,
  breaks: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  highlight: function (code) {
    return hljs.highlightAuto(code).value
  },
})
interface item {
  typeId: string,
  id: string,
  month: string,
  day: string,
  title: string,
  addTimeFormat: string,
  typeName: string,
  introduce: string,
  updateTimeFormat: string,
  view_count: String
}
const handleClick = (item: item) => {
  Router.push('/list?id=' + item.typeId)
}
const CommonList  = (props: any) => {
  
  const [mylist, setMylist] = useState(props.list.data)
  useEffect(() => {
    setMylist(props.list.data)
  }, [props.list.data])
  return (
    <>
      <div className="list-container">
        <List
          itemLayout="vertical"
          dataSource={mylist}
          renderItem={(item: item) => (
            <List.Item style={{ border: 'none', 'padding': '6px 0' }}>
              <div className='list-item' key={item.id}>
                <div className="list-title">
                  <Link
                    href={{ pathname: '/detail', query: { id: item.id } }}
                  >
                    <a className="list-title-a">{item.title}</a>
                  </Link>
                </div>
                {/* <img  className='list-img' src="https://picture.cco.vin/pic/rmimg?time=-50128.54545454545" alt=""></img> */}
                <div
                  className="list-context"
                  dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}
                ></div>
                <div className='list-dashed' />
                <div className='list-item-edit-time'>
                  <span className='vzai-calendar'></span>修改于 {item.updateTimeFormat}
                </div>
                {/* <Link href={{ pathname: '/detail', query: { id: item.id } }} passHref>
                  <div className={"list-item-read-btn"}>阅读全文</div>
                </Link> */}
              </div>
            </List.Item>
          )}
        />
      </div>
    </>
  )
}
export default CommonList
