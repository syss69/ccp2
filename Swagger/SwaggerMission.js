export default {
    paths: {
        '/mission/create':{
        post:{ 
            tags: ['Missions'],
            summary: 'Creer mission',
            responses:{
                201:{
                    description: 'Success'
                    },
                409:{
                    description: 'Conflict'
                }
                }
            }
        },
        '/mission/actual': {
            get:{
                tags: ['Missions'],
                summary: 'Recuperer mission avec status isActual == true',
                responses: {
                    200:{
                        description: 'Success'
                    },
                    404:{
                        decription: 'Utilisateur non trouvé'
                    }
                }
            }
        },
        '/mission/delete/:id':{
            delete:{
                tags: ['Missions'],
                summary: 'Supprimer mission par id',
                responses: {
                    200:{
                        description: 'Mission a éte supprimé '
                    },
                    404:{
                        description: 'Mission non trouvé'
                    }
                }
            }
        },
        '/mission/update/:id':{
            patch: {
                tags: ['Missions'],
                summary: 'Mettre à jour mission par id',
                responses: {
                    200:{
                        description: 'Mission a éte modifié '
                    },
                    404:{
                        description: 'Mission non trouvé'
                    }
                }
            }
        }
    }
}