/* eslint-disable */
const metadata = {
    models: {
        business: {
            name: 'Business', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, competitions: {
                    name: "competitions",
                    type: "Competition",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'business',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        competition: {
            name: 'Competition', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, business: {
                    name: "business",
                    type: "Business",
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'competitions',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "businessId" },
                }, businessId: {
                    name: "businessId",
                    type: "String",
                    isOptional: true,
                    isForeignKey: true,
                    relationField: 'business',
                }, entries: {
                    name: "entries",
                    type: "CompetitionEntry",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'competition',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
        competitionEntry: {
            name: 'CompetitionEntry', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@default", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                }, createdAt: {
                    name: "createdAt",
                    type: "DateTime",
                    attributes: [{ "name": "@default", "args": [] }],
                }, updatedAt: {
                    name: "updatedAt",
                    type: "DateTime",
                    attributes: [{ "name": "@updatedAt", "args": [] }],
                }, competition: {
                    name: "competition",
                    type: "Competition",
                    isDataModel: true,
                    backLink: 'entries',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "competitionId" },
                }, competitionId: {
                    name: "competitionId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'competition',
                },
            }
            , uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            }
            ,
        }
        ,
    }
    ,
    deleteCascade: {
    }
    ,
};
export default metadata;
