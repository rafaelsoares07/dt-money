import Modal from 'react-modal';
import { ButtonSubmit, Container, RadioBox, TransactionTypeContainer } from './styles';

import { FormEvent, useContext, useState } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from '../../contexts/TransactionsContext';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [typeTransaction, setTypeTransaction] = useState('deposit')
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const { createTransaction } = useContext(TransactionsContext)

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        await createTransaction({
            title,
            amount: value,
            category,
            type: typeTransaction
        })

        onRequestClose()
    }


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className='react-modal-content'
        >
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transaçãos</h2>
                <input placeholder='Título' onChange={event => setTitle(event.target.value)} />
                <input placeholder='Valor' onChange={event => setValue(Number(event.target.value))} />

                <TransactionTypeContainer>
                    <RadioBox type='button' onClick={() => setTypeTransaction('deposit')} isActive={typeTransaction === 'deposit'} activeColor="green">
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox type='button' onClick={() => setTypeTransaction('withdraw')} isActive={typeTransaction === 'withdraw'} activeColor="red">
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>


                <input placeholder='Categoria' onChange={event => setCategory(event.target.value)} />
                <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
            </Container>
        </Modal>
    )
}