import UserConstants from "./UserConstants";

export function addUser(payload) {
    return {
        type: UserConstants.ADD_USER,
        payload
    }
}