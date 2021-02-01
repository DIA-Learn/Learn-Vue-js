import Vue from 'vue'

new Vue({
    el: '#btn',
    data: {
        name: 'Vue.js'
    },
    methods: {
        onButton: function (event) {
            alert('Hello ' + this.name + '!')
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})
