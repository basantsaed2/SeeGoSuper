import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';          
import {store} from './Store/store';                  
import './index.css';
import router from './router';
import './App.css';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>                         
    <RouterProvider router={router} />
  </Provider>
);
