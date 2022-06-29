/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    const transaction = {
      amount,
      type,
      id: type + '-' + amount,
    };
    // transaction.amount = amount;
    // transaction.type = type;
    // transaction.id = type + '-' + amount;

    return transaction;
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, 'deposit');
    this.transactions.push(transaction);

    return transaction;
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Зняття такої суми не можливо, недостатньо коштів');
      return;
    }

    this.balance -= amount;

    const transaction = this.createTransaction(amount, 'withdraw');
    this.transactions.push(transaction);

    return transaction;
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
      return 'Транзакції з таким id не знайдено';
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let totalAmount = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalAmount += transaction.amount;
      }
    }

    return totalAmount;
  },
};

account.deposit(5);

console.log(account.getBalance());

account.withdraw(6);

console.log(...account.transactions);

console.log(account.balance);

console.log(account.getTransactionTotal('withdraw'));
