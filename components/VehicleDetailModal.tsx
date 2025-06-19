'use client'

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Vehicle } from "@/lib/types"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useState } from "react"

type Props = {
  vehicle: Vehicle
}

export default function VehicleDetailModal({ vehicle }: Props) {
  const [open, setOpen] = useState(false)
  const { label, latitude, longitude, current_status, updated_at } = vehicle.attributes

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Lihat Detail
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-screen overflow-auto">
        <h2 className="text-xl font-bold mb-4">Detail Kendaraan #{label}</h2>
        <div className="space-y-2">
          <p><strong>Status:</strong> {current_status}</p>
          <p><strong>Latitude:</strong> {latitude}</p>
          <p><strong>Longitude:</strong> {longitude}</p>
          <p><strong>Waktu Update:</strong> {new Date(updated_at).toLocaleString()}</p>
        </div>

        <div className="h-64 mt-4 rounded overflow-hidden">
          <MapContainer center={[latitude, longitude]} zoom={15} scrollWheelZoom={false} className="h-full w-full z-0">
            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
              <Popup>
                Kendaraan #{label} <br /> Status: {current_status}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </DialogContent>
    </Dialog>
  )
}
