import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

const TruckModal = ({ truck, show, onClose }) => {
  if (!truck) return null

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{truck.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p><strong>Cuisine:</strong> {truck.description}</p>
        <p><strong>Hours:</strong> {truck.hours}</p>

        {truck.Website && (
          <a
            href={truck.website}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary w-100"
          >
            Visit Website
          </a>
        )}

        {truck && (
            <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${truck.lat},${truck.lng}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-100 mt-2"
            >
                Get Directions
            </a>
            )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TruckModal
