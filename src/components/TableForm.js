import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";

export default function TableForm({
  rows, setRows, discount, setDiscount, tax, setTax, shipping, setShipping
}) {
  // Calculate subtotal
  const calculateSubtotal = () => {
    return rows.reduce((acc, row) => acc + (parseFloat(row.amount) || 0), 0).toFixed(2);
  };

  // Calculate discount amount
  const calculateDiscount = () => {
    const subtotal = parseFloat(calculateSubtotal()) || 0;
    return ((subtotal * (parseFloat(discount) || 0)) / 100).toFixed(2);
  };

  // Calculate tax amount
  const calculateTax = () => {
    const subtotal = parseFloat(calculateSubtotal()) || 0;
    return ((subtotal * (parseFloat(tax) || 0)) / 100).toFixed(2);
  };

  // Calculate grand total
  const calculateGrandTotal = () => {
    const subtotal = parseFloat(calculateSubtotal()) || 0;
    const discountAmount = parseFloat(calculateDiscount()) || 0;
    const taxAmount = parseFloat(calculateTax()) || 0;
    const shippingAmount = parseFloat(shipping) || 0;
    const grandTotal = subtotal - discountAmount + taxAmount + shippingAmount;
    return grandTotal.toFixed(2);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index] = { ...updatedRows[index], [name]: value };

    if (name === "quantity" || name === "price") {
      const quantity = parseFloat(updatedRows[index].quantity) || 0;
      const price = parseFloat(updatedRows[index].price) || 0;
      updatedRows[index].amount = (quantity * price).toFixed(2);
    }

    setRows(updatedRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRows([...rows, { id: uuidv4(), description: "", quantity: "", price: "", amount: 0 }]);
  };

  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 mb-10">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Description</th>
                <th className="border border-gray-300 p-2">Quantity</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">Amount</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.id}>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      name="description"
                      value={row.description}
                      onChange={(e) => handleChange(index, e)}
                      className="w-full p-1"
                      placeholder="Item description"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      name="quantity"
                      value={row.quantity}
                      onChange={(e) => handleChange(index, e)}
                      className="w-full p-1"
                      placeholder="Quantity"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      name="price"
                      value={row.price}
                      onChange={(e) => handleChange(index, e)}
                      className="w-full p-1"
                      placeholder="Price"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      name="amount"
                      value={parseFloat(row.amount).toFixed(2)}
                      readOnly
                      className="w-full p-1"
                    />
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    <button type="button" onClick={() => deleteRow(row.id)} className="text-red-500">
                      <MdDelete className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          Add Table Item
        </button>
      </form>

      <div className="mt-4">
        <div className="flex flex-wrap justify-end gap-4 mb-4">
          <div className="w-full sm:w-auto">
            <label>Discount (%): </label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="p-1 border border-gray-300 w-full sm:w-24"
            />
          </div>
          <div className="w-full sm:w-auto">
            <label>Tax (%): </label>
            <input
              type="number"
              value={tax}
              onChange={(e) => setTax(e.target.value)}
              className="p-1 border border-gray-300 w-full sm:w-24"
            />
          </div>
          <div className="w-full sm:w-auto">
            <label>Shipping: </label>
            <input
              type="number"
              value={shipping}
              onChange={(e) => setShipping(e.target.value)}
              className="p-1 border border-gray-300 w-full sm:w-24"
            />
          </div>
        </div>

        <div className="text-right">
          <h2 className="text-lg sm:text-xl">Subtotal: ${calculateSubtotal()}</h2>
          <h2 className="text-lg sm:text-xl">Discount: -${calculateDiscount()}</h2>
          <h2 className="text-lg sm:text-xl">Tax: +${calculateTax()}</h2>
          <h2 className="text-lg sm:text-xl">Shipping: +${parseFloat(shipping || 0).toFixed(2)}</h2>
          <h2 className="text-xl sm:text-2xl font-bold">Grand Total: ${calculateGrandTotal()}</h2>
        </div>
      </div>
    </>
  );
}
