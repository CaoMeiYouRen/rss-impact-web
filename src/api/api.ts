/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ResponseDto {
  statusCode?: number;
  message?: string;
  error?: string;
  stack?: string;
  data?: object;
}

export interface Rule {
  required: boolean;
  message: string;
  trigger: string;
}

export interface DicData {
  label: string;
  value: string;
}

export interface Column {
  type: string;
  rules?: Rule[];
  dicData?: DicData[];
  label: string;
  prop: string;
  overHidden?: boolean;
  value?: object;
  addDisplay?: boolean;
  editDisabled?: boolean;
  readonly?: boolean;
  max?: number;
  min?: number;
  format?: string;
  maxlength?: number;
  minlength?: number;
  alone?: boolean;
}

export interface Option {
  column: Column[];
  index?: boolean;
  align?: string;
  border?: boolean;
  stripe?: boolean;
  columnBtn?: boolean;
  refreshBtn?: boolean;
  addBtn?: boolean;
  editBtn?: boolean;
  delBtn?: boolean;
  viewBtn?: boolean;
  excelBtn?: boolean;
  title?: string;
  addRowBtn?: boolean;
  calcHeight?: number;
  cancelBtnTitle?: string;
  dataType?: string;
  cellBtn?: boolean;
  dateBtn?: boolean;
  cancelBtn?: boolean;
  dateDefault?: boolean;
  dicData?: object;
  dicMethod?: string;
  dicQuery?: object;
  dicUrl?: string;
  defaultSort?: object;
  dialogFullscreen?: boolean;
  dialogEscape?: boolean;
  dialogClickModal?: boolean;
  dialogCloseBtn?: boolean;
  dialogModal?: boolean;
  dialogTop?: object;
  dialogType?: string;
  dialogWidth?: object;
  dialogHeight?: object;
  defaultExpandAll?: boolean;
  expandRowKeys?: string[];
  emptyText?: string;
  expand?: boolean;
  expandWidth?: number;
  expandFixed?: boolean;
  filterBtn?: boolean;
  formWidth?: object;
  height?: number;
  header?: boolean;
  indexLabel?: string;
  indexWidth?: number;
  indexFixed?: boolean;
  rowKey?: string;
  indeterminate?: boolean;
  labelWidth?: number;
  maxHeight?: number;
  menu?: boolean;
  menuWidth?: number;
  menuXsWidth?: number;
  menuAlign?: string;
  menuType?: string;
  menuBtnTitle?: string;
  pageSize?: string;
  pageSizes?: number[];
  printBtn?: boolean;
  saveBtn?: boolean;
  updateBtn?: boolean;
  cancalBtn?: boolean;
  saveBtnTitle?: string;
  selection?: boolean;
  selectionWidth?: number;
  selectionFixed?: boolean;
  searchBtn?: boolean;
  selectable?: boolean;
  selectClearBtn?: boolean;
  showHeader?: boolean;
  showSummary?: boolean;
  sumColumnList?: string[];
  tip?: string;
  tipPlacement?: string;
  checkStrictly?: boolean;
  updateBtnTitle?: string;
  width?: number;
}

export interface AvueCrudConfigImpl {
  option: Option;
}

export interface User {
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * 创建时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  createdAt: Date;
  /**
   * 更新时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  updatedAt: Date;
  /**
   * 用户名
   * @minLength 0
   * @maxLength 128
   * @example "admin"
   */
  username: string;
  /**
   * 密码
   * @minLength 0
   * @maxLength 128
   * @example "123456"
   */
  password?: string;
  /**
   * 邮箱
   * @minLength 0
   * @maxLength 128
   * @example "admin@example.com"
   */
  email: string;
  /**
   * 角色
   * @example ["admin"]
   */
  roles: string[];
  /**
   * 接口访问令牌
   * 接口访问令牌，部分情况可替代账号密码
   * @example "rss-impact:fef26d6e-040f-4a7b-8d6a-4e4f12e107b6"
   */
  accessToken: string;
}

export interface FindUser {
  data: User[];
  total: number;
  lastPage: number;
  currentPage: number;
}

export interface CreateUser {
  /**
   * 用户名
   * @minLength 0
   * @maxLength 128
   * @example "admin"
   */
  username: string;
  /**
   * 密码
   * @minLength 0
   * @maxLength 128
   * @example "123456"
   */
  password?: string;
  /**
   * 邮箱
   * @minLength 0
   * @maxLength 128
   * @example "admin@example.com"
   */
  email: string;
  /**
   * 角色
   * @example ["admin"]
   */
  roles: string[];
}

export interface UpdateUser {
  /**
   * ID
   * @example 1
   */
  id?: number;
  /**
   * 用户名
   * @minLength 0
   * @maxLength 128
   * @example "admin"
   */
  username?: string;
  /**
   * 密码
   * @minLength 0
   * @maxLength 128
   * @example "123456"
   */
  password?: string;
  /**
   * 邮箱
   * @minLength 0
   * @maxLength 128
   * @example "admin@example.com"
   */
  email?: string;
  /**
   * 角色
   * @example ["admin"]
   */
  roles?: string[];
}

export interface LoginDto {
  /**
   * 用户名
   * @example "admin"
   */
  username: string;
  /**
   * 密码
   * @minLength 6
   * @example "123456"
   */
  password: string;
}

export interface RegisterDto {
  /**
   * 用户名
   * @minLength 0
   * @maxLength 128
   * @example "user"
   */
  username: string;
  /**
   * 密码
   * @minLength 6
   * @maxLength 128
   * @example "123456"
   */
  password: string;
  /**
   * 邮箱
   * @minLength 0
   * @maxLength 128
   * @example "user@example.com"
   */
  email: string;
}

