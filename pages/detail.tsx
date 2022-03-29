import React from "react";
import Router from "next/router";
import { Affix, Breadcrumb } from "antd";
import axios from "axios";
import servicePath from "@/config/api";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import {marked} from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Tocify from "@/components/common/tocify";
import Header from "@/components/Header";
import Author from "@/components/common/Author";
const renderer = new marked.Renderer();

marked.setOptions({
  renderer: renderer, // 定义的Renderer渲染出自定义的格式
  gfm: true, // 启动类似Github样式的Markdown,填写true或者false
  pedantic: false, //  只解析符合Markdown定义的，不修正Markdown的错误。填写true或者false
  sanitize: false, //  原始输出，忽略HTML标签，这个作为一个开发人员，一定要写flase
  // tables: true, //  支持Github形式的表格，必须打开gfm选项
  breaks: false, // 支持Github换行符，必须打开gfm选项，填写true或者false
  smartLists: true, // 优化列表输出，这个填写ture之后，你的样式会好看很多，所以建议设置成ture
  smartypants: false, // 高亮显示规则 ，这里我们将使用highlight.js来完成
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
});

const handleClick = (item: any) => {
  Router.push("/list?id=" + item.typeId);
};
const Detail = (item: any) => {
  const tocify = new Tocify();
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  let html = marked(item.article_content);
  const Ntocify = tocify && tocify.render();
  return (
    <section className="comm-bigbox">
      <div className="comm-bigbox-header">
        <Header></Header>
      </div>
      <div className="detail-container">
        <section className="detail-container-view">
          <div className="main-area comm-main comm-box">
            <div className="area-left">
              <div className="detail">
                <div className="detail-title">
                  <a className="detail-title-a">{item.title}</a>
                </div>
                <div className="list-icon center">
                  <span>
                    <CalendarOutlined />
                    发布时间：{item.addTimeFormat}
                  </span>
                  <span>
                    <FolderOutlined />
                    <span
                      onClick={() => handleClick(item)}
                      style={{ cursor: "pointer" }}
                    >
                      {item.typeName}
                    </span>
                  </span>
                  <span>
                    <FireOutlined />
                    {item.view_count}
                  </span>
                  <span>
                    <CalendarOutlined />
                    更新时间：{item.updateTimeFormat}
                  </span>
                </div>

                <div
                  className="detailed-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                ></div>
              </div>
            </div>
            <aside className="area-right">
              <Author />
              <Affix offsetTop={20}>
                <div className="toc-container comm-box">
                  <div className="toc-list">{Ntocify}</div>
                </div>
              </Affix>
            </aside>
          </div>
        </section>
      </div>
      <div className="comm-bigbox-footer">
        {/* <Footer></Footer> */}
      </div>
      <div>
        {/* <Gaffix></Gaffix> */}
      </div>
    </section>
  );
};
Detail.getInitialProps = async (context:any) => {
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleById + id).then((res) => {
      resolve(res.data.data[0]);
    });
  });

  return await promise;
};
export default Detail;
