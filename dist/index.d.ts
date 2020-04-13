/**
 * 当前是移动或者是pc
 *
 * @export
 * @returns {boolean}
 */
export declare function isPc(): boolean;
/**
 * 当前是微信浏览器
 *
 * @export
 * @returns {boolean}
 */
export declare function isWeixn(): boolean;
/**
 * 是否是助手
 *
 * @export
 * @returns {boolean}
 */
export declare function isZhushou(): boolean;
/**
 * 直播
 *
 * @export
 */
export declare function gotoLive(): void;
/**
 *
 *
 * @export
 * @param {string} phoneNumber
 * @param {string} message
 */
export declare function sendSMS(phoneNumber: string, message: string): void;
/**
 * 获取平台
 *
 * @export
 * @returns {string}
 */
export declare function getfrom(): string;
/**
 * 解决微信支付问题
 * @param json
 * @returns {string}
 */
export declare function configWxReferer(json: string): void;
/**
 * 图片裁剪上传（个人品牌秀）
 *
 * @param ratio：裁减比例
 */
export declare function CropperPic(ratio: number): void;
/**
 * 打开pdf
 *
 * @param url
 */
export declare function openpdf(url: string, title: string): void;
/**
 * 获取版本号码
 */
export declare function getVersion(): string;
/**
 * 通用分享本地调取显示接口
 */
export declare function setNativeShareAble(extra: string): void;
/**
 * 课程闯关成功回调跳转页面
 */
export declare function openQuestionDetailById(qid: number): void;
export declare function refreshWebView(): void;
export declare function openNewWebview(_url: string): void;
/**
 * 发起定位请求，用于网页请求app地理位置信息
 */
export declare function getLocation(): void;
export declare function setWebReadingInfo(webmsg: string): void;
export declare function setReadingInfo(id: string, imgurl: string, isCollected: number, shortLink: string): void;
export declare function setCanShare(): void;
export declare function startToInvite(): void;
export declare function addMenu(jsonText: string): void;
export declare function resetMenu(): void;
export declare function setMenuDisplay(menuId: string): void;
export declare function closeCurrentPage(): void;
export declare function getUid(): string;
export declare function setTitle(title: string): void;
export declare function setSubTitle(title: string): void;
export declare function success(money: string): void;
export declare function buySuccess(): void;
export declare function closeWeb(): void;
export declare function startQQChat(qq: string): void;
export declare function payByWeiXin(options: string): void;
export declare function getUserInfo(): void;
export declare function getAuthInfo(): void;
export declare function getDeviceMsg(): string;
export declare function share(extra: string): void;
/**
 * 分享一张图片
 *
 * @param extra
 */
export declare function shareOnePicture(extra: string): void;
export declare function showActivity(actname: string, extra: string): void;
/**
 * 发起授权
 * redirect_url        string ，同意授权后跳转地址
 * platform            string , 平台类型，（优财：yc，保险岛：bxd，助手：zs，智慧魔方：zhmf）
 */
export declare function wap_auth(redirect_url: string, platform: string): void;
/**
 * 分享
 * title      string , 分享标题
 * content    string ，分享内容
 * image      string ，图片地址
 * url        string ，跳转地址
 */
export declare function wap_share(title: string, content: string, image: string, url: string): void;
/**
 * H5设置右上角菜单
 *
 * @param json
 */
export declare function openMenu(json: string): void;
/**
 * H5隐藏右上角菜单
 */
export declare function closeMenu(): void;
/**
 * 打个个人资料
 */
export declare function SetBasicInfo(): void;
/**
 * 复制
 */
export declare function copy(json: string): void;
/**
 * 处理右上角分享（早报分享）
 *
 * @export
 * @param {string} json
 */
export declare function setTitleShare(json: string): void;
/**
 * 返回上一页
 */
export declare function back(): void;
/**
 *
 * 登录
 * @export
 */
export declare function login(): void;
/**
 * 直接微信分享
 *
 * @param shareData
 */
export declare function shareWithWeChat(shareData: string): void;
export declare function hideTab(isHide: string): void;
/**
 * 获取当天使用时长
 *
 * @return
 */
export declare function getTodayUseDuration(): number;
/**
 * 显示购买文章获客弹窗
 */
export declare function showBuyArticleServicePopup(): void;
/**
 * 顶部标题栏高度
 *
 * @return
 */
export declare function getTitleBarHeight(): number;
/**
 * 控制右上角ImageButton可见性
 *
 * @param visible：0隐藏；1可见
 */
export declare function setRightTopImageBtnVisible(visible: number): void;