export interface ProxyConfig {
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * 创建时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  createdAt: Date;
  /**
   * 更新时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  updatedAt: Date;
  /**
   * 所属用户
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * 代理名称
   * @minLength 0
   * @maxLength 256
   * @example "代理A"
   */
  name: string;
  /**
   * 代理URL
   * 支持 http/https/socks/socks5 协议。例如 http://127.0.0.1:8080
   * @minLength 0
   * @maxLength 2048
   * @example "http://127.0.0.1:8080"
   */
  url: string;
}

export interface EnclosureImpl {
  /**
   * URL
   * @minLength 0
   * @maxLength 65000
   * @example "http://bt.example.com"
   */
  url: string;
  /**
   * 长度
   * @example 114514
   */
  length?: number;
  /**
   * 媒体类型
   * @minLength 0
   * @maxLength 128
   * @example "application/x-bittorrent"
   */
  type?: string;
}

export interface Article {
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * 创建时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  createdAt: Date;
  /**
   * 更新时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  updatedAt: Date;
  /**
   * 所属用户
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * 全局索引
   * @example "499d4cee"
   */
  guid: string;
  /**
   * 链接
   * @minLength 0
   * @maxLength 2048
   * @example "https://blog.cmyr.ltd/archives/499d4cee.html"
   */
  link?: string;
  /**
   * 标题
   * @minLength 0
   * @maxLength 256
   * @example "这是一个标题"
   */
  title?: string;
  /**
   * 正文
   * @minLength 0
   * @maxLength 1048576
   * @example "这是一段正文"
   */
  content?: string;
  /**
   * 发布日期
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  pubDate?: Date;
  /**
   * 作者
   * @minLength 0
   * @maxLength 128
   * @example "CaoMeiYouRen"
   */
  author?: string;
  /**
   * 摘要
   * 纯文本格式，无 HTML
   * @minLength 0
   * @maxLength 65536
   * @example "这是一段内容摘要"
   */
  contentSnippet?: string;
  /**
   * 总结
   * @minLength 0
   * @maxLength 1024
   * @example "这是一段总结"
   */
  summary?: string;
  /**
   * 分类列表
   * RSS 源定义的分类，和 本地RSS 的分组不是同一个
   * @example ["tag1","tag2"]
   */
  categories?: string[];
  /** 附件 */
  enclosure?: EnclosureImpl;
  /**
   * 订阅源
   * @example 1
   */
  feedId: number;
  /** 订阅源 */
  feed: Feed;
  /** @format date-time */
  publishDate?: Date;
}

export interface NotificationConfig {
  /**
   * 推送类型
   * push-all-in-one 支持的推送类型
   * @example "ServerChanTurbo"
   */
  type:
    | "ServerChanTurbo"
    | "Dingtalk"
    | "CustomEmail"
    | "WechatRobot"
    | "WechatApp"
    | "PushDeer"
    | "PushPlus"
    | "IGot"
    | "Qmsg"
    | "XiZhi"
    | "CoolPush"
    | "Email"
    | "UniPush"
    | "Telegram"
    | "Discord"
    | "OneBot";
  /**
   * 推送配置
   * 具体配置请参考 push-all-in-one 文档
   * @example {"SCTKEY":""}
   */
  config: object;
  /**
   * 合并推送
   * 在一次轮询中检测到多条 RSS 更新，将合并为一条推送
   * @example true
   */
  isMergePush: boolean;
  /**
   * Markdown
   * 对于支持 markdown 格式的渠道，将使用 markdown 格式推送
   * @example true
   */
  isMarkdown: boolean;
  /**
   * 纯文本
   * 去除 HTML，仅保留纯文本部分
   * @example false
   */
  isSnippet: boolean;
  /**
   * 最大长度
   * 一次推送文本的最大长度。默认值为 4096
   * @example 4096
   */
  maxLength: number;
}

export interface WebhookConfig {
  /**
   * 请求链接
   * @minLength 0
   * @maxLength 1024
   * @example "http://127.0.0.1:3000"
   */
  url: string;
  /**
   * 请求方法
   * @example {}
   */
  method?: "GET" | "DELETE" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "PATCH" | "PURGE" | "LINK" | "UNLINK";
  /**
   * 查询字符串
   * @example {"key":"114514"}
   */
  query?: object;
  /**
   * 请求体
   * @example {}
   */
  data?: object;
  /**
   * 请求头
   * @example {}
   */
  headers?: object;
  /**
   * 超时时间(秒)
   * 默认 60 秒。
   * @example 60
   */
  timeout?: number;
}

export interface DownloadConfig {
  /**
   * 匹配后缀名
   * 要下载的文件的后缀名，支持正则。例如：.(jpe?g|png|gif|webp|bmp)$
   * @minLength 0
   * @maxLength 256
   * @example ".(jpe?g|png|gif|webp|bmp)$"
   */
  suffixes: string;
  /**
   * 跳过文件
   * 要跳过的文件 md5，逗号分割。例如：4cf24fe8401f7ab2eba2c6cb82dffb0e
   * @minLength 0
   * @maxLength 256
   * @example "d41d8cd98f00b204e9800998ecf8427e"
   */
  skipHashes: string;
  /**
   * 超时时间(秒)
   * 默认 60 秒。
   * @example 60
   */
  timeout?: number;
}

export interface BitTorrentConfig {
  /**
   * 类型
   * BT下载器类型。目前仅支持 qBittorrent
   * @minLength 0
   * @maxLength 16
   * @example "qBittorrent"
   */
  type: "qBittorrent";
  /**
   * 服务器地址
   * BT服务器地址，例如 http://localhost:8080/
   * @minLength 0
   * @maxLength 1024
   * @example "http://localhost:8080/"
   */
  baseUrl: string;
  /**
   * 用户名
   * @minLength 0
   * @maxLength 128
   * @example "admin"
   */
  username: string;
  /**
   * 密码
   * @minLength 0
   * @maxLength 128
   * @example "adminadmin"
   */
  password: string;
  /**
   * 下载路径
   * @minLength 0
   * @maxLength 256
   * @example "服务器上的地址，要保存到的路径。留空则为 BT 下载器的默认设置"
   */
  downloadPath?: string;
  /**
   * 最大体积(B)
   * 过滤资源体积，超过体积的资源不会下载。单位为 B (字节)。设置为 0 禁用
   * @example 114514
   */
  maxSize?: number;
}

