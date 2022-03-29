import React, { useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
interface state {
  perent: number,
  articleId: string,
  timer: any
}
class Gaffix extends React.Component {
  public timer:any
  public state:state
  constructor(props:any) {
    super(props);
    this.state = {
      perent: 0,
      articleId: props.articleId,
      timer: null
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.computeHeight.bind(this));
    this.timer = setTimeout(() => {
      this.computeHeight();
    }, 1000);
  }
  shouldComponentUpdate(nextProps:state) {
    if (nextProps.articleId == this.state.articleId) {
      return false;
    }
    return true;
  }
  componentDidUpdate(nextProps:any) {
    if (nextProps.articleId !== this.state.articleId) {
      // this.computeHeight();
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  computeHeight() {
    // 页面总高
    const dom: HTMLElement = document.getElementById("__next") || document.createElement('div')
    const totalH: any = dom.scrollHeight;
    // 可视高
    const clientH = window.innerHeight || document.documentElement.clientHeight;
    // 计算有效高
    const validH = totalH - clientH;
    // 滚动条卷去高度
    const scrollH = document.documentElement.scrollTop;
    // 百分比
    let result:number|string = ((scrollH / validH) * 100).toFixed(0);
    if (totalH - clientH <= 4) {
      result = 100;
    }
    this.setState({
      perent: result,
    });
  }
  handleAnchor() {
    const dom: HTMLElement = document.getElementById("app") || document.createElement('div')
    dom.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    return (
      <div className="gaffix">
        <p
          className="gaffix-anchor"
          onClick={() => {
            this.handleAnchor();
          }}
        >
          {/* {this.state.perent} */}
          <ArrowUpOutlined />
        </p>
      </div>
    );
  }
}
export default Gaffix;
