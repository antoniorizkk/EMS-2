import { createListenerMiddleware } from "@reduxjs/toolkit";
import { toggleChangeAction, updateAction } from "./reducer";

const listenerMiddlerware = createListenerMiddleware()


listenerMiddlerware.startListening({
    actionCreator:toggleChangeAction,
    effect: async(action,listenerApi)=>{
        listenerApi.dispatch(updateAction(action.payload))
    }
})

export default listenerMiddlerware