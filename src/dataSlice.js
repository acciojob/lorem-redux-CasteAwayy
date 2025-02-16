import { getData } from "./apiLorem";

const initialState = {
    data: [],
    state: "idle",
};

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "data/created":
            return {
                ...state,
                data: [...state.data, action.payload],
                state: "idle",
            };
        case "data/progress":
            return {
                ...state,
                state: action.payload,
            };
        default:
            return { ...state };
    }
}

export function created() {
    return function (dispatch, getState) {
        dispatch({ type: "data/progress", payload: "loading" });
        getData().then((data) => {
            dispatch({ type: "data/created", payload: data });
        });
    };
}
export { dataReducer };
