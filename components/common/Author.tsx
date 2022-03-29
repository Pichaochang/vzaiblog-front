import { Avatar, Divider } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'
import css from '../../styles/css-module/author.module.sass'
const Author = () => {
  return (
    <div className={`${css['author-container']} comm-box`}>
      <div>
        {' '}
        <Avatar
          size={100}
          src='/static/images/header/v.jpg'
        />
      </div>
      <div className={css['author-introduction']}>
        <div><span className='vzai-profession'></span> WEB DEVELOPER</div>
        <div><span className='vzai-localtion'></span> Fu Zhou</div>
        <span>Great works are performed not by strengh, but by perseverance</span>
        <Divider>社交账号</Divider>
        <GithubOutlined className={css["account"]} />
        <QqOutlined className={css["account"]} />
        <WechatOutlined className={css["account"]} />
      </div>
    </div>
  )
}

export default Author
