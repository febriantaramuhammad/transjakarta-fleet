# Transjakarta Fleet Management System 🚍

Aplikasi frontend untuk sistem manajemen armada Transjakarta, sebagai salah satu tes teknis Frontend Engineer.

## 🎯 Fitur

- Autentikasi: Login & Register (dummy, tanpa backend)
- Tampilan kendaraan dalam bentuk Card
- Pagination dan filter (rute & trip)
- Detail kendaraan dalam modal dialog
- Peta lokasi kendaraan menggunakan Leaflet & OpenStreetMap
- Loading indicator & error handling
- Proteksi halaman Dashboard (harus login)
- Responsif dan mobile friendly
- Kode ditulis dalam **TypeScript** dan menggunakan **Next.js**, **Tailwind CSS**, **shadcn/ui**

## 📂 Struktur Project

transjakarta-fleet/
├── app/
│ ├── (auth)/login
│ ├── (auth)/register
│ └── dashboard/
├── components/
│ ├── VehicleCard.tsx
│ ├── Pagination.tsx
│ ├── FilterDropdown.tsx
│ ├── VehicleDetailModal.tsx
│ └── LogoutButton.tsx
├── hooks/usePagination.ts
├── lib/api.ts
├── lib/types.ts
├── docs/SDLC.md
├── docs/ARCHITECTURE.md
├── styles/globals.css
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md

1. Clone repo:
   git clone https://github.com/yourusername/transjakarta-fleet.git
   cd transjakarta-fleet

2. Install dependencies:
    npm install

3. Jalankan development:
    npm run dev

4. Buka browser:
    - http://localhost:3000/register → daftar akun
    - http://localhost:3000/login → login
    - http://localhost:3000/dashboard → lihat armada

5. email & password
    email : admin
    password: admin