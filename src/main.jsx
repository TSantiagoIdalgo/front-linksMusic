import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './hooks/state/store.js'
import { ApolloClient, HttpLink, ApolloProvider , InMemoryCache } from '@apollo/client'

import App from './App.jsx'
const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://dcv88hhl-4000.brs.devtunnels.ms/graphql'
    })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
     </Provider>
   </ApolloProvider>
  </React.StrictMode>,
)
