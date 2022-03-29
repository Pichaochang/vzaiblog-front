import type { NextPage } from 'next'
import  React, { useState } from "react";
import axios from "axios";
import servicePath from "@/config/api";

import Header from "@/components/Header";
import Author from "@/components/common/Author";
import Tags from "@/components/common/tags";
import FriendLink from "@/components/common/friendLink";
import CommonList from "@/components/common/CommonList";
// import Gaffix from "@/components/common/Gaffix";
// import Footer from "@/components/common/Footer";
const Home: NextPage = (list:any) => {
  const [mylist, setMylist] = useState(list);
  return (
    <section className="comm-bigbox">
      <div className="comm-bigbox-header">
        <Header />
      </div>
      <div className="comm-container">
        <div className="comm-container-main">

          <section className="comm-container-left">
            <div className="list-header">最新日志</div>
            <CommonList list={mylist} />
          </section>
          <aside className="comm-container-right">
            <Author />
            <Tags />
            <FriendLink />
          </aside>
        </div>
      </div>

      <div className="comm-bigbox-footer">
        {/* <Footer /> */}
      </div>
      <div>
        {/* <Gaffix></Gaffix> */}
      </div>
    </section>
  );
}
Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then((res) => {
      resolve({ ...res.data, id: new Date().getTime() });
    });
  });

  return await promise;
};

export default Home
