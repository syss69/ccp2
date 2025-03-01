export default {
    paths: {
        '/candidature/apply/:id':{
        post:{ 
            tags: ['Candidatures'],
            summary: 'Creer candidature',
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
        '/candidature/mission/:id': {
            get:{
                tags: ['Candidatures'],
                summary: 'Recuperer candidatures par mission id ',
                responses: {
                    200:{
                        description: 'List des candidatures'
                    },
                    409:{
                        decription: 'Conflict'
                    }
                }
            }
        },
        '/candidature/my': {
            get:{
                tags: ['Candidatures'],
                summary: 'Recuperer mes candidatures',
                responses: {
                    200:{
                        description: 'List des candidatures'
                    },
                    409:{
                        decription: 'Conflict'
                    }
                }
            }
        },
        '/candidature/approve/:id':{
            patch:{
                tags: ['Candidatures'],
                summary: 'Accepter candidature par id',
                responses: {
                    200:{
                        description: 'Candidature a éte accepté '
                    },
                    409:{
                        description: 'Conflict'
                    }
                }
            }
        },
        '/candidature/decline/:id':{
            patch: {
                tags: ['Candidatures'],
                summary: 'Reffuser candidature par id',
                responses: {
                    200:{
                        description: 'Candidature a éte refusé '
                    },
                    409:{
                        description: 'Conflict'
                    }
                }
            }
        }
    }
}