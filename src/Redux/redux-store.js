import {reducer} from './reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(reducer)

export default function GlobalReduxStore({children}){
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}