export interface Filter {
  /**
   * 条数限制
   * 限制最大条数，主要用于排行榜类 RSS。默认值 20。
   * @example 20
   */
  limit?: number;
  /**
   * 过滤时间(秒)
   * 过滤时间，返回指定时间范围内的内容。设置为 0 禁用
   * @example 3600
   */
  time?: number;
  /**
   * 过滤标题
   * @minLength 0
   * @maxLength 256
   * @example "标题1|标题2"
   */
  title?: string;
  /**
   * 过滤总结
   * @minLength 0
   * @maxLength 1024
   * @example "总结1|总结2"
   */
  summary?: string;
  /**
   * 过滤作者
   * @minLength 0
   * @maxLength 128
   * @example "CaoMeiYouRen"
   */
  author?: string;
  /**
   * 过滤分类
   * 分类正则中有一个对得上就保留
   * @minLength 0
   * @maxLength 256
   * @example "tag1|tag2"
   */
  categories?: string;
}

export interface FilterOut {
  /**
   * 排除标题
   * @minLength 0
   * @maxLength 256
   * @example "标题1|标题2"
   */
  title?: string;
  /**
   * 排除总结
   * @minLength 0
   * @maxLength 1024
   * @example "总结1|总结2"
   */
  summary?: string;
  /**
   * 排除作者
   * @minLength 0
   * @maxLength 128
   * @example "CaoMeiYouRen"
   */
  author?: string;
  /**
   * 排除分类
   * 分类正则中有一个对得上就排除
   * @minLength 0
   * @maxLength 256
   * @example "tag1|tag2"
   */
  categories?: string;
}

export interface Hook {
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * 创建时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  createdAt: Date;
  /**
   * 更新时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  updatedAt: Date;
  /**
   * 所属用户
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * 名称
   * @minLength 0
   * @maxLength 256
   * @example "Hook1"
   */
  name: string;
  /**
   * 类型
   * @example "webhook"
   */
  type: "notification" | "webhook" | "download" | "bitTorrent";
  /**
   * 配置
   * @example {}
   */
  config: NotificationConfig | WebhookConfig | DownloadConfig | BitTorrentConfig;
  /**
   * 过滤条件
   * 保留想要的内容，必须符合全部条件才保留。支持通过正则表达式过滤。留空的规则不会过滤。
   */
  filter: Filter;
  /**
   * 排除条件
   * 去掉不要的内容，有一个条件符合就排除。支持通过正则表达式排除。留空的规则不会排除。
   */
  filterout: FilterOut;
  /**
   * 反转模式
   * 如果服务可访问，则认为是故障
   * @example false
   */
  isReversed: boolean;
  /**
   * 代理配置
   * 选择不代理后保存即可禁用代理
   * @example 1
   */
  proxyConfigId?: number;
  /** 代理配置 */
  proxyConfig: ProxyConfig;
  /**
   * 订阅源列表
   * @example []
   */
  feeds: Feed[];
}

export interface Feed {
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * 创建时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  createdAt: Date;
  /**
   * 更新时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  updatedAt: Date;
  /**
   * 所属用户
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * URL
   * @minLength 0
   * @maxLength 2048
   * @example "https://blog.cmyr.ltd/atom.xml"
   */
  url: string;
  /**
   * 标题
   * @minLength 0
   * @maxLength 256
   * @example "这是一个标题"
   */
  title: string;
  /**
   * 简介
   * @minLength 0
   * @maxLength 4096
   * @example "这是一段简介"
   */
  description: string;
  /**
   * 封面 URL
   * @minLength 0
   * @maxLength 2048
   * @example "https://blog.cmyr.ltd/images/logo.svg"
   */
  imageUrl?: string;
  /**
   * Cron
   * @example "EVERY_10_MINUTES"
   */
  cron:
    | "EVERY_10_MINUTES"
    | "EVERY_20_MINUTES"
    | "EVERY_30_MINUTES"
    | "EVERY_1_HOUR"
    | "EVERY_2_HOURS"
    | "EVERY_3_HOURS"
    | "EVERY_4_HOURS"
    | "EVERY_6_HOURS"
    | "EVERY_8_HOURS"
    | "EVERY_12_HOURS"
    | "EVERY_DAY";
  /**
   * 是否启用
   * @example true
   */
  isEnabled: boolean;
  /**
   * 分组
   * @example 1
   */
  categoryId: number;
  /** 分组 */
  category: Category;
  /**
   * 代理配置
   * 选择不代理后保存即可禁用代理
   * @example 1
   */
  proxyConfigId?: number;
  /** 代理配置 */
  proxyConfig?: ProxyConfig;
  /**
   * 文章列表
   * @example []
   */
  articles: Article[];
  /**
   * Hook列表
   * @example []
   */
  hooks: Hook[];
}

export interface Category {
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * 创建时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  createdAt: Date;
  /**
   * 更新时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  updatedAt: Date;
  /**
   * 所属用户
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * 分类名称
   * @minLength 0
   * @maxLength 256
   * @example "分类A"
   */
  name: string;
  /**
   * 分类简介
   * @minLength 0
   * @maxLength 2048
   * @example "分类A"
   */
  description?: string;
  /**
   * 订阅链接
   * @example []
   */
  feeds: Feed[];
}

