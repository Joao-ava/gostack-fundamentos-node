import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(data: Omit<Transaction, 'id'>): Transaction {
    if (data.type === 'income') return this.transactionsRepository.create(data);

    const balance = this.transactionsRepository.getBalance();
    if (data.value > balance.total) throw new Error('You not have money');
    return this.transactionsRepository.create(data);
  }
}

export default CreateTransactionService;
