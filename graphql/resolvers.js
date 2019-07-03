import { people } from "../DB/db";


const resolvers = {
    Query: {
        people:() => people,
        person:() => getById() 
    }
};

export default resolvers;