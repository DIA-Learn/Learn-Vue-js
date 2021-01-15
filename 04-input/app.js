let app = new Vue({
    el: '#app',
    data: {
        message: '안녕하세요! Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split(' ').reverse().join(' ')
        }
    }
})

let app2 = new Vue({
    el: '#app2',
    data: {
        message2: '안녕하세요! Vue.js!'
    }
})
