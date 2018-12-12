const initialState = [
    {
        id: 1,
        recipe: {
            id: 1,
            name: 'recipe 1'
        },
        date: '17/12/2018'
    },
    {
        id: 2,
        recipe: {
            id: 2,
            name: 'recipe 2'
        },
        date: '18/12/2018'
    },
    {
        id: 3,
        recipe: {
            id: 3,
            name: 'recipe 3'
        },
        date: '19/12/2018'
    },
    {
        id: 4,
        recipe: {
            id: 4,
            name: 'recipe 4'
        },
        date: '20/12/2018'
    },
    {
        id: 5,
        recipe: {
            id: 5,
            name: 'recipe 5'
        },
        date: '21/12/2018'
    },
    {
        id: 6,
        recipe: {
            id: 6,
            name: 'recipe 6'
        },
        date: '22/12/2018'
    },
    {
        id: 7,
        recipe: {
            id: 7,
            name: 'recipe 7'
        },
        date: '23/12/2018'
    },
]

export default (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state
    }
}