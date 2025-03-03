export default {
    paths: {
        '/users/create':{
        post:{
            tags: ['Users'], 
            summary: 'Creer utilisateur',
            requestBody: {
            "required": true,
            "content": {
                "application/json": {
                "schema": {
                    "type": "object",
                    "properties": {
                    "name": {
                        "type": "string",
                        "example": "JohnDoe"
                    },
                    "role":{
                        "type": "string",
                        "example": "Bénévole"
                    },
                    "login": {
                        "type": "string",
                        "example": "john"
                    },
                    "password": {
                        "type": "string",
                        "example": "123456"
                    }
                    }
                }
                }
            }
            },
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
        '/users/name/:name':{
        get:{
            tags: ['Users'],
            summary: 'Recuperer utilisateur par nom',
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
        '/users/:id': {
            get:{
                tags: ['Users'],
                summary: 'Recuperer utilisateur par id',
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
        '/users/role':{
            get:{
                tags: ['Users'],
                summary: 'Recuperer utilisateur par role',
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
        '/users/delete/:id':{
            delete:{
                tags: ['Users'],
                summary: 'Supprimer utilisateur par id',
                responses: {
                    200:{
                        description: 'Utilisateur a éte supprimé '
                    },
                    404:{
                        description: 'Utilisateur non trouvé'
                    }
                }
            }
        },
        '/users/update/:id':{
            patch: {
                tags: ['Users'],
                summary: 'Mettre à jour utilisateur par id',
                responses: {
                    200:{
                        description: 'Utilisateur a éte modifié '
                    },
                    404:{
                        description: 'Utilisateur non trouvé'
                    }
                }
            }
        },
        '/users/login':{
            post:{
                tags: ['Users'],
                summary: 'login user',
                responses:{
                    200:{
                        description: 'Connecté '
                    },
                    401:{
                        description: 'Utilisateur non authorize'
                    }
                }
            }
        }
    }
}