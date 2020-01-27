import axios from 'axios'

const initialState = {
  email: null,
  firstName: null,
  lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export function requestUserData(){
  const data = axios.get('/auth/user-data').then(results => {
    return results.data
  }).catch(err => console.log(err))
  return {
    type: REQUEST_USER_DATA,
    payload: data
  }
}

export default function userReducer(state=initialState, action){
  const {type, payload} = action
  switch(type){
    case REQUEST_USER_DATA + "_PENDING":
      return {...state, loading: true}
    case REQUEST_USER_DATA + "_FULFILLED":
      const {email, firstName, lastName} = payload.user
      return {...state, email, firstName, lastName}
    default:
      return state
  }
}