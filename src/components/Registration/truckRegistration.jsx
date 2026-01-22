import React, { useState, useEffect } from "react"
import Dropdown from "react-bootstrap/Dropdown"

const TruckRegistration = ({ onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    website: "",
    hoursOpen: "",
    hoursClose: "",
  })

  const [location, setLocation] = useState(null)
  const [loadingLocation, setLoadingLocation] = useState(true)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        })
        setLoadingLocation(false)
      },
      () => {
        setLoadingLocation(false)
      }
    )
  }, [])

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!location) {
      alert("Location is required. Please allow location access.")
      return
    }

    const newTruck = {
      name: form.name,
      description: form.description,
      website: form.website,
      hours: `${form.hoursOpen} - ${form.hoursClose}`,
      lat: location.lat,
      lng: location.lng,
      hashtag: `#${form.name.replace(/\s+/g, "")}`,
    }

    if (onSubmit) onSubmit(newTruck)
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "12px" }}>
      <h5 className="mb-3">Register your food truck</h5>

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Truck Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Cuisine Description"
        name="description"
        value={form.description}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Website"
        name="website"
        value={form.website}
        onChange={handleChange}
      />

      <div className="d-flex gap-2 mb-2">
        <Dropdown className="w-50">
          <Dropdown.Toggle className="w-100" variant="outline-secondary">
            {form.hoursOpen || "Opening Time"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {[
              "12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM",
              "6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM",
              "12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM",
              "6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM"
            ].map(time => (
              <Dropdown.Item
                key={time}
                onClick={() => setForm({ ...form, hoursOpen: time })}
              >
                {time}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="w-50">
          <Dropdown.Toggle className="w-100" variant="outline-secondary">
            {form.hoursClose || "Closing Time"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {[
              "12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM",
              "6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM",
              "12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM",
              "6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM"
            ].map(time => (
              <Dropdown.Item
                key={time}
                onClick={() => setForm({ ...form, hoursClose: time })}
              >
                {time}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="mb-3 text-muted" style={{ fontSize: "12px" }}>
        {loadingLocation
          ? "Detecting your location..."
          : location
          ? "Location detected"
          : "Location unavailable"}
      </div>

      <button
        type="submit"
        className="btn btn-primary w-100 mb-2"
      >
        Register Truck
      </button>

      <button
        type="button"
        className="btn btn-outline-secondary w-100"
        onClick={onCancel}
      >
        Cancel
      </button>
    </form>
  )
}

export default TruckRegistration
