import React, { useState, useEffect } from "react";
import axios from "axios";
import servicePath from "@/config/api";

import Header from "@/components/Header";
import Author from "@/components/common/Author";
import Tags from "@/components/common/tags";
import FriendLink from "@/components/common/friendLink";
import CommonList from "@/components/common/CommonList";

const ArticleList = (list:any) => {
  const [mylist, setMylist] = useState([]);
  const [articleId, setArticleId] = useState('');
  useEffect(() => {
    setMylist(list);
    setArticleId(list.id);
  }, [list, list.id]);
  return (
    <section className="comm-bigbox">
      <div className="comm-bigbox-header">
        <Header />
      </div>
      <div className="comm-container">
        <div className="comm-container-main">
          <section className="comm-container-left">
            <CommonList list={mylist} />
          </section>
          <aside className="comm-container-right">
            <Author />
            <Tags />
            <FriendLink />
          </aside>
        </div>
      </div>
      <div>
        {/* <Gaffix articleId={articleId}></Gaffix> */}
      </div>
    </section>
  );
};
ArticleList.getInitialProps = async (context: any) => {
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    axios(servicePath.getListById + id).then((res) =>
      resolve({ ...res.data, id })
    );
  });
  return await promise;
};
export default ArticleList;
