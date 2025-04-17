import React from 'react';

export default function InvoiceTable({ invoices }) {
  return (
    <table className="w-full mt-4 border">
      <thead>
        <tr>
          <th>Number</th><th>Date</th><th>Amount</th><th>Paid</th><th>Days to Pay</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map(inv => (
          <tr key={inv.InvoiceNumber}>
            <td>{inv.InvoiceNumber}</td>
            <td>{new Date(inv.InvoiceDate).toLocaleDateString()}</td>
            <td>{inv.InvoiceAmount}</td>
            <td>{inv.PaidAmount}</td>
            <td>{inv.DaysToPay}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}