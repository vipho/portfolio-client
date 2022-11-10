import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './store/store'
import { createGlobalStyle } from 'styled-components'
import reportWebVitals from './reportWebVitals'

import Main from './views/Main/Main'
import reboot from './style/reboot'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const GlobalCSS = createGlobalStyle`${reboot}`

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '*',
    element: <Main />,
  },
])

root.render(
  <React.StrictMode>
    <>
      <GlobalCSS />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
