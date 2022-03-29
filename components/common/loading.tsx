const Loading = () => {
  return (
    <>
      <div id="global-loading">
        <div id="global-loadleft"></div>
        <div id="global-loadright"></div>
        <div id="global-loadmid" >
          <div id="loadcontent">
            <div>
              <h2>LOADING...</h2>
              <p>加载过慢请开启缓存(浏览器默认开启)</p>
              <div>
                {/* <img src="/dancingkitty.gif" alt="loading" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Loading