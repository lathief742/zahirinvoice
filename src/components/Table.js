import React from 'react';

export default function Table({ rows, total, discount, tax, shipping }) {
    // Ensure all values are valid numbers and fallback to 0 if not
    const subtotal = rows.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
    const discountAmount = (subtotal * (parseFloat(discount) || 0)) / 100;
    const taxAmount = (subtotal * (parseFloat(tax) || 0)) / 100;
    const shippingAmount = parseFloat(shipping) || 0;
    const grandTotal = subtotal - discountAmount + taxAmount + shippingAmount;

    return (
        <>
        <div className="overflow-x-auto">
            <table className="w-full mb-10 mt-10 mx-auto border-collapse">
                <thead>
                    <tr className="bg-gray-100 p-1">
                        <th className="font-bold text-left p-2">Item</th>
                        <th className="font-bold text-left p-2">Kuantitas</th>
                        <th className="font-bold text-left p-2">Harga</th>
                        <th className="font-bold text-left p-2">Jumlah</th>
                    </tr>
                </thead>
                <tbody>
                {rows.map(({ id, description, quantity, price, amount }) => (
                    <tr key={id}>
                        <td className="p-2">{description}</td>
                        <td className="p-2">{quantity}</td>
                        <td className="p-2">{price}</td>
                        <td className="p-2">{parseFloat(amount).toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

        <div className="flex flex-col items-end mr-10 space-y-2">
            <h2 className="text-gray-800 text-lg sm:text-xl">Subtotal: {subtotal.toLocaleString()}</h2>
            <h2 className="text-gray-800 text-lg sm:text-xl">Discount: -{discountAmount.toLocaleString()}</h2>
            <h2 className="text-gray-800 text-lg sm:text-xl">Tax: +{taxAmount.toLocaleString()}</h2>
            <h2 className="text-gray-800 text-lg sm:text-xl">Shipping: +{shippingAmount.toLocaleString()}</h2>
            <h2 className="text-gray-800 text-xl sm:text-2xl font-bold">Grand Total: {grandTotal.toLocaleString()}</h2>
        </div>
        </>
    );
}
