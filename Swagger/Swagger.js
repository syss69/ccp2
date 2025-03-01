import users from "./SwaggerUser.js"
import missions from "./SwaggerMission.js"
import candidatures from "./SwaggerCandidatures.js"

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Example API',
        version: '1.0.0',
    },
    tags: [
        {
            name: 'Users',
            description: 'Endpoints pour utilisateurs'
        },
        {
            name: 'Missions',
            description: 'Endpoints pour missions'
        },
        {
            name: 'Candidatures',
            description: 'Endpoints pour candidatures'
        }
    ],
    paths: {
        ...users.paths,
        ...missions.paths,
        ...candidatures.paths
    }
}

export default swaggerDefinition;