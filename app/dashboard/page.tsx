"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Vehicle } from "@/lib/types";
import VehicleCard from "@/components/VehicleCard";
import Pagination from "@/components/Pagination";
import FilterDropdown from "@/components/FilterDropDown";
import { usePagination } from "@/hooks/usePagination";
import LogoutButton from "@/components/LogoutButton";

export default function DashboardPage() {
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    } 
  }, []);

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [routes, setRoutes] = useState<string[]>([]);
  const [trips, setTrips] = useState<string[]>([]);

  const { currentPage, setCurrentPage, totalPages, offset, pageSize } =
    usePagination(total, 6);

  const buildURL = () => {
    const base = `https://api-v3.mbta.com/vehicles?page[limit]=${pageSize}&page[offset]=${offset}`;
    const routeFilter = routes.map((r) => `filter[route]=${r}`).join("&");
    const tripFilter = trips.map((t) => `filter[trip]=${t}`).join("&");
    return [base, routeFilter, tripFilter].filter(Boolean).join("&");
  };

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const res = await fetch(buildURL());
        const data = await res.json();
        setVehicles(data.data);
        setTotal(
          data.data.length < pageSize
            ? offset + data.data.length
            : offset + pageSize + 1
        );
      } catch {
        setError("Gagal mengambil data kendaraan");
      } finally {
        setLoading(false);
      }
    };
    fetchVehicles();
  }, [currentPage, routes, trips]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Data Kendaraan</h1>
      <div className="ml-4 mt-4 mb-4">
    <LogoutButton />
  </div>

      <FilterDropdown
        label="Filter Rute"
        url="https://api-v3.mbta.com/routes"
        onChange={setRoutes}
      />
      <FilterDropdown
        label="Filter Trip"
        url="https://api-v3.mbta.com/trips"
        onChange={setTrips}
      />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
