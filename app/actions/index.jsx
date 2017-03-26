var axios = require('axios');

export let changeName = name => {
    return {type: 'CHANGE_NAME', name}
}

export let addHobby = hobby => {
    return {type: 'ADD_HOBBY', hobby}
}

export let removeHobby = id => {
    return {type: 'REMOVE_HOBBY', id}
}

export let addMovie = (movie, genre) => {
    return {type: 'ADD_MOVIE', movie, genre}
}

export let removeMovie = id => {
    return {type: 'REMOVE_MOVIE', id}
}

export let startLocationFetch = () => {
    return {type: 'START_LOCATION_FETCH'}
}

export let completeLocationFetch = url => {
    return {type: 'COMPLETE_LOCATION_FETCH', url}
}

export let fetchLocation = () => {
    return (dispatch, getState) => {
        dispatch(startLocationFetch());
        axios
            .get('https://ipinfo.io/')
            .then(res => {
                let loc = res.data.loc;
                let baseUrl = 'https://www.google.com/maps?q=';
                dispatch(completeLocationFetch(baseUrl + loc))
            })
            .catch(err => {
                console.log('error is: ', err);
            });
    }

}