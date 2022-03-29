import React from "react";
import css from "../../styles/css-module/footer.module.sass";
class Footer extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <div className={css["footer-div"]}>
        <span className={css["footer-div-span"]}>©2019 - 2020 vzai.top</span>
        <span className={css["footer-div-span"]}>浙ICP备20005379号-1</span>
      </div>
    );
  }
}

export default Footer;
