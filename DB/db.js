export const people = [
    {   
        id: "0",
        name: "Yuchan",
        age: 23,
        gender: "male"
    },
    {   
        id: "1",
        name: "Miku",
        age: 27,
        gender: "female"
    },
    {   
        id: "2",
        name: "Junko",
        age: 58,
        gender: "female"
    },
    {
        id: "3",
        name: "Masa",
        age: 60,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
};