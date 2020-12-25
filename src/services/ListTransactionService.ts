import TransactionsRepository from '../repositories/TransactionsRepository';
import TransactionListDTO from '../dtos/TransactionListDTO';

class ListTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): TransactionListDTO {
    const transactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();
    return { transactions, balance };
  }
}

export default ListTransactionService;
