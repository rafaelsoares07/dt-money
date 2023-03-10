import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';


createServer({

  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Frelancer',
          type: 'deposit',
          category: 'Dev',
          amount: 4000,
          createAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Roupas Novas',
          type: 'withdraw',
          category: 'Extras',
          amount: 250,
          createAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 3,
          title: 'Academia',
          type: 'withdraw',
          category: 'Saúde e bem estar',
          amount: 150,
          createAt: new Date('2021-02-12 09:00:00')
        }, {
          id: 4,
          title: 'Salário',
          type: 'deposit',
          category: 'Dev',
          amount: 5000,
          createAt: new Date('2021-02-12 09:00:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = '/api'

    this.get('/transaction', () => {
      return this.schema.all('transaction')
    })

    this.post('/transaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


