import React from 'react';
//import { Table } from 'react-bootstrap';
import ExpenseRow from './ExpenseRow';

function ExpenseList({ expenses }) {
    return (
      <div>
        <h2>Expenses</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <ExpenseRow key={expense.id} expense={expense} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  export default ExpenseList;
// function ExpenseList(props) {
//   return (
//     <div>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Description</th>
//             <th>Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.expenses.map((expense) => (
//             <tr key={expense.id}>
//               <td>{expense.date}</td>
//               <td>{expense.description}</td>
//               <td>{expense.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ExpenseList;


// function ExpenseList(props) {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Amount</th>
//           <th>Description</th>
//           <th>Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         {props.expenses.map((expense) => (
//           <tr key={expense.id}>
//             <td>{expense.amount}</td>
//             <td>{expense.description}</td>
//             <td>{expense.date}</td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// }

// export default ExpenseList;
