const app = new Vue(
    {
        el : `#root`,
        data: {
            newTodoInput: '',
            todos: [
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Lavare i piatti',
                    done: true,
                },
                {
                    text: 'Fare gli esercizi',
                    done: false,
                },
                {
                    text: 'Preparare il pranzo',
                    done: false,
                },
            ],
        },
        methods: {
            removeItem: function (index) {
                this.todos.splice(index,1);
            },

            addElement: function() {
                if (this.newTodoInput !== "") {
                    this.todos.push({text: this.newTodoInput, done: false});
                    this.newTodoInput = ``;
                }
            },
        }
    }
)