module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        //vue
        //'plugin:vue/vue3-essential' //Lv1
        'plugin:vue/vue3-strongly-recommended', //Lv2
        //'plugin:vue/vue3-recommended' //Lv3
        //js
        'eslint:recommended'
    ],
    parserOption: {
        parser: 'babel-eslint'
    },
    rules: {
        "vue/html-closing-bracket-newline": ["error", {
                "singleline": "never",
                "multiline": "never"

        }]
    }
}