export interface QuickCreateFeed {
  /**
   * URL
   * @minLength 0
   * @maxLength 2048
   * @example "https://blog.cmyr.ltd/atom.xml"
   */
  url: string;
  /**
   * Cron
   * @example "EVERY_10_MINUTES"
   */
  cron:
    | "EVERY_10_MINUTES"
    | "EVERY_20_MINUTES"
    | "EVERY_30_MINUTES"
    | "EVERY_1_HOUR"
    | "EVERY_2_HOURS"
    | "EVERY_3_HOURS"
    | "EVERY_4_HOURS"
    | "EVERY_6_HOURS"
    | "EVERY_8_HOURS"
    | "EVERY_12_HOURS"
    | "EVERY_DAY";
  /**
   * 是否启用
   * @example true
   */
  isEnabled: boolean;
  /**
   * 分组
   * @example 1
   */
  categoryId: number;
  /**
   * Hook列表
   * @example []
   */
  hooks: Hook[];
}

export interface CreateFeed {
  /**
   * 所属用户
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * URL
   * @minLength 0
   * @maxLength 2048
   * @example "https://blog.cmyr.ltd/atom.xml"
   */
  url: string;
  /**
   * 标题
   * @minLength 0
   * @maxLength 256
   * @example "这是一个标题"
   */
  title: string;
  /**
   * 简介
   * @minLength 0
   * @maxLength 4096
   * @example "这是一段简介"
   */
  description: string;
  /**
   * 封面 URL
   * @minLength 0
   * @maxLength 2048
   * @example "https://blog.cmyr.ltd/images/logo.svg"
   */
  imageUrl?: string;
  /**
   * Cron
   * @example "EVERY_10_MINUTES"
   */
  cron:
    | "EVERY_10_MINUTES"
    | "EVERY_20_MINUTES"
    | "EVERY_30_MINUTES"
    | "EVERY_1_HOUR"
    | "EVERY_2_HOURS"
    | "EVERY_3_HOURS"
    | "EVERY_4_HOURS"
    | "EVERY_6_HOURS"
    | "EVERY_8_HOURS"
    | "EVERY_12_HOURS"
    | "EVERY_DAY";
  /**
   * 是否启用
   * @example true
   */
  isEnabled: boolean;
  /**
   * 分组
   * @example 1
   */
  categoryId: number;
  /** 分组 */
  category: Category;
  /**
   * 代理配置
   * 选择不代理后保存即可禁用代理
   * @example 1
   */
  proxyConfigId?: number;
  /** 代理配置 */
  proxyConfig?: ProxyConfig;
  /**
   * 文章列表
   * @example []
   */
  articles: Article[];
  /**
   * Hook列表
   * @example []
   */
  hooks: Hook[];
}

export interface UpdateFeed {
  /**
   * ID
   * @example 1
   */
  id?: number;
  /**
   * 所属用户
   * @example 1
   */
  userId?: number;
  /** 所属用户 */
  user?: User;
  /**
   * URL
   * @minLength 0
   * @maxLength 2048
   * @example "https://blog.cmyr.ltd/atom.xml"
   */
  url?: string;
  /**
   * 标题
   * @minLength 0
   * @maxLength 256
   * @example "这是一个标题"
   */
  title?: string;
  /**
   * 简介
   * @minLength 0
   * @maxLength 4096
   * @example "这是一段简介"
   */
  description?: string;
  /**
   * 封面 URL
   * @minLength 0
   * @maxLength 2048
   * @example "https://blog.cmyr.ltd/images/logo.svg"
   */
  imageUrl?: string;
  /**
   * Cron
   * @example "EVERY_10_MINUTES"
   */
  cron?:
    | "EVERY_10_MINUTES"
    | "EVERY_20_MINUTES"
    | "EVERY_30_MINUTES"
    | "EVERY_1_HOUR"
    | "EVERY_2_HOURS"
    | "EVERY_3_HOURS"
    | "EVERY_4_HOURS"
    | "EVERY_6_HOURS"
    | "EVERY_8_HOURS"
    | "EVERY_12_HOURS"
    | "EVERY_DAY";
  /**
   * 是否启用
   * @example true
   */
  isEnabled?: boolean;
  /**
   * 分组
   * @example 1
   */
  categoryId?: number;
  /** 分组 */
  category?: Category;
  /**
   * 代理配置
   * 选择不代理后保存即可禁用代理
   * @example 1
   */
  proxyConfigId?: number;
  /** 代理配置 */
  proxyConfig?: ProxyConfig;
  /**
   * 文章列表
   * @example []
   */
  articles?: Article[];
  /**
   * Hook列表
   * @example []
   */
  hooks?: Hook[];
}

export interface FindFeed {
  data: Feed[];
  total: number;
  lastPage: number;
  currentPage: number;
}

export interface FindCategory {
  data: Category[];
  total: number;
  lastPage: number;
  currentPage: number;
}

export interface CreateCategory {
  /**
   * 所属用户
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * 分类名称
   * @minLength 0
   * @maxLength 256
   * @example "分类A"
   */
  name: string;
  /**
   * 分类简介
   * @minLength 0
   * @maxLength 2048
   * @example "分类A"
   */
  description?: string;
  /**
   * 订阅链接
   * @example []
   */
  feeds: Feed[];
}

export interface UpdateCategory {
  /**
   * ID
   * @example 1
   */
  id?: number;
  /**
   * 所属用户
   * @example 1
   */
  userId?: number;
  /** 所属用户 */
  user?: User;
  /**
   * 分类名称
   * @minLength 0
   * @maxLength 256
   * @example "分类A"
   */
  name?: string;
  /**
   * 分类简介
   * @minLength 0
   * @maxLength 2048
   * @example "分类A"
   */
  description?: string;
  /**
   * 订阅链接
   * @example []
   */
  feeds?: Feed[];
}

