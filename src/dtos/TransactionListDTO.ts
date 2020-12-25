import Transaction from '../models/Transaction';
import { Balance } from '../repositories/TransactionsRepository';

export default interface TransactionListDTO {
  transactions: Transaction[];
  balance: Balance;
}
