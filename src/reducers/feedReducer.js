const initState = {
    conversationActive: false
}

export default function reducer(state=initState, action) {
    switch(action.type) {        
        case "TOGGLE_NEW_CONVERSATION":
            return {...state, conversationActive: true};
        default: 
            return state;
    }
}