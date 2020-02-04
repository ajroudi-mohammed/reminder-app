import { ADD_REMINDER, REMOVE_REMINDER} from "../types";

export const add_reminder  = (text, date) => {
    const action = {
        type: ADD_REMINDER,
        text,
        date
    }
    console.log("Add", action);
    return action
}

export const remove_reminder = (id) => {
    const action = {
        type: REMOVE_REMINDER,
        id
    }

    console.log('action', action)

    return action
}