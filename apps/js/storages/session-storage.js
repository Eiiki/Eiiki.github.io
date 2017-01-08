import {USE_SESSION_STORAGE} from '../constants'

export const StateToSessionStorage = (state, stateName) => {
    if(!USE_SESSION_STORAGE)
        return state

    let currStates = window.sessionStorage.getItem('eiiki_homepage')
    if(currStates)
        currStates = JSON.parse(currStates)
    else
        currStates = {}
    currStates[stateName] = {...state}

    window.sessionStorage.setItem('eiiki_homepage', JSON.stringify(currStates))
}

export const GetSessionStorageState = (defaultState, stateName) => {
    if(!USE_SESSION_STORAGE)
        return defaultState

    let currStates = window.sessionStorage.getItem('eiiki_homepage')
    if(currStates)
        currStates = JSON.parse(currStates)[stateName] || defaultState
    else
        currStates = defaultState
    return currStates
}

export const ClearSessionStorage = () => {
    delete sessionStorage.tokyoStates
}
