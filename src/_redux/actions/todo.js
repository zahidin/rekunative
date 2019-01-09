export function todoAll(){
    return {
        type: 'TODO_ALL',
        payload: [
            {id: 1, title: "Eating"},
            {id: 2, title: "Breath"},
        ]
    }
}