export interface FindArticle {
  data: Article[];
  total: number;
  lastPage: number;
  currentPage: number;
}

export interface FindHook {
  data: Hook[];
  total: number;
  lastPage: number;
  currentPage: number;
}

export interface CreateHook {
  /**
   * 所属用户
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * 名称
   * @minLength 0
   * @maxLength 256
   * @example "Hook1"
   */
  name: string;
  /**
   * 类型
   * @example "webhook"
   */
  type: "notification" | "webhook" | "download" | "bitTorrent";
  /**
   * 配置
   * @example {}
   */
  config: NotificationConfig | WebhookConfig | DownloadConfig | BitTorrentConfig;
  /**
   * 过滤条件
   * 保留想要的内容，必须符合全部条件才保留。支持通过正则表达式过滤。留空的规则不会过滤。
   */
  filter: Filter;
  /**
   * 排除条件
   * 去掉不要的内容，有一个条件符合就排除。支持通过正则表达式排除。留空的规则不会排除。
   */
  filterout: FilterOut;
  /**
   * 反转模式
   * 如果服务可访问，则认为是故障
   * @example false
   */
  isReversed: boolean;
  /**
   * 代理配置
   * 选择不代理后保存即可禁用代理
   * @example 1
   */
  proxyConfigId?: number;
  /** 代理配置 */
  proxyConfig: ProxyConfig;
  /**
   * 订阅源列表
   * @example []
   */
  feeds: Feed[];
}

export interface UpdateHook {
  /**
   * ID
   * @example 1
   */
  id?: number;
  /**
   * 所属用户
   * @example 1
   */
  userId?: number;
  /** 所属用户 */
  user?: User;
  /**
   * 名称
   * @minLength 0
   * @maxLength 256
   * @example "Hook1"
   */
  name?: string;
  /**
   * 类型
   * @example "webhook"
   */
  type?: "notification" | "webhook" | "download" | "bitTorrent";
  /**
   * 配置
   * @example {}
   */
  config?: NotificationConfig | WebhookConfig | DownloadConfig | BitTorrentConfig;
  /**
   * 过滤条件
   * 保留想要的内容，必须符合全部条件才保留。支持通过正则表达式过滤。留空的规则不会过滤。
   */
  filter?: Filter;
  /**
   * 排除条件
   * 去掉不要的内容，有一个条件符合就排除。支持通过正则表达式排除。留空的规则不会排除。
   */
  filterout?: FilterOut;
  /**
   * 反转模式
   * 如果服务可访问，则认为是故障
   * @example false
   */
  isReversed?: boolean;
  /**
   * 代理配置
   * 选择不代理后保存即可禁用代理
   * @example 1
   */
  proxyConfigId?: number;
  /** 代理配置 */
  proxyConfig?: ProxyConfig;
  /**
   * 订阅源列表
   * @example []
   */
  feeds?: Feed[];
}

export interface Resource {
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * 创建时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  createdAt: Date;
  /**
   * 更新时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  updatedAt: Date;
  /**
   * 所属用户
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * URL
   * @minLength 0
   * @maxLength 65000
   * @example "https://blog.cmyr.ltd/images/favicon-16x16-next.png"
   */
  url: string;
  /**
   * 文件名称
   * @minLength 0
   * @maxLength 1024
   * @example "favicon-16x16-next.png"
   */
  name?: string;
  /**
   * 文件路径
   * @minLength 0
   * @maxLength 2048
   * @example "/data/download/favicon-16x16-next.png"
   */
  path?: string;
  /**
   * 文件类型
   * @minLength 0
   * @maxLength 128
   * @example "image/png"
   */
  type: string;
  /**
   * 文件大小(B)
   * 单位为 B
   * @example 114514
   */
  size: number;
  /**
   * 文件大小(B)
   * 单位为 B
   * @example "114.51 MiB"
   */
  sizeFormat?: string;
  /**
   * 文件哈希
   * @minLength 0
   * @maxLength 128
   * @example "d41d8cd98f00b204e9800998ecf8427e"
   */
  hash: string;
  /**
   * 文件状态
   * @minLength 0
   * @maxLength 16
   * @example "success"
   */
  status: object;
}

export interface FindResource {
  data: Resource[];
  total: number;
  lastPage: number;
  currentPage: number;
}

export interface WebhookLog {
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * 创建时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  createdAt: Date;
  /**
   * 更新时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  updatedAt: Date;
  /**
   * 所属用户
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * 状态码
   * @min 100
   * @max 600
   * @example 200
   */
  statusCode: number;
  /**
   * 类型
   * webhook 或 notification
   * @minLength 0
   * @maxLength 16
   * @example "webhook"
   */
  type: object;
  /**
   * 状态
   * @minLength 0
   * @maxLength 16
   * @example "success"
   */
  status: object;
  /**
   * 状态码名称
   * @minLength 0
   * @maxLength 128
   * @example "OK"
   */
  statusText: string;
  /**
   * 响应体
   * @example {"message":"OK"}
   */
  data?: object;
  /**
   * 响应头
   * @example {}
   */
  headers?: object;
  /**
   * 订阅源
   * @example 1
   */
  feedId: number;
  /** 订阅源 */
  feed: Feed;
  /**
   * Hook
   * @example 1
   */
  hookId: number;
  /** Hook */
  hook: Hook;
}

export interface FindWebhookLog {
  data: WebhookLog[];
  total: number;
  lastPage: number;
  currentPage: number;
}

export interface FindProxyConfig {
  data: ProxyConfig[];
  total: number;
  lastPage: number;
  currentPage: number;
}

