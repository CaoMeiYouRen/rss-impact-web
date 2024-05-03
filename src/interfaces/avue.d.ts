import { Option, Column, Page, DicData } from '@cao-mei-you-ren/avue-types'

export { DicData }

export declare interface AvueCrudConfig {
    option?: AvueCrudOption
    [key: string]: any
}

export declare interface AvueCrudOption extends Option {
    column?: Field[]
    [key: string]: any
}

export declare interface AvueFormConfig {
    option?: AvueFormOption
    [key: string]: any
}

/**
 * Avue 表单属性
 *
 * @author CaoMeiYouRen
 * @date 2022-02-22
 * @export
 * @interface AvueFormOption
 */
export declare interface AvueFormOption {
    /**
     *弹出表单的标题的统一宽度
     *
     * @author CaoMeiYouRen
     * @date 2022-02-22
     */
    labelWidth?: number
    /**
     *表单操作菜单的显影
     *
     * @author CaoMeiYouRen
     * @date 2022-02-22
     */
    menuBtn?: boolean
    /**
     *表单操作菜单栅格占据的列数
     *
     * @author CaoMeiYouRen
     * @date 2022-02-22
     */
    menuSpan?: number
    /**
     *表单菜单按钮的排列方式left/center/right
     *
     * @author CaoMeiYouRen
     * @date 2022-02-22
     */
    menuPosition?: 'left' | 'center' | 'right'
    /**
     *表格总控件大小
     *
     * @author CaoMeiYouRen
     * @date 2022-02-22
     */
    size?: 'medium' | 'small' | 'mini'
    /**
     *重置不清空的字段
     *
     * @author CaoMeiYouRen
     * @date 2022-02-22
     */
    clearExclude?: any[]
    /**
     * 提交按钮显隐
     *
     * @author CaoMeiYouRen
     * @date 2022-02-22
     */
    submitBtn?: boolean
    /**
     * 提交按钮文案
     *
     * @author CaoMeiYouRen
     * @date 2022-02-22
     */
    submitText?: string
    /**
     * 清空按钮显隐
     *
     * @author CaoMeiYouRen
     * @date 2022-02-22
     */
    emptyBtn?: boolean
    /**
     * 数据为空文案
     *
     * @author CaoMeiYouRen
     * @date 2022-02-22
     */
    emptyText?: string
    /**
     *表格列配置属性
     *
     * @author CaoMeiYouRen
     * @date 2022-02-22
     */
    column?: Field[]
    /**
     *分组表单,放入正常的column配置就行
     *
     * @author CaoMeiYouRen
     * @date 2022-02-22
     */
    group?: Field[]
    [key: string]: any
}

export declare interface CrudOptions {
    routes?: CrudRoutes
}

export declare interface CrudOptionsWithModel extends CrudOptions {
    name?: string | string[]
    model: any
    fields?: Fields
    config?: ((instance?: any) => AvueCrudConfig | Promise<AvueCrudConfig>) | AvueCrudConfig
}

export declare interface CrudRoute {
    decorators?: MethodDecorator[]
}

export declare interface CrudRouteForFind extends CrudRoute {
    paginate?: PaginateKeys | false
    limit?: number
    page?: number
    populate?: string | any
    sort?: string | any
    where?: any
    skip?: number
    select?: string | any
    collation?: any
    dto?: any
}

export declare interface CrudRouteForFindOne extends CrudRoute {
    populate?: string | any
    where?: any
    select?: any
}

export declare interface CrudRoutes {
    grid?: false
    form?: false
    find?: CrudRouteForFind | false
    findOne?: CrudRouteForFindOne | false
    create?: CrudRouteWithDto | false
    update?: CrudRouteWithDto | false
    delete?: CrudRoute | false
    config?: CrudRoute | false
}

export declare interface CrudRouteWithDto extends CrudRoute {
    dto?: any
    transform?: (data: any) => any
}

export declare interface Field extends Column {
    type?: 'array' | 'hide' | 'text' | 'input' | 'autocomplete' | 'textarea' | 'number' | 'checkbox' | 'checkbox-button' | 'radio' | 'date' | 'dates' | 'week' | 'month' | 'year' | 'daterange' | 'time' | 'datetime' | 'datetimerange' | 'switch' | 'yesno' | 'slider' | 'password' | 'color' | 'select' | 'cascader' | 'transfer' | 'rate' | 'tag' | 'img' | 'image' | 'button' | 'json-editor' | 'upload-file' | 'image-uploader' | 'tree-select' | 'video-uploader' | 'quill-editor' | 'markdown-editor' | 'bmap' | 'codemirror' | 'gallery' | 'url' | 'upload'
    _type?: string
    [key: string]: any
}

export declare interface OptionItem {
    text: string
    value: string
}

export declare interface PaginateKeys extends Page {
    data?: string
    total?: string
    lastPage?: string
    currentPage?: string
}

export declare interface Fields {
    [key: string]: Field
}
