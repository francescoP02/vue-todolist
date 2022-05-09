const app = new Vue(
    {
        el : `#root`,
        data: {
            todos: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Lavare i piatti',
                    done: false
                },
                {
                    text: 'Fare gli esercizi',
                    done: false
                },
                {
                    text: 'Preparare il pranzo',
                    done: true
                },
            ],
        },
        methods: {

        }
    }
)