export interface CreateProxyConfig {
  /**
   * 所属用户
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * 代理名称
   * @minLength 0
   * @maxLength 256
   * @example "代理A"
   */
  name: string;
  /**
   * 代理URL
   * 支持 http/https/socks/socks5 协议。例如 http://127.0.0.1:8080
   * @minLength 0
   * @maxLength 2048
   * @example "http://127.0.0.1:8080"
   */
  url: string;
}

export interface UpdateProxyConfig {
  /**
   * ID
   * @example 1
   */
  id?: number;
  /**
   * 所属用户
   * @example 1
   */
  userId?: number;
  /** 所属用户 */
  user?: User;
  /**
   * 代理名称
   * @minLength 0
   * @maxLength 256
   * @example "代理A"
   */
  name?: string;
  /**
   * 代理URL
   * 支持 http/https/socks/socks5 协议。例如 http://127.0.0.1:8080
   * @minLength 0
   * @maxLength 2048
   * @example "http://127.0.0.1:8080"
   */
  url?: string;
}

export interface CustomQuery {
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * 创建时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  createdAt: Date;
  /**
   * 更新时间
   * @format date-time
   * @example "2023-12-31T16:00:00.000Z"
   */
  updatedAt: Date;
  /**
   * 所属用户
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * 名称
   * @minLength 0
   * @maxLength 256
   * @example "查询A"
   */
  name: string;
  /**
   * 输出格式
   * @minLength 0
   * @maxLength 32
   * @example "rss2.0"
   */
  format: "rss2.0" | "atom" | "json";
  /** 输出路径 */
  url?: string;
  /**
   * 过滤条件
   * 保留想要的内容，必须符合全部条件才保留。支持通过正则表达式过滤。留空的规则不会过滤。
   */
  filter: Filter;
  /**
   * 排除条件
   * 去掉不要的内容，有一个条件符合就排除。支持通过正则表达式排除。留空的规则不会排除。
   */
  filterout: FilterOut;
}

export interface FindCustomQuery {
  data: CustomQuery[];
  total: number;
  lastPage: number;
  currentPage: number;
}

export interface CreateCustomQuery {
  /**
   * 所属用户
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * 名称
   * @minLength 0
   * @maxLength 256
   * @example "查询A"
   */
  name: string;
  /**
   * 输出格式
   * @minLength 0
   * @maxLength 32
   * @example "rss2.0"
   */
  format: "rss2.0" | "atom" | "json";
  /** 输出路径 */
  url?: string;
  /**
   * 过滤条件
   * 保留想要的内容，必须符合全部条件才保留。支持通过正则表达式过滤。留空的规则不会过滤。
   */
  filter: Filter;
  /**
   * 排除条件
   * 去掉不要的内容，有一个条件符合就排除。支持通过正则表达式排除。留空的规则不会排除。
   */
  filterout: FilterOut;
}

export interface UpdateCustomQuery {
  /**
   * ID
   * @example 1
   */
  id?: number;
  /**
   * 所属用户
   * @example 1
   */
  userId?: number;
  /** 所属用户 */
  user?: User;
  /**
   * 名称
   * @minLength 0
   * @maxLength 256
   * @example "查询A"
   */
  name?: string;
  /**
   * 输出格式
   * @minLength 0
   * @maxLength 32
   * @example "rss2.0"
   */
  format?: "rss2.0" | "atom" | "json";
  /** 输出路径 */
  url?: string;
  /**
   * 过滤条件
   * 保留想要的内容，必须符合全部条件才保留。支持通过正则表达式过滤。留空的规则不会过滤。
   */
  filter?: Filter;
  /**
   * 排除条件
   * 去掉不要的内容，有一个条件符合就排除。支持通过正则表达式排除。留空的规则不会排除。
   */
  filterout?: FilterOut;
}

import type { AxiosInstance, AxiosRequestConfig, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance
      .request({
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      })
      .then((response) => response.data);
  };
}

