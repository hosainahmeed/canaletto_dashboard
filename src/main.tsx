import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router'
import './index.css'
import store from './redux/store'
import router from './routers/BrowserRouter'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster position="top-center" toastOptions={{ duration: 1500 }} />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
