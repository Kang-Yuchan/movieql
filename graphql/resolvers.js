import { people, getById } from "../DB/db";


const resolvers = {
    Query: {
        people:() => people,
        person:(_, { id }) => getById(id) 
    }
};

export default resolvers;