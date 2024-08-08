import {useState} from "react"
import Footer from "./components/Footer"
import Notes from "./components/Notes"
import Table from "./components/Table"
import MainDetails from "./components/MainDetails"
import ClientDetails from "./components/ClientDetails"
import Header from "./components/Header"
import Dates from "./components/Dates"



function App() {
const [showInvoice, setShowInvoice] = useState(false)
const [name, setName] = useState("")
const [address, setAddress] = useState("")
const [email, setEmail] = useState("")
const [phone, setPhone] = useState("")
const [bankName, setBankName] = useState("")
const [banKAccount, setBankAccount] = useState("")
const [website, setWebsite] = useState("")
const [clientName, setClientName] = useState("")
const [clientAddress, setClientAddress] = useState("")
const [invoiceNumber, setInvoiceNumber] = useState("")
const [invoiceDate, setinvoiceDate] = useState("")
const [dueDate, setdueDate] = useState("")
const [notes, setNotes] = useState("")



const handlePrint = () => {
  window.print()
}


  return (
    <>
    <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl rounded shadow bg-white">
    {showInvoice ? (
    <div>
    <Header handlePrint={handlePrint}/>

    <MainDetails 
    name={name} 
    address={address}/>

    <ClientDetails 
    clientName={clientName} 
    clientAddress={clientAddress}/>

    <Dates 
    invoiceNumber={invoiceNumber} 
    invoiceDate={invoiceDate} 
    dueDate={dueDate}/>

    <Table />

    <Notes notes={notes}/>

    <Footer 
    name={name} 
    address={address} 
    website={website} 
    email={email} 
    phone={phone} 
    banKAccount={banKAccount}
    bankName={bankName}
    />

    <button onClick={() => setShowInvoice(false)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow 
      border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 
      transition-all duration-300">Edit Information</button>
    </div> 
    ) : (
      <>
      {/* name, address, client name, email, phone, 
      bank name, bank account number, website, 
      client address, invoice number, 
      invoice date, due date, notes*/}
     <div className="flex flex-col justify-center">
     <article className="md:grid grid-cols-2 gap-10">
    <div className="flex flex-col">
    <label htmlFor="name">Your full name</label>
     <input 
      type="text" 
      name="text" 
      id="name" 
      placeholder="Enter your name"
      autoComplete="off"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
    </div>

     <div className="flex flex-col">
     <label htmlFor="address">Enter your address</label>
     <input 
      type="text" 
      name="address" 
      id="address" 
      placeholder="Enter your address"
      autoComplete="off"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      />
     </div>
     </article>

     <article className="md:grid grid-cols-3 gap-10">
     <div className="flex flex-col">
     <label htmlFor="email">Enter your email</label>
     <input 
      type="email" 
      name="email" 
      id="email" 
      placeholder="Enter your email"
      autoComplete="off"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
     </div>

     <div className="flex flex-col">
     <label htmlFor="website">Enter your website</label>
     <input 
      type="url" 
      name="website" 
      id="website" 
      placeholder="Enter your website"
      autoComplete="off"
      value={website}
      onChange={(e) => setWebsite(e.target.value)}
      />
     </div>

     <div className="flex flex-col">
     <label htmlFor="phone">Enter your phone</label>
     <input 
      type="text"
      name="phone" 
      id="phone" 
      placeholder="Enter your phone"
      autoComplete="off"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      />
     </div>
     </article>

     <article className="md:grid grid-cols-2 gap-10">
     <div className="flex flex-col">
     <label htmlFor="bankName">Enter your bank name</label>
     <input 
      type="text" 
      name="bankName" 
      id="bankName" 
      placeholder="Enter your bank name"
      autoComplete="off"
      value={bankName}
      onChange={(e) => setBankName(e.target.value)}
      />
     </div>

     <div className="flex flex-col">
     <label htmlFor="banKAccount">Enter your bank account number</label>
     <input 
      type="text" 
      name="bankAccount" 
      id="bankAccount" 
      placeholder="Enter your bank account number"
      autoComplete="off"
      value={banKAccount}
      onChange={(e) => setBankAccount(e.target.value)}
      />
     </div>
     </article>

     <article className="md:grid grid-cols-2 gap-10 md:mt-16">
     <div className="flex flex-col">
     <label htmlFor="clientName">Enter your client's name</label>
     <input 
      type="text" 
      name="clientName" 
      id="clientName" 
      placeholder="Enter your bank client's name"
      autoComplete="off"
      value={clientName}
      onChange={(e) => setClientName(e.target.value)}
      />
     </div>

     <div className="flex flex-col">
     <label htmlFor="clientAddress">Enter your client's address</label>
     <input 
      type="text" 
      name="clientAddress" 
      id="clientAddress" 
      placeholder="Enter your bank client's address"
      autoComplete="off"
      value={clientAddress}
      onChange={(e) => setClientAddress(e.target.value)}
      />
     </div>
     </article>

     <article className="md:grid grid-cols-3 gap-10">
     <div className="flex flex-col">
     <label htmlFor="invoiceNumber">Invoice Number</label>
     <input 
      type="text" 
      name="invoiceNumber" 
      id="invoiceNumber" 
      placeholder="Invoice Number"
      autoComplete="off"
      value={invoiceNumber}
      onChange={(e) => setInvoiceNumber(e.target.value)}
      />
     </div>
     
     <div className="flex flex-col">
     <label htmlFor="invoiceDate">Invoice Date</label>
     <input 
      type="date" 
      name="invoiceDate" 
      id="invoiceDate" 
      placeholder="Invoice Date"
      autoComplete="off"
      value={invoiceDate}
      onChange={(e) => setinvoiceDate(e.target.value)}
      />
     </div>
     
     <div className="flex flex-col">
     <label htmlFor="dueDate">Due Date</label>
     <input 
      type="date" 
      name="dueDate" 
      id="dueDate" 
      placeholder="Due Date"
      autoComplete="off"
      value={dueDate}
      onChange={(e) => setdueDate(e.target.value)}
      />
     </div>
</article>

<label htmlFor="notes">Additional Notes</label>
<textarea
 name="notes" 
 id="notes" 
 cols="30" 
 rows="10" 
 placeholder="Additional Notes to the client" 
 value={notes} 
 onChange={(e) => setNotes(e.target.value)}>
 </textarea>
     

      <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow 
      border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 
      transition-all duration-300">Preview Invoice</button>
     </div>
     
      </>
    )}
    </main>
    </>
  );
}

export default App;
