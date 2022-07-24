import React, { useState } from 'react';

export default function Stock({ stock, getStock, saveStock}) {
    const initialStock = {stock100:0, stock50:0, stock20:0, stock10:0, stock5:0, stock1:0}
    const [form, setForm] = useState(initialStock);

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

    const handleSaveStock = () => {
        const newStock = [
            form.stock100,
            form.stock50,
            form.stock20,
            form.stock10,
            form.stock5,
            form.stock1,
        ]
        saveStock(newStock)
    }

    return (
        <div style={{borderStyle: "solid", margin: "10px", padding: "10px", borderWidth: "1px", textAlign: "center" }}>
            <h1>Stock</h1>
            <table align="center" border="1px solid black">
                <tbody>
                    <tr>
                        <th width="50">100</th>
                        <th width="50">50</th>
                        <th width="50">20</th>
                        <th width="50">10</th>
                        <th width="50">5</th>
                        <th width="50">1</th>
                    </tr>
                    <tr>
                        <td> {stock.length>0 ? stock[0] : 0} </td>
                        <td> {stock.length>0 ? stock[1] : 0} </td>
                        <td> {stock.length>0 ? stock[2] : 0} </td>
                        <td> {stock.length>0 ? stock[3] : 0} </td>
                        <td> {stock.length>0 ? stock[4] : 0} </td>
                        <td> {stock.length>0 ? stock[5] : 0} </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={getStock}>Get current Stock</button>
            <hr/>
            <table align="center" border="1px solid black">
                <tbody>
                    <tr>
                        <th width="50">100</th>
                        <th width="50">50</th>
                        <th width="50">20</th>
                        <th width="50">10</th>
                        <th width="50">5</th>
                        <th width="50">1</th>
                    </tr>
                    <tr>
                        <td><input name="stock100" type="number" style={{width: 45}} value={form.stock100} onChange={handleChange}></input></td>
                        <td><input name="stock50" type="number" style={{width: 45}} value={form.stock50} onChange={handleChange}></input></td>
                        <td><input name="stock20" type="number" style={{width: 45}} value={form.stock20} onChange={handleChange}></input></td>
                        <td><input name="stock10" type="number" style={{width: 45}} value={form.stock10} onChange={handleChange}></input></td>
                        <td><input name="stock5" type="number" style={{width: 45}} value={form.stock5} onChange={handleChange}></input></td>
                        <td><input name="stock1" type="number" style={{width: 45}} value={form.stock1} onChange={handleChange}></input></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={handleSaveStock}>Save Stock</button>
        </div>
        
        )
}