/**
 * @title RSS Impact server docs
 * @version 0.1.0
 * @contact
 *
 * RSS Impact server docs
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @name AppGetHello
     * @request GET:/api
     */
    appGetHello: (params: RequestParams = {}) =>
      this.request<ResponseDto, any>({
        path: `/api`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AppPostHello
     * @request POST:/api
     */
    appPostHello: (params: RequestParams = {}) =>
      this.request<ResponseDto, any>({
        path: `/api`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserConfig
     * @summary 获取 config
     * @request GET:/api/user/config
     */
    userConfig: (params: RequestParams = {}) =>
      this.request<AvueCrudConfigImpl, void>({
        path: `/api/user/config`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserFind
     * @request GET:/api/user
     */
    userFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindUser, void>({
        path: `/api/user`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserCreate
     * @request POST:/api/user
     */
    userCreate: (data: CreateUser, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/user`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserUpdate
     * @request PUT:/api/user
     */
    userUpdate: (data: UpdateUser, params: RequestParams = {}) =>
      this.request<User, void>({
        path: `/api/user`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserMe
     * @summary 获取个人信息
     * @request GET:/api/user/me
     */
    userMe: (params: RequestParams = {}) =>
      this.request<User, void>({
        path: `/api/user/me`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserDicData
     * @summary 获取 dicData
     * @request GET:/api/user/dicData
     */
    userDicData: (params: RequestParams = {}) =>
      this.request<DicData[], void>({
        path: `/api/user/dicData`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserFindOne
     * @request GET:/api/user/{id}
     */
    userFindOne: (id: number, params: RequestParams = {}) =>
      this.request<User, void>({
        path: `/api/user/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserDelete
     * @summary 删除用户。仅返回 id 字段
     * @request DELETE:/api/user/{id}
     */
    userDelete: (id: number, params: RequestParams = {}) =>
      this.request<User, void>({
        path: `/api/user/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthLogin
     * @summary 登录
     * @request POST:/api/auth/login
     */
    authLogin: (data: LoginDto, params: RequestParams = {}) =>
      this.request<ResponseDto, any>({
        path: `/api/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthLogout
     * @summary 登出
     * @request POST:/api/auth/logout
     */
    authLogout: (params: RequestParams = {}) =>
      this.request<ResponseDto, any>({
        path: `/api/auth/logout`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthRegister
     * @summary 注册
     * @request POST:/api/auth/register
     */
    authRegister: (data: RegisterDto, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/auth/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedQuickCreateOption
     * @summary 快速添加订阅的配置项
     * @request GET:/api/feed/quickCreate/option
     */
    feedQuickCreateOption: (params: RequestParams = {}) =>
      this.request<Feed, void>({
        path: `/api/feed/quickCreate/option`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedQuickCreate
     * @summary 快速添加订阅
     * @request POST:/api/feed/quickCreate
     */
    feedQuickCreate: (data: QuickCreateFeed, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/feed/quickCreate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedCreate
     * @summary 创建记录
     * @request POST:/api/feed
     */
    feedCreate: (data: CreateFeed, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/feed`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedUpdate
     * @summary 更新记录
     * @request PUT:/api/feed
     */
    feedUpdate: (data: UpdateFeed, params: RequestParams = {}) =>
      this.request<Feed, void>({
        path: `/api/feed`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedFind
     * @summary 查找所有记录
     * @request GET:/api/feed
     */
    feedFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindFeed, void>({
        path: `/api/feed`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedDelete
     * @summary 删除记录
     * @request DELETE:/api/feed/{id}
     */
    feedDelete: (id: number, params: RequestParams = {}) =>
      this.request<Feed, void>({
        path: `/api/feed/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedFindOne
     * @summary 查找记录
     * @request GET:/api/feed/{id}
     */
    feedFindOne: (id: number, params: RequestParams = {}) =>
      this.request<Feed, void>({
        path: `/api/feed/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedDicData
     * @request GET:/api/feed/dicData
     */
    feedDicData: (params: RequestParams = {}) =>
      this.request<DicData[], void>({
        path: `/api/feed/dicData`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedConfig
     * @summary 获取 config
     * @request GET:/api/feed/config
     */
    feedConfig: (params: RequestParams = {}) =>
      this.request<AvueCrudConfigImpl, void>({
        path: `/api/feed/config`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryDicData
     * @request GET:/api/category/dicData
     */
    categoryDicData: (params: RequestParams = {}) =>
      this.request<DicData[], void>({
        path: `/api/category/dicData`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryConfig
     * @summary 获取 config
     * @request GET:/api/category/config
     */
    categoryConfig: (params: RequestParams = {}) =>
      this.request<AvueCrudConfigImpl, void>({
        path: `/api/category/config`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryFind
     * @summary 查找所有记录
     * @request GET:/api/category
     */
    categoryFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindCategory, void>({
        path: `/api/category`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryCreate
     * @summary 创建记录
     * @request POST:/api/category
     */
    categoryCreate: (data: CreateCategory, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/category`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryUpdate
     * @summary 更新记录
     * @request PUT:/api/category
     */
    categoryUpdate: (data: UpdateCategory, params: RequestParams = {}) =>
      this.request<Category, void>({
        path: `/api/category`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryFindOne
     * @summary 查找记录
     * @request GET:/api/category/{id}
     */
    categoryFindOne: (id: number, params: RequestParams = {}) =>
      this.request<Category, void>({
        path: `/api/category/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryDelete
     * @summary 删除记录
     * @request DELETE:/api/category/{id}
     */
    categoryDelete: (id: number, params: RequestParams = {}) =>
      this.request<Category, void>({
        path: `/api/category/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags article
     * @name ArticleConfig
     * @summary 获取 config
     * @request GET:/api/article/config
     */
    articleConfig: (params: RequestParams = {}) =>
      this.request<AvueCrudConfigImpl, void>({
        path: `/api/article/config`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags article
     * @name ArticleFind
     * @summary 查找所有记录
     * @request GET:/api/article
     */
    articleFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindArticle, void>({
        path: `/api/article`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags article
     * @name ArticleFindOne
     * @summary 查找记录
     * @request GET:/api/article/{id}
     */
    articleFindOne: (id: number, params: RequestParams = {}) =>
      this.request<Article, void>({
        path: `/api/article/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags article
     * @name ArticleDelete
     * @summary 删除记录
     * @request DELETE:/api/article/{id}
     */
    articleDelete: (id: number, params: RequestParams = {}) =>
      this.request<Article, void>({
        path: `/api/article/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags hook
     * @name HookDicData
     * @request GET:/api/hook/dicData
     */
    hookDicData: (params: RequestParams = {}) =>
      this.request<DicData[], void>({
        path: `/api/hook/dicData`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags hook
     * @name HookConfig
     * @summary 获取 config
     * @request GET:/api/hook/config
     */
    hookConfig: (params: RequestParams = {}) =>
      this.request<AvueCrudConfigImpl, void>({
        path: `/api/hook/config`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags hook
     * @name HookFind
     * @summary 查找所有记录
     * @request GET:/api/hook
     */
    hookFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindHook, void>({
        path: `/api/hook`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags hook
     * @name HookCreate
     * @summary 创建记录
     * @request POST:/api/hook
     */
    hookCreate: (data: CreateHook, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/hook`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags hook
     * @name HookUpdate
     * @summary 更新记录
     * @request PUT:/api/hook
     */
    hookUpdate: (data: UpdateHook, params: RequestParams = {}) =>
      this.request<Hook, void>({
        path: `/api/hook`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags hook
     * @name HookFindOne
     * @summary 查找记录
     * @request GET:/api/hook/{id}
     */
    hookFindOne: (id: number, params: RequestParams = {}) =>
      this.request<Hook, void>({
        path: `/api/hook/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags hook
     * @name HookDelete
     * @summary 删除记录
     * @request DELETE:/api/hook/{id}
     */
    hookDelete: (id: number, params: RequestParams = {}) =>
      this.request<Hook, void>({
        path: `/api/hook/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name ResourceTypeDicData
     * @request GET:/api/resource/typeDicData
     */
    resourceTypeDicData: (params: RequestParams = {}) =>
      this.request<DicData[], void>({
        path: `/api/resource/typeDicData`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name ResourceDelete
     * @summary 删除记录
     * @request DELETE:/api/resource/{id}
     */
    resourceDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/resource/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name ResourceFindOne
     * @summary 查找记录
     * @request GET:/api/resource/{id}
     */
    resourceFindOne: (id: number, params: RequestParams = {}) =>
      this.request<Resource, void>({
        path: `/api/resource/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name ResourceConfig
     * @summary 获取 config
     * @request GET:/api/resource/config
     */
    resourceConfig: (params: RequestParams = {}) =>
      this.request<AvueCrudConfigImpl, void>({
        path: `/api/resource/config`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name ResourceFind
     * @summary 查找所有记录
     * @request GET:/api/resource
     */
    resourceFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindResource, void>({
        path: `/api/resource`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhook-log
     * @name WebhookLogConfig
     * @summary 获取 config
     * @request GET:/api/webhook-log/config
     */
    webhookLogConfig: (params: RequestParams = {}) =>
      this.request<AvueCrudConfigImpl, void>({
        path: `/api/webhook-log/config`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhook-log
     * @name WebhookLogFind
     * @summary 查找所有记录
     * @request GET:/api/webhook-log
     */
    webhookLogFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindWebhookLog, void>({
        path: `/api/webhook-log`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhook-log
     * @name WebhookLogFindOne
     * @summary 查找记录
     * @request GET:/api/webhook-log/{id}
     */
    webhookLogFindOne: (id: number, params: RequestParams = {}) =>
      this.request<WebhookLog, void>({
        path: `/api/webhook-log/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhook-log
     * @name WebhookLogDelete
     * @summary 删除记录
     * @request DELETE:/api/webhook-log/{id}
     */
    webhookLogDelete: (id: number, params: RequestParams = {}) =>
      this.request<WebhookLog, void>({
        path: `/api/webhook-log/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags proxy-config
     * @name ProxyConfigDicData
     * @request GET:/api/proxy-config/dicData
     */
    proxyConfigDicData: (params: RequestParams = {}) =>
      this.request<DicData[], void>({
        path: `/api/proxy-config/dicData`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags proxy-config
     * @name ProxyConfigConfig
     * @summary 获取 config
     * @request GET:/api/proxy-config/config
     */
    proxyConfigConfig: (params: RequestParams = {}) =>
      this.request<AvueCrudConfigImpl, void>({
        path: `/api/proxy-config/config`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags proxy-config
     * @name ProxyConfigFind
     * @summary 查找所有记录
     * @request GET:/api/proxy-config
     */
    proxyConfigFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindProxyConfig, void>({
        path: `/api/proxy-config`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags proxy-config
     * @name ProxyConfigCreate
     * @summary 创建记录
     * @request POST:/api/proxy-config
     */
    proxyConfigCreate: (data: CreateProxyConfig, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/proxy-config`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags proxy-config
     * @name ProxyConfigUpdate
     * @summary 更新记录
     * @request PUT:/api/proxy-config
     */
    proxyConfigUpdate: (data: UpdateProxyConfig, params: RequestParams = {}) =>
      this.request<ProxyConfig, void>({
        path: `/api/proxy-config`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags proxy-config
     * @name ProxyConfigFindOne
     * @summary 查找记录
     * @request GET:/api/proxy-config/{id}
     */
    proxyConfigFindOne: (id: number, params: RequestParams = {}) =>
      this.request<ProxyConfig, void>({
        path: `/api/proxy-config/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags proxy-config
     * @name ProxyConfigDelete
     * @summary 删除记录
     * @request DELETE:/api/proxy-config/{id}
     */
    proxyConfigDelete: (id: number, params: RequestParams = {}) =>
      this.request<ProxyConfig, void>({
        path: `/api/proxy-config/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags custom-query
     * @name CustomQueryConfig
     * @summary 获取 config
     * @request GET:/api/custom-query/config
     */
    customQueryConfig: (params: RequestParams = {}) =>
      this.request<AvueCrudConfigImpl, void>({
        path: `/api/custom-query/config`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags custom-query
     * @name CustomQueryFind
     * @summary 查找所有记录
     * @request GET:/api/custom-query
     */
    customQueryFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindCustomQuery, void>({
        path: `/api/custom-query`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags custom-query
     * @name CustomQueryCreate
     * @summary 创建记录
     * @request POST:/api/custom-query
     */
    customQueryCreate: (data: CreateCustomQuery, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/custom-query`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags custom-query
     * @name CustomQueryUpdate
     * @summary 更新记录
     * @request PUT:/api/custom-query
     */
    customQueryUpdate: (data: UpdateCustomQuery, params: RequestParams = {}) =>
      this.request<CustomQuery, void>({
        path: `/api/custom-query`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags custom-query
     * @name CustomQueryFindOne
     * @summary 查找记录
     * @request GET:/api/custom-query/{id}
     */
    customQueryFindOne: (id: number, params: RequestParams = {}) =>
      this.request<CustomQuery, void>({
        path: `/api/custom-query/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags custom-query
     * @name CustomQueryDelete
     * @summary 删除记录
     * @request DELETE:/api/custom-query/{id}
     */
    customQueryDelete: (id: number, params: RequestParams = {}) =>
      this.request<CustomQuery, void>({
        path: `/api/custom-query/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
}
