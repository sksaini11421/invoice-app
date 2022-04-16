import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import Header from './Components/Header';
import MainDetails from './Components/MainDetails';
import ClientDetails from './Components/ClientDetails';
import Dates from './Components/Dates';
import Table from './Components/Table';
import Notes from './Components/Notes';
import Footer from './Components/Footer';
import { useState } from 'react';
import TableForm from './Components/TableForm';

function App() {

  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [bankName, setBankName] = useState('')
  const [bankAccount, setBankAccount] = useState('')
  const [website, setWebsite] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientAddress, setClientAddress] = useState('')
  const [invoiceNumber, setInvoiceNumber] = useState('')
  const [invoiceDate, setInvoiceDate] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [notes, setNotes] = useState('')
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  console.log(notes);
  const handlePrint = () => {
    window.print();
  }
  return (

    <>
      <main className="p-5 xl:max-w-4xl xl:mx-auto
      bg-white rounded-shadow">
        {showInvoice ? (<div>
          <Header handlePrint={handlePrint} />

          <MainDetails name={name} address={address} />

          <ClientDetails clientName={clientName} clientAddress={clientAddress} />

          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

          <Table/>
          <Notes />


          <Footer name={name} address={address} website={website}
            email={email} bankAccount={bankAccount} bankName={bankName}
            phone={phone}
          />



          <button onClick={() => setShowInvoice(false)}
            className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow
                border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
                transition-all duration-300
                ">
            Edit Information
          </button>
        </div>) : (
          <>
            {/* Name, Address,email, phone,Bank name, bank Account number, Client Name, Client Address, 
          Invoice Number, Invoice Date, Due Date, Notes
          */}
            <div className="flex flex-col justify-center ">
              <div className='grid grid-cols-2'>
                <div>
                  <label htmlFor="name">Enter Your Name</label>
                  <input type="text"
                    name="text"
                    id="text"
                    placeholder="Enter Your Name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                </div>

                <div>
                  <label htmlFor="address">Enter Your Address</label>
                  <input type="text"
                    name="address"
                    id="address"
                    placeholder="Enter Your address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className='grid grid-cols-3'>
                <div>
                  <label htmlFor="email">Enter Your Email</label>
                  <input type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="email">Enter Your WebSite</label>
                  <input type="url"
                    name="website"
                    id="website"
                    placeholder="Enter Your Website"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div>

                  <label htmlFor="phone">Enter Your Phone</label>
                  <input type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>




              <div className='grid grid-cols-2'>
                <div>
                  <label htmlFor="bankName">Enter Your BankName</label>
                  <input type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter Your bankName"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="bankAccount">Enter Your Bank Account</label>
                  <input type="tel"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter Your bankAccount"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </div>









              <div className='grid grid-cols-2'>
                <div>
                  <label htmlFor="clientName">Enter Your Client Name</label>
                  <input type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter Your Client Name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />


                </div>

                <div>
                  <label htmlFor="clientAddress">Enter Your Client Address</label>
                  <input type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter Your Client Address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />

                </div>
              </div>

              <div className='grid grid-cols-3 gap-10'>
                <div>
                  <label htmlFor="invoiceNumber">Enter Your Invoice Number</label>
                  <input type="tel"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Enter Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />

                </div>

                <div>
                  <label htmlFor="invoiceDate">Enter Invoice Date</label>
                  <input type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Enter Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />

                </div>

                <div>
                  <label htmlFor="dueDate">Enter Due Date</label>
                  <input type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Enter Invoice Due Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />

                </div>
              </div>


              {/* Table Form */}

              <div>
                <TableForm description={description} setDescription={setDescription}/>
              </div>


              {/* <label htmlFor="notes">Additional Notes</label>
              <textarea 
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional Notes to Client"
                autoComplete="off"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea> */}

              <button onClick={() => setShowInvoice(true)} className="bg-blue-500 py-2 px-8 rounded shadow
                border-2 border-blue-500 hover:bg-transparent hover:text-blue-500
                transition-all duration-300
                ">Preview Invoice
              </button>
            </div>
          </>

        )}


      </main>
    </>
  );
}

export default App;
