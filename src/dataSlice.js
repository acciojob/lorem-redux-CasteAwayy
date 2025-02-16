import { getData } from "./apiLorem";

const initialState = {
    data: [],
};

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "data/created":
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        default:
            return { ...state };
    }
}

export function created() {
    return function (dispatch, getState) {
        // dispatch({ type: "data/progress", payload: "loading" });
        getData().then((data) => {
            dispatch({ type: "data/created", payload: data });
        });
    };
}
export { dataReducer };
