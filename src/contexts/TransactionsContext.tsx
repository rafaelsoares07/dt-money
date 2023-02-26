import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: any) => Promise<void>;
}

export const TransactionsContext = createContext < TransactionsContextData > ({} as TransactionsContextData);

interface TransactionsContextProps {
    children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsContextProps) {

    const [transactions, setTransactions] = useState < Transaction[] > ([]);

    useEffect(() => {
        api.get('transaction')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: any) {
        const response = await api.post('/transaction', {
            ...transactionInput,
            createAt: new Date(),
        })
        const { transaction } = response.data;
        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}