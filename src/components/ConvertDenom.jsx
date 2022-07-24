import React, { useState } from 'react';


export default function ConvertDenom({ bills, convertDenom }) {

    const [form, setForm] = useState({amount:0});

    const handleChange = (e) => {
        setForm({amount: e.target.value})
    }

    const handleConvertDenom = () => {
        convertDenom(form.amount)
    }

    return (
        <div style={{borderStyle: "solid", margin: "10px", padding: "10px", borderWidth: "1px", textAlign: "center" }}>
            <div>
                <h1>Convert Denomination</h1>
                Amount: <input name="amount" type="number" style={{width: 80}} value={form.amount} onChange={handleChange}></input>
                <button onClick={handleConvertDenom}>Convert Denomination</button>
            </div>
            <br />
            {bills}
        </div>
        
        )
}