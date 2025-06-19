import { Vehicle } from "@/lib/types"
import VehicleDetailModal from "./VehicleDetailModal"

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const { attributes } = vehicle

  return (
    <div className="border rounded p-4 bg-white shadow-sm">
      <h2 className="font-bold text-lg mb-2">Kendaraan #{attributes.label}</h2>
      <p>Status: <strong>{attributes.current_status}</strong></p>
      <p>Latitude: {attributes.latitude}</p>
      <p>Longitude: {attributes.longitude}</p>
      <p className="text-sm text-gray-500 mt-2">Last Update: {new Date(attributes.updated_at).toLocaleString()}</p>

      <VehicleDetailModal vehicle={vehicle} />
    </div>
  )
}
