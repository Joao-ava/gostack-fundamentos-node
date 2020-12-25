import Transaction from '../models/Transaction';

export interface Balance {
  income: number;
  outcome: number;
  total: number;
}

function sumTransactions(transactions: Transaction[]): number {
  return transactions.reduce(
    (accumulador, value) => accumulador + value.value,
    0,
  );
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = sumTransactions(
      this.transactions.filter(({ type }) => type === 'income'),
    );
    const outcome = sumTransactions(
      this.transactions.filter(({ type }) => type === 'outcome'),
    );
    const total = income - outcome;
    return {
      total,
      income,
      outcome,
    };
  }

  public create(data: Omit<Transaction, 'id'>): Transaction {
    const transaction = new Transaction(data);
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
