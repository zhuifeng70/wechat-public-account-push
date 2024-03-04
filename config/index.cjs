/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx2a8742f8024a6abe',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c894836be858a98bcc2db6daaec22084',

  PROVINCE: '福建',
  CITY: '福州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '美丽可爱的郭亚平女士',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEHVM62Q6I3ht9kIvlpuJOt6KPJo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'QLCHHp5ER_z24syErn_XcTwpnOMER3n5lucWUL2YSH4',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-01',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2024', date: '11-20',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],
   // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: true,
    
    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: true,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  },
  
  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: 'f9d603136db1c7d0cc7cae4ecf795fa5',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: true,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 3,
  },
  
  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: false,
  
  /** 每日一言 */
  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: '',
  
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '4men7c6LXm9w76ngOCgWvxoWZKAEqKb3X-uFR6MUyGI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEHVM68JMFmPtFtZ0pe0fyH41LUU',
    }
  ],

}

module.exports = USER_CONFIG
