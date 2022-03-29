
import sysConfig from './sysConfig'
let servicePath = {
    getArticleList: sysConfig.baseUrl + 'default/getArticleList',  //  首页文章列表接口
    getArticleById: sysConfig.baseUrl + 'default/getArticleById/',  // 文章详细页内容接口 ,需要接收参数
    getTypeInfo: sysConfig.baseUrl + 'default/getTypeInfo',         // 文章分类信息
    getFriendLink: sysConfig.baseUrl + 'default/getFriendLink',         // 文章友情链接
    getHeaderInfo: sysConfig.baseUrl + 'default/getHeaderInfo',         // 文章分类信息
    getListById: sysConfig.baseUrl + 'default/getListById/',         // 根据类别ID获得文章列表  
}
export default servicePath;