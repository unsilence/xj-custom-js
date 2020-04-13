
/**
 * 当前是移动或者是pc
 *
 * @export
 * @returns {boolean}
 */
export function isPc(): boolean {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return false;
    } else {
        //说明是pc端
        return true;
    }
}

/**
 * 当前是微信浏览器
 *
 * @export
 * @returns {boolean}
 */
export function isWeixn(): boolean {
    const ua = navigator.userAgent.toLowerCase();
    let uas = ua.match(/MicroMessenger/i) as any;
    if (uas == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
/**
 * 是否是助手
 *
 * @export
 * @returns {boolean}
 */
export function isZhushou(): boolean {
    const ua = navigator.userAgent.toLowerCase();
    let uas = ua.match(/zhushou browser/i) as any;
    if (uas == "micromessenger") {
        return true;
    } else {
        return false;
    }
}


/**
 * 直播
 *
 * @export
 */
export function gotoLive() { }

/**
 *
 *
 * @export
 * @param {string} phoneNumber
 * @param {string} message
 */
export function sendSMS(phoneNumber: string, message: string): void {
}

/**
 * 获取平台
 *
 * @export
 * @returns {string}
 */
export function getfrom(): string {
    return '';
}

/**
 * 解决微信支付问题
 * @param json
 * @returns {string}
 */
export function configWxReferer(json: string) { }

/**
 * 图片裁剪上传（个人品牌秀）
 *
 * @param ratio：裁减比例
 */

export function CropperPic(ratio: number) { }

/**
 * 打开pdf
 *
 * @param url
 */

export function openpdf(url: string, title: string) {
}

/**
 * 获取版本号码
 */
export function getVersion(): string {
    return '0.0.1'

}

/**
 * 通用分享本地调取显示接口
 */

export function setNativeShareAble(extra: string) { }

/**
 * 课程闯关成功回调跳转页面
 */

export function openQuestionDetailById(qid: number) { }


export function refreshWebView() { }


export function openNewWebview(_url: string) { }

/**
 * 发起定位请求，用于网页请求app地理位置信息
 */

export function getLocation() { }


export function setWebReadingInfo(webmsg: string) { }


export function setReadingInfo(id: string, imgurl: string, isCollected: number, shortLink: string) { }


export function setCanShare() { }


export function startToInvite() { }



export function addMenu(jsonText: string) { }



export function resetMenu() { }



export function setMenuDisplay(menuId: string) { }


export function closeCurrentPage() { }


export function getUid(): string {
    return ''
}

// 设置title

export function setTitle(title: string) { }

// 设置subtitle

export function setSubTitle(title: string) { }

// 支付

export function success(money: string) { }

// 购买皮肤成功的回调

export function buySuccess() { }

// 购买皮肤成功的回调

export function closeWeb() { }


export function startQQChat(qq: string) { }

// 原生微信支付

export function payByWeiXin(options: string) { }

/*
 * 得到用户信息
 */

export function getUserInfo() { }


export function getAuthInfo() { }

/*
 * 获取手机机型信息
 */

export function getDeviceMsg(): string {
    return ''
}


export function share(extra: string) { }

/**
 * 分享一张图片
 *
 * @param extra
 */

export function shareOnePicture(extra: string) {
}

/*
 * 启动activity
 */

export function showActivity(actname: string, extra: string) { }

/**
 * 发起授权
 * redirect_url        string ，同意授权后跳转地址
 * platform            string , 平台类型，（优财：yc，保险岛：bxd，助手：zs，智慧魔方：zhmf）
 */
export function wap_auth(redirect_url: string, platform: string) { }

/**
 * 分享
 * title      string , 分享标题
 * content    string ，分享内容
 * image      string ，图片地址
 * url        string ，跳转地址
 */
export function wap_share(title: string, content: string, image: string, url: string) { }

/**
 * H5设置右上角菜单
 *
 * @param json
 */
export function openMenu(json: string) { }

/**
 * H5隐藏右上角菜单
 */
export function closeMenu() {

}

/**
 * 打个个人资料
 */

export function SetBasicInfo() { }

/**
 * 复制
 */
export function copy(json: string) {

}

/**
 * 处理右上角分享（早报分享）
 *
 * @export
 * @param {string} json
 */
export function setTitleShare(json: string) { }

/**
 * 返回上一页
 */
export function back() { }

/**
 *
 * 登录
 * @export
 */
export function login() { }

/**
 * 直接微信分享
 *
 * @param shareData
 */
export function shareWithWeChat(shareData: string) { }


export function hideTab(isHide: string) { }

/**
 * 获取当天使用时长
 *
 * @return
 */

export function getTodayUseDuration(): number {
    return 0;
}

/**
 * 显示购买文章获客弹窗
 */
export function showBuyArticleServicePopup() { }

/**
 * 顶部标题栏高度
 *
 * @return 
 */
export function getTitleBarHeight(): number {
    return 0;
}

/**
 * 控制右上角ImageButton可见性
 *
 * @param visible：0隐藏；1可见
 */

export function setRightTopImageBtnVisible(visible: number) { }
