import axios from 'axios';

export function activateNewConversation(active) {
    return {
        type: "TOGGLE_NEW_CONVERSATION",
        payload: active
    }
}

export function getProfilePic() {
    return function(dispatch) {
        axios.get('https://staging-api.pincapp.com/api/questions')
            .then((response) => {
                let picURL = response.data.attributes.author_info.avatar_thumb;
                axios.get(picURL)
                    .then((picture) => {
                        console.log("picture", picture);
                        dispatch({type: "FETCH_PROFILE_PIC_FULFILLED", payload: picture.data});
                    })
                    .catch((err) => {
                        dispatch({type: "FETCH_PROFILE_PIC_REJECTED", payload: err});
                    });
            })
    }
}