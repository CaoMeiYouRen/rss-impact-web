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

export interface Config {
  option?: Option;
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
   * @example "admin"
   */
  username: string;
  /**
   * 密码
   * @example "123456"
   */
  password?: string;
  /**
   * 邮箱
   * @example "admin@example.com"
   */
  email: string;
  /**
   * 邮箱已验证
   * @example true
   */
  emailVerified: boolean;
  /**
   * 禁用密码登录
   * @example false
   */
  disablePasswordLogin: boolean;
  /**
   * 头像
   * @example "URL_ADDRESS"
   */
  avatar?: string;
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
  /**
   * Auth0 ID
   * 绑定的 auth0 账号
   * @example "github|114514"
   */
  auth0Id?: string;
}

export interface FindUser {
  data: User[];
  total: number;
  lastPage: number;
  currentPage: number;
}

export interface UpdateMe {
  /**
   * ID
   * @example 1
   */
  id?: number;
  /**
   * 用户名
   * @example "admin"
   */
  username?: string;
  /**
   * 邮箱
   * @example "admin@example.com"
   */
  email?: string;
}

export interface ResetPasswordDto {
  /**
   * 旧密码
   * @minLength 6
   * @maxLength 256
   * @example "123456"
   */
  oldPassword: string;
  /**
   * 新密码
   * @minLength 6
   * @maxLength 256
   * @example "654123"
   */
  newPassword: string;
}

export interface CreateUser {
  /**
   * 用户名
   * @example "admin"
   */
  username: string;
  /**
   * 密码
   * @example "123456"
   */
  password?: string;
  /**
   * 邮箱
   * @example "admin@example.com"
   */
  email: string;
  /**
   * 邮箱已验证
   * @example true
   */
  emailVerified: boolean;
  /**
   * 禁用密码登录
   * @example false
   */
  disablePasswordLogin: boolean;
  /**
   * 头像
   * @example "URL_ADDRESS"
   */
  avatar?: string;
  /**
   * 角色
   * @example ["admin"]
   */
  roles: string[];
  /**
   * Auth0 ID
   * 绑定的 auth0 账号
   * @example "github|114514"
   */
  auth0Id?: string;
}

export interface UpdateUser {
  /**
   * ID
   * @example 1
   */
  id?: number;
  /**
   * 用户名
   * @example "admin"
   */
  username?: string;
  /**
   * 密码
   * @example "123456"
   */
  password?: string;
  /**
   * 邮箱
   * @example "admin@example.com"
   */
  email?: string;
  /**
   * 邮箱已验证
   * @example true
   */
  emailVerified?: boolean;
  /**
   * 禁用密码登录
   * @example false
   */
  disablePasswordLogin?: boolean;
  /**
   * 头像
   * @example "URL_ADDRESS"
   */
  avatar?: string;
  /**
   * 角色
   * @example ["admin"]
   */
  roles?: string[];
  /**
   * Auth0 ID
   * 绑定的 auth0 账号
   * @example "github|114514"
   */
  auth0Id?: string;
}

