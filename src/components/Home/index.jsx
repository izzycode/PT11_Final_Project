import React, { useState } from "react"
import OtherMap from "../OtherMap"
import TruckRegistration from "../Registration/truckRegistration"
import TruckModal from "../Truck/TruckModal"
import logo from "../../asset/wtflogorembg.png"
import "./MapPage.css"
import { useEffect } from "react"
import { supabase } from "../../lib/supabase"


const Home = () => {
  const [selectedTruck, setSelectedTruck] = useState(null)
  const [query, setQuery] = useState("")
  const [showRegister, setShowRegister] = useState(false)
  const [showModal, setShowModal] = useState(false)
	const [trucks, setTrucks] = useState([])

	useEffect(() => {
  const loadTrucks = async () => {
    const { data, error } = await supabase
      .from("trucks")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error && data) setTrucks(data)
  }

  loadTrucks()
}, [])


  const filteredTrucks = trucks.filter(truck =>
    `${truck.name} ${truck.description}`
      .toLowerCase()
      .includes(query.toLowerCase())
  )

  return (
    <div className="map-page">
      <div className="map-sidebar p-2">
        <div className="sidebar-top">
          <div className="sidebar-brand">
            <img src={logo} alt="WTFOOD TRUCK logo" />
          </div>

          <div className="text-center">
            <button
              className="btn btn-warning btn-sm mb-3 w-100"
              onClick={() => {
                setShowRegister(true)
                setShowModal(false)
              }}
            >
              + Register your truck
            </button>
          </div>

          <input
            type="text"
            placeholder="Search food trucks"
            className="search-input"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <div className="truck-list">
          {showRegister ? (
            <TruckRegistration
              onSubmit={async newTruck => {
								const { data, error } = await supabase
									.from("trucks")
									.insert([newTruck])
									.select()

								if (!error && data) {
									setTrucks(prev => [data[0], ...prev])
									setShowRegister(false)
								}
							}}
              onCancel={() => setShowRegister(false)}
            />
          ) : (
            filteredTrucks.map(truck => (
              <div
                key={truck.id}
                className={`truck-card ${
                  selectedTruck?.id === truck.id ? "selected" : ""
                }`}
                onClick={() => {
                  setSelectedTruck(truck)
                  setShowModal(true)
                }}
              >
                <div className="truck-name">{truck.name}</div>
                <div className="truck-meta">{truck.description}</div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="map-container">
        <OtherMap
          trucks={trucks}
          selectedTruck={selectedTruck}
          onSelectTruck={truck => {
            setSelectedTruck(truck)
            setShowModal(true)
          }}
        />
      </div>

      <TruckModal
        truck={selectedTruck}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  )
}

export default Home

