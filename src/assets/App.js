import React from 'react';
import RouterComponent from './routes/web';
import { Provider } from 'react-redux';
import './components/modules/poster/configSearch.css';
import store,  {persistor}from './redux/store/configStore';//PersistGate
import { PersistGate } from 'redux-persist/integration/react';  //PersistGate 

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterComponent/>
            </PersistGate>
        </Provider>
    )
};

export default App;
