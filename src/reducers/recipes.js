const initialState = [
    {
        id: 1,
        name: 'recipe 1',
        cookingTime: '1h',
        instruction: 'abc',
        image: '../img/1.jpeg'
    },
    {
        id: 2,
        name: 'recipe 2',
        cookingTime: '1h',
        instruction: 'abc',
        image: '../../img/1.jpeg'
    },
    {
        id: 3,
        name: 'recipe 3',
        cookingTime: '1h',
        instruction: 'abc',
        image: '../img/1.jpeg'
    },
    {
        id: 4,
        name: 'recipe 4',
        cookingTime: '1h',
        instruction: 'abc',
        image: '../img/1.jpeg'
    },
    {
        id: 5,
        name: 'recipe 5',
        cookingTime: '1h',
        instruction: 'abc',
        image: '../img/1.jpeg'
    },
    {
        id: 6,
        name: 'recipe 6',
        cookingTime: '1h',
        instruction: 'abc',
        image: '../img/1.jpeg'
    },
    {
        id: 7,
        name: 'recipe 7',
        cookingTime: '1h',
        instruction: 'abc',
        image: '../img/1.jpeg'
    },
    {
        id: 8,
        name: 'recipe 8',
        cookingTime: '1h',
        instruction: 'abc',
        image: '../img/1.jpeg'
    },
]

export default (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state
    }
}