import React, { useState, useEffect, use } from 'react';
import CompanySelect from './components/CompanySelect';
import InvoiceTable from './components/InvoiceTable';
import SummaryChart from './components/SummaryChart';


function App() {
    const [companies, setCompanies] = useState([]);
    const [company, setCompany] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/companies')
            .then(res => res.json())
            .then(setCompanies)
    }, []);

    useEffect(() => {
        if (compant) {
            fetch(`http://localhost:5000/api/company/${company}`)
                .then(res => res.json())
                .then(setData);
        }
    }, [company]);

    return (
        <div className="p-4">
            <h1 className="text-xl mb-4">Invoice Explorer</h1>
            <CompanySelect campanies={companies} onSelect={setCompany} />
            {data && (
                <>
                    <InvoiceTable invoices={data.invoices} />
                    <SummaryChart monthly={data.monthlyTotals} />
                </>
            )}
        </div>
    );
}

export default App;