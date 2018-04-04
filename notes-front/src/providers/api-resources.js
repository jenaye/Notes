import { Config } from '../config/const';

const API_ENTRYPOINT = Config.API;
class ApiResource {

    constructor(entryPoint) {
        this.entryPoint = entryPoint;
    }

    post = (values) => {
        return fetch (API_ENTRYPOINT+this.entryPoint, {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/ld+json'}),
            body: JSON.stringify(values)
        })
            .then((response) => {
                return response.json()
            }).then((response) => {
                    return response
                }
            )
    };

    update = (id, values) => {
        return fetch (API_ENTRYPOINT+this.entryPoint+'/'+id, {
            method: 'PUT',
            headers: new Headers({'Content-Type': 'application/ld+json'}),
            body: JSON.stringify(values)
        })
            .then((response) => {
                return response.json()
            }).then((resourceUpdated) => {
                    return resourceUpdated;
                }
            )
    };

    find = (id) => {
        return fetch(API_ENTRYPOINT+this.entryPoint+'/'+id)
            .then((response) => {
                return response.json()
            })
            .then((jsonResponse) => {
                return jsonResponse
            });
    };

    findBy = (filters) => {
        return fetch(API_ENTRYPOINT+this.entryPoint+'?'+filters)
            .then((response) => {
                return response.json()
            })
            .then((jsonResponse) => {
                return jsonResponse['hydra:member']
            });
    };

    findAll = () => {
        return fetch(API_ENTRYPOINT+this.entryPoint)
            .then((response) => {
                return response.json()
            })
            .then((jsonResponse) => {
                return jsonResponse['hydra:member']
            });
    };

    remove = (id) => {
        return fetch (API_ENTRYPOINT+this.entryPoint+'/'+id, {
            method: 'DELETE',
            headers: new Headers({'Content-Type': 'application/ld+json'}),
        })
            .then((response) => {
                return response;
            }).then((response) => {
                    return response;
                }
            )
    };
}

export default ApiResource;
