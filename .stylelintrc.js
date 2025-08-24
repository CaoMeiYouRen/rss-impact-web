/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-cmyr'],
    rules: {
        'at-rule-no-unknown': null,
        'no-empty-source': null,
        'font-family-no-missing-generic-family-keyword': null,
        'no-descending-specificity': null,
        'length-zero-no-unit': null,
        'block-no-empty': null,
        'lightness-notation': null,
        'media-query-no-invalid': null,
        'selector-anb-no-unmatchable': null,
        'selector-class-pattern': null,
        'keyframes-name-pattern': null,
        'no-invalid-position-declaration': null,
    },
}
