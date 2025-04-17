import React from 'react';

export default function CompanySelector({ companies, onSelect }) {
    return (
      <select onChange={e => onSelect(e.target.value)}>
        <option value="">-- Select Company --</option>
        {companies.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    );
  }