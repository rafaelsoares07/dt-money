import { Container } from "./styles";

import { useContext } from "react";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {

    const { transactions } = useContext(TransactionsContext)

    let deposit =
        transactions?.filter(transaction => transaction.type === 'deposit')
            .reduce((acc, current) => acc + current.amount, 0)

    let withdraw =
        transactions?.filter(transaction => transaction.type === 'withdraw')
            .reduce((acc, current) => acc + current.amount, 0)

    return (
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R${deposit}</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>- R${withdraw}</strong>
            </div>

            <div className="highligth-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R${deposit - withdraw}</strong>
            </div>
        </Container>
    )
}