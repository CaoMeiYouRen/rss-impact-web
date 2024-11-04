const __WARN__ = process.env.NODE_ENV === 'production' ? 1 : 0
module.exports = {
    root: true,
    extends: [
        'cmyr/vue3',
    ],
    rules: {
        'vue/no-multiple-template-root': [1],
        'vue/multi-word-component-names': [0],
        'vue/no-v-model-argument': [0],
        'max-lines': [__WARN__, { max: 500 }], // 强制文件的最大行数
    },
}
