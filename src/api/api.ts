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

export interface User {
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * 创建时间
   * @format date-time
   * @example "2024-04-04T10:21:14.933Z"
   */
  createdAt: string;
  /**
   * 更新时间
   * @format date-time
   * @example "2024-04-04T10:21:14.934Z"
   */
  updatedAt: string;
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
  password: string;
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
   * @example "rss-impact:7111ea8e-ed01-4341-aa88-1759c5453189"
   */
  accessToken: string;
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
  password: string;
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

export interface EnclosureImpl {
  /**
   * 附件URL
   * @minLength 0
   * @maxLength 1024
   * @example "http://v2.uploadbt.com"
   */
  url: string;
  /**
   * 附件长度
   * @example 114514
   */
  length?: number;
  /**
   * 附件媒体类型
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
   * @example "2024-04-04T10:21:14.933Z"
   */
  createdAt: string;
  /**
   * 更新时间
   * @format date-time
   * @example "2024-04-04T10:21:14.934Z"
   */
  updatedAt: string;
  /**
   * 所属用户ID
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
   * @example "2024-04-04T10:21:15.300Z"
   */
  publishDate?: string;
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
   * @example ["tag1","tag2"]
   */
  categories?: string[];
  /** 附件 */
  enclosure?: EnclosureImpl;
  /**
   * 订阅源ID
   * @example 1
   */
  feedId: number;
  /** 订阅源 */
  feed: Feed;
}

export interface Filter {
  /**
   * 条数限制
   * @example 20
   */
  limit?: number;
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
   * @minLength 0
   * @maxLength 256
   * @example "tag1|tag2"
   */
  categories?: string;
  /**
   * 过滤时间(秒)
   * @example 3600
   */
  time?: number;
}

export interface FilterOut {
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
   * @example "2024-04-04T10:21:14.933Z"
   */
  createdAt: string;
  /**
   * 更新时间
   * @format date-time
   * @example "2024-04-04T10:21:14.934Z"
   */
  updatedAt: string;
  /**
   * 所属用户ID
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
   * @minLength 0
   * @maxLength 128
   * @example "webhook"
   */
  type: string;
  /**
   * 配置
   * @example {}
   */
  config: object;
  /** 过滤条件 */
  filter: Filter;
  /**
   * 过滤出条件
   * 去掉不要的内容
   */
  filterout: FilterOut;
  /**
   * 反转模式
   * 如果服务可访问，则认为是故障
   * @example false
   */
  isReversed: boolean;
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
   * @example "2024-04-04T10:21:14.933Z"
   */
  createdAt: string;
  /**
   * 更新时间
   * @format date-time
   * @example "2024-04-04T10:21:14.934Z"
   */
  updatedAt: string;
  /**
   * 所属用户ID
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
   * @minLength 0
   * @maxLength 256
   * @example "EVERY_10_MINUTES"
   */
  cron: string;
  /**
   * 是否启用
   * @example true
   */
  isEnabled: boolean;
  /**
   * 分组ID
   * @example 1
   */
  categoryId: number;
  /** 分组 */
  category: Category;
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
   * @example "2024-04-04T10:21:14.933Z"
   */
  createdAt: string;
  /**
   * 更新时间
   * @format date-time
   * @example "2024-04-04T10:21:14.934Z"
   */
  updatedAt: string;
  /**
   * 所属用户ID
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * 分组名称
   * @minLength 0
   * @maxLength 256
   * @example "分组A"
   */
  name: string;
  /**
   * 分组简介
   * @minLength 0
   * @maxLength 2048
   * @example "分组A"
   */
  description?: string;
  /**
   * 订阅链接
   * @example []
   */
  feeds: Feed[];
}

export interface CreateFeed {
  /**
   * 所属用户ID
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
   * @minLength 0
   * @maxLength 256
   * @example "EVERY_10_MINUTES"
   */
  cron: string;
  /**
   * 是否启用
   * @example true
   */
  isEnabled: boolean;
  /**
   * 分组ID
   * @example 1
   */
  categoryId: number;
  /** 分组 */
  category: Category;
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
   * 所属用户ID
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
   * @minLength 0
   * @maxLength 256
   * @example "EVERY_10_MINUTES"
   */
  cron?: string;
  /**
   * 是否启用
   * @example true
   */
  isEnabled?: boolean;
  /**
   * 分组ID
   * @example 1
   */
  categoryId?: number;
  /** 分组 */
  category?: Category;
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

export interface WebhookLog {
  /**
   * ID
   * @example 1
   */
  id: number;
  /**
   * 创建时间
   * @format date-time
   * @example "2024-04-04T10:21:14.933Z"
   */
  createdAt: string;
  /**
   * 更新时间
   * @format date-time
   * @example "2024-04-04T10:21:14.934Z"
   */
  updatedAt: string;
  /**
   * 所属用户ID
   * @example 1
   */
  userId: number;
  /** 所属用户 */
  user: User;
  /**
   * 响应体
   * @example {"message":"OK"}
   */
  data?: object;
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
   * 响应头
   * @example {}
   */
  headers?: object;
  /**
   * 订阅源ID
   * @example 1
   */
  feedId: number;
  /** 订阅源 */
  feed: Feed;
  /**
   * HookID
   * @example 1
   */
  hookId: number;
  /** Hook */
  hook: Hook;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
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
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
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

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
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
  /**
   * No description
   *
   * @name AppControllerGetHelloGet
   * @request GET:/
   */
  appControllerGetHelloGet = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "GET",
      ...params,
    });

