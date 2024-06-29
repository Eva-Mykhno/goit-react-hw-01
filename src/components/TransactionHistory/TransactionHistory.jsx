import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items = [] }) => {
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr className={s.headText}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={s.row} key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
