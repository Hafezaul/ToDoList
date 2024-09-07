import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

createApp({
    data() {
        return {
            todoList: [
                { text: 'Learn HTML', start: '07.00', end: '08.00', done: false },
                { text: 'Learn CSS', start: '08.00', end: '09.00', done: false },
                { text: 'Learn Javascript', start: '09.00', end: '10.00', done: false }
            ],
            newActivity: '',
            newStartTime: '',
            newEndTime: ''
        };
    },
    methods: {
        addActivity() {
            let newItem = {
                text: this.newActivity,
                start: this.newStartTime,
                end: this.newEndTime,
                done: false
            };
            this.todoList.push(newItem);

            // Reset input fields after adding a new activity
            this.newActivity = '';
            this.newStartTime = '';
            this.newEndTime = '';
        },
        deleteActivity(index) {
            if (confirm('Are you sure you want to delete this item?')) {
                this.todoList.splice(index, 1);
            }
        },
        toggleDone(index) {
            this.todoList[index].done = !this.todoList[index].done;  // Toggle status 'done'
        }
    }
}).mount('#app');
