import React from 'react';

export default function Table({ list, total, discount, tax, shipping }) {
    const subtotal = list.reduce((sum, item) => sum + item.amount, 0);
    const discountAmount = (subtotal * discount) / 100;
    const taxAmount = (subtotal * tax) / 100;
    const grandTotal = subtotal - discountAmount + taxAmount + parseFloat(shipping);

    return (
        <>
        <table width="90%" className="mb-10 mt-10 ml-10">
            <thead>
                <tr className="bg-gray-100 p-1">
                    <td className="font-bold">Item</td>
                    <td className="font-bold">Kuantitas</td>
                    <td className="font-bold">Harga</td>
                    <td className="font-bold">Jumlah</td>
                </tr>
            </thead>
            {list.map(({ id, description, quantity, price, amount}) => (
                <React.Fragment key={id}>
                    <tbody>
                        <tr>
                            <td>{description}</td>
                            <td>{quantity}</td>
                            <td>{price}</td>
                            <td>{amount}</td>
                        </tr>
                    </tbody>
                </React.Fragment>
            ))}
        </table>

        <div className="flex flex-col items-end mr-10">
            <h2 className="text-gray-800 text-2xl">Subtotal: {subtotal.toLocaleString()}</h2>
            <h2 className="text-gray-800 text-2xl">Discount: -{discountAmount.toLocaleString()}</h2>
            <h2 className="text-gray-800 text-2xl">Tax: +{taxAmount.toLocaleString()}</h2>
            <h2 className="text-gray-800 text-2xl">Shipping: +{parseFloat(shipping).toLocaleString()}</h2>
            <h2 className="text-gray-800 text-4xl font-bold">Grand Total: {grandTotal.toLocaleString()}</h2>
        </div>
        </>
    );
}
    