  /**
   * No description
   *
   * @name AppControllerGetHelloPost
   * @request POST:/
   */
  appControllerGetHelloPost = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "POST",
      ...params,
    });

  /**
   * No description
   *
   * @name AppControllerGetHelloPut
   * @request PUT:/
   */
  appControllerGetHelloPut = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "PUT",
      ...params,
    });

  /**
   * No description
   *
   * @name AppControllerGetHelloDelete
   * @request DELETE:/
   */
  appControllerGetHelloDelete = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "DELETE",
      ...params,
    });

  /**
   * No description
   *
   * @name AppControllerGetHelloPatch
   * @request PATCH:/
   */
  appControllerGetHelloPatch = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "PATCH",
      ...params,
    });

  /**
   * No description
   *
   * @name AppControllerGetHelloOptions
   * @request OPTIONS:/
   */
  appControllerGetHelloOptions = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "OPTIONS",
      ...params,
    });

  /**
   * No description
   *
   * @name AppControllerGetHelloHead
   * @request HEAD:/
   */
  appControllerGetHelloHead = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "HEAD",
      ...params,
    });

  /**
   * No description
   *
   * @name AppControllerGetHelloSearch
   * @request SEARCH:/
   */
  appControllerGetHelloSearch = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "SEARCH",
      ...params,
    });

  user = {
    /**
     * No description
     *
     * @tags user
     * @name UserControllerConfig
     * @summary 获取 config
     * @request GET:/user/config
     */
    userControllerConfig: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/config`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerFind
     * @request GET:/user
     */
    userControllerFind: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerCreate
     * @request POST:/user
     */
    userControllerCreate: (data: CreateUser, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerUpdate
     * @request PUT:/user
     */
    userControllerUpdate: (data: UpdateUser, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerMe
     * @summary 获取个人信息
     * @request GET:/user/me
     */
    userControllerMe: (params: RequestParams = {}) =>
      this.request<User, void>({
        path: `/user/me`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerDicData
     * @summary 获取 dicData
     * @request GET:/user/dicData
     */
    userControllerDicData: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/dicData`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerFindOne
     * @summary 查找记录
     * @request GET:/user/{id}
     */
    userControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name UserControllerDelete
     * @request DELETE:/user/{id}
     */
    userControllerDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerLogin
     * @summary 登录
     * @request POST:/auth/login
     */
    authControllerLogin: (data: LoginDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  feed = {
    /**
     * No description
     *
     * @tags feed
     * @name FeedControllerCreate
     * @summary 创建记录
     * @request POST:/feed
     */
    feedControllerCreate: (data: CreateFeed, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/feed`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedControllerUpdate
     * @summary 更新记录
     * @request PUT:/feed
     */
    feedControllerUpdate: (data: UpdateFeed, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/feed`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedControllerFind
     * @summary 查找所有记录
     * @request GET:/feed
     */
    feedControllerFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/feed`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedControllerConfig
     * @summary 获取 config
     * @request GET:/feed/config
     */
    feedControllerConfig: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/feed/config`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedControllerFindOne
     * @summary 查找记录
     * @request GET:/feed/{id}
     */
    feedControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/feed/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FeedControllerDelete
     * @summary 删除记录
     * @request DELETE:/feed/{id}
     */
    feedControllerDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/feed/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  category = {
    /**
     * No description
     *
     * @tags category
     * @name CategoryControllerConfig
     * @summary 获取 config
     * @request GET:/category/config
     */
    categoryControllerConfig: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category/config`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryControllerFind
     * @summary 查找所有记录
     * @request GET:/category
     */
    categoryControllerFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/category`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryControllerCreate
     * @summary 创建记录
     * @request POST:/category
     */
    categoryControllerCreate: (data: Category, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryControllerUpdate
     * @summary 更新记录
     * @request PUT:/category
     */
    categoryControllerUpdate: (data: Category, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryControllerFindOne
     * @summary 查找记录
     * @request GET:/category/{id}
     */
    categoryControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags category
     * @name CategoryControllerDelete
     * @summary 删除记录
     * @request DELETE:/category/{id}
     */
    categoryControllerDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  article = {
    /**
     * No description
     *
     * @tags article
     * @name ArticleControllerConfig
     * @summary 获取 config
     * @request GET:/article/config
     */
    articleControllerConfig: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/article/config`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags article
     * @name ArticleControllerFind
     * @summary 查找所有记录
     * @request GET:/article
     */
    articleControllerFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/article`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags article
     * @name ArticleControllerCreate
     * @summary 创建记录
     * @request POST:/article
     */
    articleControllerCreate: (data: Article, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/article`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags article
     * @name ArticleControllerUpdate
     * @summary 更新记录
     * @request PUT:/article
     */
    articleControllerUpdate: (data: Article, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/article`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags article
     * @name ArticleControllerFindOne
     * @summary 查找记录
     * @request GET:/article/{id}
     */
    articleControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/article/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags article
     * @name ArticleControllerDelete
     * @summary 删除记录
     * @request DELETE:/article/{id}
     */
    articleControllerDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/article/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  hook = {
    /**
     * No description
     *
     * @tags hook
     * @name HookControllerConfig
     * @summary 获取 config
     * @request GET:/hook/config
     */
    hookControllerConfig: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/hook/config`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags hook
     * @name HookControllerFind
     * @summary 查找所有记录
     * @request GET:/hook
     */
    hookControllerFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/hook`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags hook
     * @name HookControllerCreate
     * @summary 创建记录
     * @request POST:/hook
     */
    hookControllerCreate: (data: Hook, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/hook`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags hook
     * @name HookControllerUpdate
     * @summary 更新记录
     * @request PUT:/hook
     */
    hookControllerUpdate: (data: Hook, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/hook`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags hook
     * @name HookControllerFindOne
     * @summary 查找记录
     * @request GET:/hook/{id}
     */
    hookControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/hook/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags hook
     * @name HookControllerDelete
     * @summary 删除记录
     * @request DELETE:/hook/{id}
     */
    hookControllerDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/hook/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  resource = {
    /**
     * No description
     *
     * @tags resource
     * @name ResourceControllerDelete
     * @summary 删除记录
     * @request DELETE:/resource/{id}
     */
    resourceControllerDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/resource/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name ResourceControllerFindOne
     * @summary 查找记录
     * @request GET:/resource/{id}
     */
    resourceControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/resource/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name ResourceControllerConfig
     * @summary 获取 config
     * @request GET:/resource/config
     */
    resourceControllerConfig: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/resource/config`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name ResourceControllerFind
     * @summary 查找所有记录
     * @request GET:/resource
     */
    resourceControllerFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/resource`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  webhookLog = {
    /**
     * No description
     *
     * @tags webhook-log
     * @name WebhookLogControllerConfig
     * @summary 获取 config
     * @request GET:/webhook-log/config
     */
    webhookLogControllerConfig: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/webhook-log/config`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhook-log
     * @name WebhookLogControllerFind
     * @summary 查找所有记录
     * @request GET:/webhook-log
     */
    webhookLogControllerFind: (
      query?: {
        /** Query options */
        query?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/webhook-log`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhook-log
     * @name WebhookLogControllerCreate
     * @summary 创建记录
     * @request POST:/webhook-log
     */
    webhookLogControllerCreate: (data: WebhookLog, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/webhook-log`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhook-log
     * @name WebhookLogControllerUpdate
     * @summary 更新记录
     * @request PUT:/webhook-log
     */
    webhookLogControllerUpdate: (data: WebhookLog, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/webhook-log`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhook-log
     * @name WebhookLogControllerFindOne
     * @summary 查找记录
     * @request GET:/webhook-log/{id}
     */
    webhookLogControllerFindOne: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/webhook-log/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags webhook-log
     * @name WebhookLogControllerDelete
     * @summary 删除记录
     * @request DELETE:/webhook-log/{id}
     */
    webhookLogControllerDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/webhook-log/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
}
