import React from 'react';
import ReactDOM from 'react-dom/client';
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
          type: 'deposit',
          category: 'Extras',
          amount: 150,
          createAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 3,
          title: 'Roupas Novas',
          type: 'deposit',
          category: 'Extras',
          amount: 150,
          createAt: new Date('2021-02-12 09:00:00')
        }, {
          id: 4,
          title: 'Roupas Novas',
          type: 'withdraw',
          category: 'Extras',
          amount: 150,
          createAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 5,
          title: 'Roupas Novas',
          type: 'withdraw',
          category: 'Extras',
          amount: 15000,
          createAt: new Date('2021-02-12 09:00:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
