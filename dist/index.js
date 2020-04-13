"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 当前是移动或者是pc
 *
 * @export
 * @returns {boolean}
 */
function isPc() {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return false;
    }
    else {
        //说明是pc端
        return true;
    }
}
exports.isPc = isPc;
/**
 * 当前是微信浏览器
 *
 * @export
 * @returns {boolean}
 */
function isWeixn() {
    var ua = navigator.userAgent.toLowerCase();
    var uas = ua.match(/MicroMessenger/i);
    if (uas == "micromessenger") {
        return true;
    }
    else {
        return false;
    }
}
exports.isWeixn = isWeixn;
/**
 * 是否是助手
 *
 * @export
 * @returns {boolean}
 */
function isZhushou() {
    var ua = navigator.userAgent.toLowerCase();
    var uas = ua.match(/zhushou browser/i);
    if (uas == "micromessenger") {
        return true;
    }
    else {
        return false;
    }
}
exports.isZhushou = isZhushou;
/**
 * 直播
 *
 * @export
 */
function gotoLive() { }
exports.gotoLive = gotoLive;
/**
 *
 *
 * @export
 * @param {string} phoneNumber
 * @param {string} message
 */
function sendSMS(phoneNumber, message) {
}
exports.sendSMS = sendSMS;
/**
 * 获取平台
 *
 * @export
 * @returns {string}
 */
function getfrom() {
    return '';
}
exports.getfrom = getfrom;
/**
 * 解决微信支付问题
 * @param json
 * @returns {string}
 */
function configWxReferer(json) { }
exports.configWxReferer = configWxReferer;
/**
 * 图片裁剪上传（个人品牌秀）
 *
 * @param ratio：裁减比例
 */
function CropperPic(ratio) { }
exports.CropperPic = CropperPic;
/**
 * 打开pdf
 *
 * @param url
 */
function openpdf(url, title) {
}
exports.openpdf = openpdf;
/**
 * 获取版本号码
 */
function getVersion() {
    return '0.0.1';
}
exports.getVersion = getVersion;
/**
 * 通用分享本地调取显示接口
 */
function setNativeShareAble(extra) { }
exports.setNativeShareAble = setNativeShareAble;
/**
 * 课程闯关成功回调跳转页面
 */
function openQuestionDetailById(qid) { }
exports.openQuestionDetailById = openQuestionDetailById;
function refreshWebView() { }
exports.refreshWebView = refreshWebView;
function openNewWebview(_url) { }
exports.openNewWebview = openNewWebview;
/**
 * 发起定位请求，用于网页请求app地理位置信息
 */
function getLocation() { }
exports.getLocation = getLocation;
function setWebReadingInfo(webmsg) { }
exports.setWebReadingInfo = setWebReadingInfo;
function setReadingInfo(id, imgurl, isCollected, shortLink) { }
exports.setReadingInfo = setReadingInfo;
function setCanShare() { }
exports.setCanShare = setCanShare;
function startToInvite() { }
exports.startToInvite = startToInvite;
function addMenu(jsonText) { }
exports.addMenu = addMenu;
function resetMenu() { }
exports.resetMenu = resetMenu;
function setMenuDisplay(menuId) { }
exports.setMenuDisplay = setMenuDisplay;
function closeCurrentPage() { }
exports.closeCurrentPage = closeCurrentPage;
function getUid() {
    return '';
}
exports.getUid = getUid;
// 设置title
function setTitle(title) { }
exports.setTitle = setTitle;
// 设置subtitle
function setSubTitle(title) { }
exports.setSubTitle = setSubTitle;
// 支付
function success(money) { }
exports.success = success;
// 购买皮肤成功的回调
function buySuccess() { }
exports.buySuccess = buySuccess;
// 购买皮肤成功的回调
function closeWeb() { }
exports.closeWeb = closeWeb;
function startQQChat(qq) { }
exports.startQQChat = startQQChat;
// 原生微信支付
function payByWeiXin(options) { }
exports.payByWeiXin = payByWeiXin;
/*
 * 得到用户信息
 */
function getUserInfo() { }
exports.getUserInfo = getUserInfo;
function getAuthInfo() { }
exports.getAuthInfo = getAuthInfo;
/*
 * 获取手机机型信息
 */
function getDeviceMsg() {
    return '';
}
exports.getDeviceMsg = getDeviceMsg;
function share(extra) { }
exports.share = share;
/**
 * 分享一张图片
 *
 * @param extra
 */
function shareOnePicture(extra) {
}
exports.shareOnePicture = shareOnePicture;
/*
 * 启动activity
 */
function showActivity(actname, extra) { }
exports.showActivity = showActivity;
/**
 * 发起授权
 * redirect_url        string ，同意授权后跳转地址
 * platform            string , 平台类型，（优财：yc，保险岛：bxd，助手：zs，智慧魔方：zhmf）
 */
function wap_auth(redirect_url, platform) { }
exports.wap_auth = wap_auth;
/**
 * 分享
 * title      string , 分享标题
 * content    string ，分享内容
 * image      string ，图片地址
 * url        string ，跳转地址
 */
function wap_share(title, content, image, url) { }
exports.wap_share = wap_share;
/**
 * H5设置右上角菜单
 *
 * @param json
 */
function openMenu(json) { }
exports.openMenu = openMenu;
/**
 * H5隐藏右上角菜单
 */
function closeMenu() {
}
exports.closeMenu = closeMenu;
/**
 * 打个个人资料
 */
function SetBasicInfo() { }
exports.SetBasicInfo = SetBasicInfo;
/**
 * 复制
 */
function copy(json) {
}
exports.copy = copy;
/**
 * 处理右上角分享（早报分享）
 *
 * @export
 * @param {string} json
 */
function setTitleShare(json) { }
exports.setTitleShare = setTitleShare;
/**
 * 返回上一页
 */
function back() { }
exports.back = back;
/**
 *
 * 登录
 * @export
 */
function login() { }
exports.login = login;
/**
 * 直接微信分享
 *
 * @param shareData
 */
function shareWithWeChat(shareData) { }
exports.shareWithWeChat = shareWithWeChat;
function hideTab(isHide) { }
exports.hideTab = hideTab;
/**
 * 获取当天使用时长
 *
 * @return
 */
function getTodayUseDuration() {
    return 0;
}
exports.getTodayUseDuration = getTodayUseDuration;
/**
 * 显示购买文章获客弹窗
 */
function showBuyArticleServicePopup() { }
exports.showBuyArticleServicePopup = showBuyArticleServicePopup;
/**
 * 顶部标题栏高度
 *
 * @return
 */
function getTitleBarHeight() {
    return 0;
}
exports.getTitleBarHeight = getTitleBarHeight;
/**
 * 控制右上角ImageButton可见性
 *
 * @param visible：0隐藏；1可见
 */
function setRightTopImageBtnVisible(visible) { }
exports.setRightTopImageBtnVisible = setRightTopImageBtnVisible;