export interface AuthMeta {
  enableRegister: boolean;
  disablePasswordLogin: boolean;
  disablePasswordRegister: boolean;
  enableAuth0: boolean;
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

export interface Auth0CallbackData {
  id_token: string;
  state?: string;
  sid?: string;
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

export interface NotificationConfig {
  /**
   * 推送类型
   * push-all-in-one 支持的推送类型
   * @example "ServerChanTurbo"
   */
  type:
    | "ServerChanTurbo"
    | "ServerChanV3"
    | "Dingtalk"
    | "CustomEmail"
    | "WechatRobot"
    | "WechatApp"
    | "PushDeer"
    | "PushPlus"
    | "IGot"
    | "Qmsg"
    | "XiZhi"
    | "Telegram"
    | "Discord"
    | "OneBot";
  /**
   * 推送配置
   * 具体配置请参考 push-all-in-one 文档，在线生成配置：https://push.cmyr.dev
   * @example {"SERVER_CHAN_TURBO_SENDKEY":""}
   */
  config: object;
  /**
   * 附加参数
   * 具体附加参数请参考 push-all-in-one 文档，在线生成配置：https://push.cmyr.dev
   * @example {"short":"1","noip":true,"channel":"1","openid":"1"}
   */
  option: object;
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
   * 仅总结
   * 如果有总结的话，只推送总结部分；否则从 摘要 中截取前 512 个字符
   * @example false
   */
  onlySummary: boolean;
  /**
   * 使用 AI 总结
   * 如果是，则用 AI 总结替换原本的总结
   */
  useAiSummary: boolean;
  /**
   * 增加 AI 总结
   * 如果是，则将 AI 总结 增加 到正文前，以方便通过 RSS 阅读器阅读
   */
  appendAiSummary: boolean;
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
   * 过滤资源体积，超过体积的资源不会下载。单位为 B (字节)。支持带单位，例如：1 GiB。设置为空禁用
   * @example "1 GiB"
   */
  maxSize?: string;
  /**
   * 磁盘最小空间(B)
   * 保留磁盘空间的最小值，小于这个值是将不会下载资源。单位为 B (字节)。支持带单位，例如：1 GiB。设置为空禁用
   * @example "1 GiB"
   */
  minDiskSize?: string;
  /**
   * 自动删除文件
   * 当磁盘空间不足时，是否自动删除最大的文件。如果未设置磁盘最小空间或禁用本项均不会生效
   * @example true
   */
  autoRemove?: boolean;
}

export interface AIConfig {
  /**
   * 类型
   * AI 大模型。目前仅支持 OpenAI
   * @example "openAI"
   */
  type: "openAI";
  /**
   * 操作
   * 要 AI 大模型进行的操作。默认为 总结正文。
   * @example "summary"
   */
  action: "summary" | "generateCategory";
  /**
   * API Key
   * OpenAI API Key
   * @minLength 0
   * @maxLength 128
   */
  apiKey: string;
  /**
   * 模型名称
   * OpenAI 模型名称。默认 gpt-3.5-turbo
   * @minLength 0
   * @maxLength 128
   * @example "gpt-3.5-turbo"
   */
  model?: string;
  /**
   * API 地址
   * OpenAI API 地址。注意需要带有版本号。默认 https://api.openai.com/v1
   * @minLength 0
   * @maxLength 2048
   * @example "https://api.openai.com/v1"
   */
  endpoint?: string;
  /**
   * 提示语
   * OpenAI 提示语。通过修改提示语也可以实现翻译等功能
   * @minLength 0
   * @maxLength 2048
   */
  prompt?: string;
  /**
   * 超时时间(秒)
   * 默认值 120 秒
   * @example 120
   */
  timeout?: number;
  /**
   * 温度参数
   * OpenAI 温度参数，越高越随机，反之越稳定。默认值 0
   * @min 0
   * @max 1
   * @example 0.1
   */
  temperature?: number;
  /**
   * 最大上下文长度
   * OpenAI 最大上下文长度。即一次提交多少 token 的字符。注意：提示文本加上"最大 token 数"的 token 数量不能超过模型的上下文长度。默认值 4096
   * @example 4096
   */
  maxContextLength?: number;
  /**
   * 最大 token 数
   * OpenAI 最大 token 数。注意一定要比模型的 最大上下文 小，否则可能会总结失败。默认值 2048
   * @example 2048
   */
  maxTokens?: number;
  /**
   * 最小正文长度
   * 当 RSS 的正文超过这个数字时，才启用 AI 总结。默认值 1024。设置为 0 则不限制。
   * @example 1024
   */
  minContentLength?: number;
  /**
   * 总结为空
   * 仅在总结为空时启用 AI 大模型
   */
  isOnlySummaryEmpty: boolean;
  /**
   * 分段提交
   * 如果正文的长度超过 最大 token 数，是否分段提交给 AI 大模型。如果为否，则只提交不超过 最大 token 数 的内容
   */
  isSplit: boolean;
  /**
   * 包含标题
   * 提交给 ChatGPT 的内容是否包含标题。如果启用，标题长度也将计算在正文长度中
   */
  isIncludeTitle: boolean;
  /**
   * 输出格式
   * 如果为 纯文本，则使用 摘要 输出 纯文本总结；如果为 HTML，则使用正文输出 HTML 总结。正文长度也将分别计算。
   * @example "text"
   */
  contentType: "text" | "html";
}

export interface RegularConfig {
  /**
   * 正文正则
   * 匹配正则
   * @minLength 0
   * @maxLength 2048
   * @example ""
   */
  contentRegular: string;
  /**
   * 正文替换内容
   * 用该内容替换正文的内容
   * @minLength 0
   * @maxLength 2048
   * @example ""
   */
  contentReplace: string;
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
   * 过滤链接
   * @minLength 0
   * @maxLength 2048
   * @example "url1|url2"
   */
  link?: string;
  /**
   * 过滤标题
   * @minLength 0
   * @maxLength 256
   * @example "标题1|标题2"
   */
  title?: string;
  /**
   * 过滤正文
   * @minLength 0
   * @maxLength 2048
   * @example "正文1|正文2"
   */
  content?: string;
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
   * @maxLength 256
   * @example "author1|author2"
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
  /**
   * 过滤附件URL
   * @minLength 0
   * @maxLength 2048
   * @example "url1|url2"
   */
  enclosureUrl?: string;
  /**
   * 过滤附件类型
   * @minLength 0
   * @maxLength 256
   * @example "type1|type2"
   */
  enclosureType?: string;
  /**
   * 过滤附件体积(B)
   * 单位为 B(字节)。支持带单位，例如：1 GiB。设置为空禁用
   * @example "1 GiB"
   */
  enclosureLength?: string;
}

export interface FilterOut {
  /**
   * 排除链接
   * @minLength 0
   * @maxLength 2048
   * @example "url1|url2"
   */
  link?: string;
  /**
   * 排除标题
   * @minLength 0
   * @maxLength 256
   * @example "标题1|标题2"
   */
  title?: string;
  /**
   * 排除正文
   * @minLength 0
   * @maxLength 2048
   * @example "正文1|正文2"
   */
  content?: string;
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
   * @maxLength 256
   * @example "author1|author2"
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
  /**
   * 排除附件URL
   * @minLength 0
   * @maxLength 2048
   * @example "url1|url2"
   */
  enclosureUrl?: string;
  /**
   * 排除附件类型
   * @minLength 0
   * @maxLength 256
   * @example "type1|type2"
   */
  enclosureType?: string;
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
   * @example "代理A"
   */
  name: string;
  /**
   * 代理URL
   * 支持 http/https/socks/socks5 协议。例如 http://127.0.0.1:8080
   * @example "http://127.0.0.1:8080"
   */
  url: string;
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
   * @example "查询A"
   */
  name: string;
  /**
   * 查询范围
   * 指定分类和指定订阅的配置互斥，只按照本项指定的范围查询
   * @example "all"
   */
  scope: "all" | "category" | "feed";
  /**
   * 指定分类
   * 支持选择多个分类
   * @example []
   */
  categories?: Category[];
  /**
   * 指定订阅
   * 支持选择多个订阅
   * @example []
   */
  feeds?: Feed[];
  /**
   * 输出格式
   * @example "rss2.0"
   */
  format: "rss2.0" | "atom" | "json";
  /**
   * 使用 AI 总结
   * 如果是，则用 AI 总结替换原本的总结
   */
  useAiSummary: boolean;
  /**
   * 增加 AI 总结
   * 如果是，则将 AI 总结 增加 到正文前，以方便通过 RSS 阅读器阅读
   */
  appendAiSummary: boolean;
  /**
   * 访问秘钥
   * 通过访问秘钥即可无需登录访问 RSS 订阅。一旦泄露，请立即修改！
   * @example "custom-query-key:2c28d0b6-47db-43a4-aff4-439edbe29200"
   */
  key: string;
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
   * 名称
   * @example "分类A"
   */
  name: string;
  /**
   * 简介
   * @example "分类A"
   */
  description?: string;
  /**
   * 订阅链接
   * @example []
   */
  feeds: Feed[];
  /**
   * 自定义查询列表
   * @example []
   */
  customQueries: CustomQuery[];
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
   * @example "https://blog.cmyr.ltd/archives/499d4cee.html"
   */
  link?: string;
  /**
   * 标题
   * @example "这是一个标题"
   */
  title?: string;
  /**
   * 正文
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
   * @example "CaoMeiYouRen"
   */
  author?: string;
  /**
   * 摘要
   * 纯文本格式，无 HTML
   * @example "这是一段内容摘要"
   */
  contentSnippet?: string;
  /**
   * 总结
   * @example "这是一段总结"
   */
  summary?: string;
  /**
   * AI 总结
   * @example "这是一段 AI 总结"
   */
  aiSummary?: string;
  /**
   * 分类列表
   * RSS 源定义的分类，和 本地RSS 的分类不是同一个
   * @example ["tag1","tag2"]
   */
  categories?: string[];
  /**
   * 附件URL
   * @example "http://bt.example.com"
   */
  enclosureUrl?: string;
  /**
   * 附件类型
   * @example "application/x-bittorrent"
   */
  enclosureType?: string;
  /**
   * 附件体积(B)
   * 单位为 B(字节)
   * @example 114514
   */
  enclosureLength?: number;
  /**
   * 附件体积
   * 单位为 B(字节)
   * @example "114.51 MiB"
   */
  enclosureLengthFormat?: string;
  /**
   * 订阅源
   * @example 1
   */
  feedId: number;
  /** 订阅源 */
  feed: Feed;
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
   * @example "https://blog.cmyr.ltd/atom.xml"
   */
  url: string;
  /**
   * 标题
   * @example "这是一个标题"
   */
  title: string;
  /**
   * 简介
   * @example "这是一段简介"
   */
  description?: string;
  /**
   * 封面 URL
   * @example "https://blog.cmyr.ltd/images/logo.svg"
   */
  imageUrl?: string;
  /**
   * Cron
   * @example "EVERY_10_MINUTES"
   */
  cron:
    | "EVERY_5_MINUTES"
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
   * 分类
   * @example 1
   */
  categoryId: number;
  /** 分类 */
  category: Category;
  /**
   * 是否抓取全文
   * 启用后，将用抓取到的结果替换文章中的正文部分。抓取全文功能为自动抓取，文本质量不做保证。
   * @example false
   */
  isFullText: boolean;
  /**
   * 代理配置
   * 选择不代理后保存即可禁用代理
   * @example 1
   */
  proxyConfigId?: number;
  /** 代理配置 */
  proxyConfig?: ProxyConfig;
  /**
   * 重试次数
   * 至多重试几次。默认为 0，即不重试。重试次数至多不超过 20
   * @example 3
   */
  maxRetries?: number;
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
  /**
   * 自定义查询列表
   * @example []
   */
  customQueries: CustomQuery[];
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
   * @example "Hook1"
   */
  name: string;
  /**
   * 类型
   * @example "webhook"
   */
  type: "notification" | "webhook" | "download" | "bitTorrent" | "aiSummary" | "regular";
  /**
   * 配置
   * @example {}
   */
  config: NotificationConfig | WebhookConfig | DownloadConfig | BitTorrentConfig | AIConfig | RegularConfig;
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
  proxyConfig?: ProxyConfig;
  /**
   * 订阅源列表
   * @example []
   */
  feeds: Feed[];
}

export interface QuickCreateFeed {
  /**
   * URL
   * @example "https://blog.cmyr.ltd/atom.xml"
   */
  url: string;
  /**
   * Cron
   * @example "EVERY_10_MINUTES"
   */
  cron:
    | "EVERY_5_MINUTES"
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
   * 分类
   * @example 1
   */
  categoryId: number;
  /**
   * Hook列表
   * @example []
   */
  hooks: Hook[];
}

export interface FileUploadDto {
  /**
   * 要上传的文件
   * @format binary
   */
  file: File;
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
   * @example "https://blog.cmyr.ltd/atom.xml"
   */
  url: string;
  /**
   * 标题
   * @example "这是一个标题"
   */
  title: string;
  /**
   * 简介
   * @example "这是一段简介"
   */
  description?: string;
  /**
   * 封面 URL
   * @example "https://blog.cmyr.ltd/images/logo.svg"
   */
  imageUrl?: string;
  /**
   * Cron
   * @example "EVERY_10_MINUTES"
   */
  cron:
    | "EVERY_5_MINUTES"
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
   * 分类
   * @example 1
   */
  categoryId: number;
  /** 分类 */
  category: Category;
  /**
   * 是否抓取全文
   * 启用后，将用抓取到的结果替换文章中的正文部分。抓取全文功能为自动抓取，文本质量不做保证。
   * @example false
   */
  isFullText: boolean;
  /**
   * 代理配置
   * 选择不代理后保存即可禁用代理
   * @example 1
   */
  proxyConfigId?: number;
  /** 代理配置 */
  proxyConfig?: ProxyConfig;
  /**
   * 重试次数
   * 至多重试几次。默认为 0，即不重试。重试次数至多不超过 20
   * @example 3
   */
  maxRetries?: number;
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
  /**
   * 自定义查询列表
   * @example []
   */
  customQueries: CustomQuery[];
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
   * @example "https://blog.cmyr.ltd/atom.xml"
   */
  url?: string;
  /**
   * 标题
   * @example "这是一个标题"
   */
  title?: string;
  /**
   * 简介
   * @example "这是一段简介"
   */
  description?: string;
  /**
   * 封面 URL
   * @example "https://blog.cmyr.ltd/images/logo.svg"
   */
  imageUrl?: string;
  /**
   * Cron
   * @example "EVERY_10_MINUTES"
   */
  cron?:
    | "EVERY_5_MINUTES"
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
   * 分类
   * @example 1
   */
  categoryId?: number;
  /** 分类 */
  category?: Category;
  /**
   * 是否抓取全文
   * 启用后，将用抓取到的结果替换文章中的正文部分。抓取全文功能为自动抓取，文本质量不做保证。
   * @example false
   */
  isFullText?: boolean;
  /**
   * 代理配置
   * 选择不代理后保存即可禁用代理
   * @example 1
   */
  proxyConfigId?: number;
  /** 代理配置 */
  proxyConfig?: ProxyConfig;
  /**
   * 重试次数
   * 至多重试几次。默认为 0，即不重试。重试次数至多不超过 20
   * @example 3
   */
  maxRetries?: number;
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
  /**
   * 自定义查询列表
   * @example []
   */
  customQueries?: CustomQuery[];
}

export interface FindFeed {
  data: Feed[];
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
   * 名称
   * @example "分类A"
   */
  name: string;
  /**
   * 简介
   * @example "分类A"
   */
  description?: string;
  /**
   * 订阅链接
   * @example []
   */
  feeds: Feed[];
  /**
   * 自定义查询列表
   * @example []
   */
  customQueries: CustomQuery[];
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
   * 名称
   * @example "分类A"
   */
  name?: string;
  /**
   * 简介
   * @example "分类A"
   */
  description?: string;
  /**
   * 订阅链接
   * @example []
   */
  feeds?: Feed[];
  /**
   * 自定义查询列表
   * @example []
   */
  customQueries?: CustomQuery[];
}

export interface FindCategory {
  data: Category[];
  total: number;
  lastPage: number;
  currentPage: number;
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
   * @example "Hook1"
   */
  name: string;
  /**
   * 类型
   * @example "webhook"
   */
  type: "notification" | "webhook" | "download" | "bitTorrent" | "aiSummary" | "regular";
  /**
   * 配置
   * @example {}
   */
  config: NotificationConfig | WebhookConfig | DownloadConfig | BitTorrentConfig | AIConfig | RegularConfig;
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
  proxyConfig?: ProxyConfig;
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
   * @example "Hook1"
   */
  name?: string;
  /**
   * 类型
   * @example "webhook"
   */
  type?: "notification" | "webhook" | "download" | "bitTorrent" | "aiSummary" | "regular";
  /**
   * 配置
   * @example {}
   */
  config?: NotificationConfig | WebhookConfig | DownloadConfig | BitTorrentConfig | AIConfig | RegularConfig;
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
   * @example "https://blog.cmyr.ltd/images/favicon-16x16-next.png"
   */
  url: string;
  /**
   * 文件名称
   * @example "favicon-16x16-next.png"
   */
  name?: string;
  /**
   * 文件路径
   * @example "/data/download/favicon-16x16-next.png"
   */
  path?: string;
  /**
   * 文件类型
   * @example "image/png"
   */
  type: string;
  /**
   * 文件体积(B)
   * 单位为 B
   * @example 114514
   */
  size: number;
  /**
   * 文件体积(B)
   * 单位为 B
   * @example "114.51 MiB"
   */
  sizeFormat?: string;
  /**
   * 文件哈希
   * @example "d41d8cd98f00b204e9800998ecf8427e"
   */
  hash: string;
  /**
   * 文件状态
   * @example "success"
   */
  status: "success" | "fail" | "skip" | "unknown";
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
   * @example "webhook"
   */
  type: "notification" | "webhook";
  /**
   * 文章列表
   * @example []
   */
  articles?: Article[];
  /**
   * 状态
   * @example "success"
   */
  status: "success" | "fail" | "unknown";
  /**
   * 状态码名称
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
   * @example "代理A"
   */
  name: string;
  /**
   * 代理URL
   * 支持 http/https/socks/socks5 协议。例如 http://127.0.0.1:8080
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
   * @example "代理A"
   */
  name?: string;
  /**
   * 代理URL
   * 支持 http/https/socks/socks5 协议。例如 http://127.0.0.1:8080
   * @example "http://127.0.0.1:8080"
   */
  url?: string;
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
   * @example "查询A"
   */
  name?: string;
  /**
   * 查询范围
   * 指定分类和指定订阅的配置互斥，只按照本项指定的范围查询
   * @example "all"
   */
  scope?: "all" | "category" | "feed";
  /**
   * 指定分类
   * 支持选择多个分类
   * @example []
   */
  categories?: Category[];
  /**
   * 指定订阅
   * 支持选择多个订阅
   * @example []
   */
  feeds?: Feed[];
  /**
   * 输出格式
   * @example "rss2.0"
   */
  format?: "rss2.0" | "atom" | "json";
  /**
   * 使用 AI 总结
   * 如果是，则用 AI 总结替换原本的总结
   */
  useAiSummary?: boolean;
  /**
   * 增加 AI 总结
   * 如果是，则将 AI 总结 增加 到正文前，以方便通过 RSS 阅读器阅读
   */
  appendAiSummary?: boolean;
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
   * @example "查询A"
   */
  name: string;
  /**
   * 查询范围
   * 指定分类和指定订阅的配置互斥，只按照本项指定的范围查询
   * @example "all"
   */
  scope: "all" | "category" | "feed";
  /**
   * 指定分类
   * 支持选择多个分类
   * @example []
   */
  categories?: Category[];
  /**
   * 指定订阅
   * 支持选择多个订阅
   * @example []
   */
  feeds?: Feed[];
  /**
   * 输出格式
   * @example "rss2.0"
   */
  format: "rss2.0" | "atom" | "json";
  /**
   * 使用 AI 总结
   * 如果是，则用 AI 总结替换原本的总结
   */
  useAiSummary: boolean;
  /**
   * 增加 AI 总结
   * 如果是，则将 AI 总结 增加 到正文前，以方便通过 RSS 阅读器阅读
   */
  appendAiSummary: boolean;
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

export interface DatabaseInfoDto {
  /**
   * 类型
   * 参考 typeorm 支持的数据库类型。
   * @example "sqlite"
   */
  type: string;
  /**
   * 体积(B)
   * 单位为 B
   * @example 114514
   */
  size: number;
  /**
   * 体积(B)
   * 单位为 B
   * @example "114.51 MiB"
   */
  sizeFormat: string;
  /**
   * 实体类数量
   * typeorm 的实体类数量
   * @example 10
   */
  entitiesLength: number;
  /**
   * 表格数量
   * SQL 表数量
   * @example 10
   */
  tableCount: number;
  /**
   * 索引数量
   * SQL 索引数量
   * @example 10
   */
  indexCount: number;
}

export interface OsInfoDto {
  /**
   * Node.js 版本
   * @example ""
   */
  nodeVersion: string;
  /**
   * 主机名
   * @example ""
   */
  hostname: string;
  /**
   * 操作系统类型
   * @example ""
   */
  type: string;
  /**
   * 操作系统平台
   * @example ""
   */
  platform: string;
  /**
   * 系统架构
   * @example ""
   */
  arch: string;
  /**
   * 系统版本
   * @example ""
   */
  release: string;
  /**
   * 总内存
   * @example ""
   */
  totalmem: string;
  /**
   * 可用内存
   * @example ""
   */
  freemem: string;
  /**
   * CPU 内核数
   * @example ""
   */
  cpuNum: number;
  /**
   * 系统运行时间
   * @example ""
   */
  osUptime: string;
  /**
   * 进程运行时间
   * @example ""
   */
  uptime: string;
}

export interface ReCountDto {
  /**
   * 天数
   * 默认为 30 天内
   * @example 30
   */
  dayNum: number;
}

export interface DailyCount {
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
   * 日期
   * @example "2024-01-01"
   */
  date: string;
  /**
   * 原始日期
   * @format date-time
   * @example "2024-01-01T00:00:00.000Z"
   */
  rawDate: Date;
  /**
   * 文章数量
   * @example 114
   */
  articleCount: number;
  /**
   * 资源数量
   * @example 514
   */
  resourceCount: number;
  /**
   * Webhook和通知日志数量
   * @example 233
   */
  webhookLogCount: number;
  /**
   * RSS订阅源数量
   * @example 233
   */
  feedCount: number;
  /**
   * 分类数量
   * @example 233
   */
  categoryCount: number;
  /**
   * Hook数量
   * @example 233
   */
  hookCount: number;
  /**
   * 自定义查询数量
   * @example 233
   */
  customQueryCount: number;
  /**
   * 代理数量
   * @example 233
   */
  proxyConfigCount: number;
  /**
   * 用户数量
   * @example 233
   */
  userCount: number;
}

export interface FindDailyCount {
  data: DailyCount[];
  total: number;
  lastPage: number;
  currentPage: number;
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
      this.request<Config, void>({
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
     * @name UserMeOption
     * @summary 获取个人信息 option
     * @request GET:/api/user/me/option
     */
    userMeOption: (params: RequestParams = {}) =>
      this.request<Option, void>({
        path: `/api/user/me/option`,
        method: "GET",
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
     * @name UserUpdateMe
     * @summary 更新个人信息
     * @request POST:/api/user/me
     */
    userUpdateMe: (data: UpdateMe, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/user/me`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserResetPasswordOption
     * @summary 获取重置密码 option
     * @request GET:/api/user/resetPassword/option
     */
    userResetPasswordOption: (params: RequestParams = {}) =>
      this.request<Option, void>({
        path: `/api/user/resetPassword/option`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserResetPassword
     * @summary 重置密码
     * @request POST:/api/user/resetPassword
     */
    userResetPassword: (data: ResetPasswordDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/user/resetPassword`,
        method: "POST",
        body: data,
        type: ContentType.Json,
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
     * @name AuthMeta
     * @summary 登录注册相关的元信息
     * @request GET:/api/auth/meta
     */
    authMeta: (params: RequestParams = {}) =>
      this.request<AuthMeta, any>({
        path: `/api/auth/meta`,
        method: "GET",
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
     * @name AuthLoginByAuth0
     * @summary 基于 Auth0 登录
     * @request GET:/api/auth/login
     */
    authLoginByAuth0: (
      query: {
        redirect: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/auth/login`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthRegisterByAuth0
     * @summary 基于 Auth0 注册
     * @request GET:/api/auth/register
     */
    authRegisterByAuth0: (
      query: {
        redirect: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/auth/register`,
        method: "GET",
        query: query,
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
     * @tags auth
     * @name AuthCallback
     * @summary 处理 Auth0 回调
     * @request POST:/api/auth/callback
     */
    authCallback: (data: Auth0CallbackData, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/auth/callback`,
        method: "POST",
        body: data,
        type: ContentType.Json,
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
     * @tags feed
     * @name FeedQuickCreateOption
     * @summary 快速添加订阅的配置项
     * @request GET:/api/feed/quickCreate/option
     */
    feedQuickCreateOption: (params: RequestParams = {}) =>
      this.request<Option, void>({
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
     * @name FeedImportByOpmlOption
     * @summary 导入 OPML 文件的配置项
     * @request GET:/api/feed/import/option
     */
    feedImportByOpmlOption: (params: RequestParams = {}) =>
      this.request<Option, void>({
        path: `/api/feed/import/option`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedImportByOpml
     * @summary 从 OPML 文件导入订阅
     * @request POST:/api/feed/import
     */
    feedImportByOpml: (data: FileUploadDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/feed/import`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedExportByOpml
     * @summary 导出订阅为 OPML 文件
     * @request GET:/api/feed/export
     */
    feedExportByOpml: (params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/api/feed/export`,
        method: "GET",
        format: "json",
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
      this.request<Config, void>({
        path: `/api/feed/config`,
        method: "GET",
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
      this.request<Config, void>({
        path: `/api/category/config`,
        method: "GET",
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
     * @name ArticleTypeDicData
     * @request GET:/api/article/typeDicData
     */
    articleTypeDicData: (params: RequestParams = {}) =>
      this.request<DicData[], void>({
        path: `/api/article/typeDicData`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags article
     * @name ArticleDicData
     * @request GET:/api/article/dicData
     */
    articleDicData: (params: RequestParams = {}) =>
      this.request<DicData[], void>({
        path: `/api/article/dicData`,
        method: "GET",
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
      this.request<Config, void>({
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
      this.request<Config, void>({
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
      this.request<Config, void>({
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
      this.request<Config, void>({
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
      this.request<Config, void>({
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
     * @name CustomQueryCustomQuery
     * @request GET:/api/custom-query/rss/{id}
     */
    customQueryCustomQuery: (
      id: number,
      query: {
        key: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/api/custom-query/rss/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags custom-query
     * @name CustomQueryUpdate
     * @summary 更新 CustomQuery
     * @request PUT:/api/custom-query
     */
    customQueryUpdate: (data: UpdateCustomQuery, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/custom-query`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
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
      this.request<FindCustomQuery, any>({
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
      this.request<CustomQuery, any>({
        path: `/api/custom-query`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags custom-query
     * @name CustomQueryDicData
     * @request GET:/api/custom-query/dicData
     */
    customQueryDicData: (params: RequestParams = {}) =>
      this.request<DicData[], any>({
        path: `/api/custom-query/dicData`,
        method: "GET",
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
      this.request<Config, any>({
        path: `/api/custom-query/config`,
        method: "GET",
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
      this.request<CustomQuery, any>({
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
      this.request<CustomQuery, any>({
        path: `/api/custom-query/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name SystemGetDatabaseInfoOption
     * @summary 获取数据库信息 option
     * @request GET:/api/system/getDatabaseInfo/option
     */
    systemGetDatabaseInfoOption: (params: RequestParams = {}) =>
      this.request<Option, void>({
        path: `/api/system/getDatabaseInfo/option`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name SystemGetDatabaseInfo
     * @summary 获取数据库信息
     * @request GET:/api/system/getDatabaseInfo
     */
    systemGetDatabaseInfo: (params: RequestParams = {}) =>
      this.request<DatabaseInfoDto, void>({
        path: `/api/system/getDatabaseInfo`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name SystemGetOsInfoOption
     * @summary 获取系统信息 option
     * @request GET:/api/system/getOsInfo/option
     */
    systemGetOsInfoOption: (params: RequestParams = {}) =>
      this.request<Option, void>({
        path: `/api/system/getOsInfo/option`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name SystemGetOsInfo
     * @summary 获取系统信息
     * @request GET:/api/system/getOsInfo
     */
    systemGetOsInfo: (params: RequestParams = {}) =>
      this.request<OsInfoDto, void>({
        path: `/api/system/getOsInfo`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name SystemSqliteVacuum
     * @summary 释放 sqlite 数据库未使用空间
     * @request POST:/api/system/sqliteVacuum
     */
    systemSqliteVacuum: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/system/sqliteVacuum`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags system
     * @name SystemDisableEmptyFeeds
     * @summary 禁用不包含任何 Hook 和 自定义查询的订阅
     * @request POST:/api/system/disableEmptyFeeds
     */
    systemDisableEmptyFeeds: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/system/disableEmptyFeeds`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags daily-count
     * @name DailyCountReCountOption
     * @summary 获取 重新统计接口 option
     * @request GET:/api/daily-count/reCount/option
     */
    dailyCountReCountOption: (params: RequestParams = {}) =>
      this.request<Option, void>({
        path: `/api/daily-count/reCount/option`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description 需要在后台手动执行，将一定时间内的日志重新统计
     *
     * @tags daily-count
     * @name DailyCountReCount
     * @summary 重新统计接口
     * @request POST:/api/daily-count/reCount
     */
    dailyCountReCount: (data: ReCountDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/daily-count/reCount`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags daily-count
     * @name DailyCountConfig
     * @summary 获取 config
     * @request GET:/api/daily-count/config
     */
    dailyCountConfig: (params: RequestParams = {}) =>
      this.request<Config, void>({
        path: `/api/daily-count/config`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags daily-count
     * @name DailyCountFind
     * @summary 查找所有记录
     * @request GET:/api/daily-count
     */
    dailyCountFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindDailyCount, void>({
        path: `/api/daily-count`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags daily-count
     * @name DailyCountFindOne
     * @summary 查找记录
     * @request GET:/api/daily-count/{id}
     */
    dailyCountFindOne: (id: number, params: RequestParams = {}) =>
      this.request<DailyCount, void>({
        path: `/api/daily-count/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
