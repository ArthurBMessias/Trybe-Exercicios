const redux = require("redux")
const {combineReducers, createStore} = redux
import countReducer from "./count"
import favoriteThingsReducer from "./favoriteThings"
import reducerYouTube from "./youTubeVideo"

const rootReducer = combineReducers({
    count: countReducer,
    favoriteThings: favoriteThingsReducer,
    youTubeVideos: reducerYouTube
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store