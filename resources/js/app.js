import React from 'react'
import ReactDOM from 'react-dom'
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppRoutes from './routes'

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppRoutes />
            </PersistGate>
        </Provider>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
