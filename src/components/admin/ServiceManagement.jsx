import { useState } from 'react'
import { Header } from './AdminDashboard'


const ServiceManagement = () => {
  const [services, setServices] = useState([
    'Birth Certificate',
    'Death Certificate',
    'Caste Certificate',
    'Income Certificate',
    'Residence Proof',
  ]) 

  const [newService, setNewService] = useState('')

  const addService = () => {
    if (newService.trim() === '') return
    setServices([...services, newService.trim()])
    setNewService('')
  }

  const removeService = (service) => {
    setServices(services.filter(s => s !== service))
  }

  return (
    <>
    <Header/>
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4 text-primary">Service Management</h2>

      <div className="flex mb-4 space-x-2">
        <input
          type="text"
          placeholder="New Service"
          className="flex-1 p-2 border rounded-md dark:bg-gray-700"
          value={newService}
          onChange={(e) => setNewService(e.target.value)}
        />
        <button
          onClick={addService}
          className="bg-primary hover:bg-green-800 text-white px-4 rounded-md"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {services.map((service, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center p-2 border rounded-md bg-gray-50 dark:bg-gray-700"
          >
            <span>{service}</span>
            <button
              onClick={() => removeService(service)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default ServiceManagement
