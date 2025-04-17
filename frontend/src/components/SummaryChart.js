import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function SummaryChart({ monthly }) {
  const canvasRef = useRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: monthly.map(m => new Date(m.InvoiceDate).toLocaleString('default', { month: 'short', year:'numeric' })),
        datasets: [{
          label: 'Invoice Total',
          data: monthly.map(m => m.InvoiceAmount),
        }]
      }
    });
  }, [monthly]);

  return <canvas ref={canvasRef} className="mt-4"/>;
}