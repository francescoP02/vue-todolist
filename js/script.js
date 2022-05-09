const app = new Vue(
    {
        el : `#root`,
        data: {
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
        }
    }
)