// ActiveLoad.tsx
import { useGetLoadsQuery } from "../../features/api/loadsApi";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const ActiveLoad = () => {
  const { user } = useSelector((s: RootState) => s.auth);
  const { data: loads = [] } = useGetLoadsQuery();
  const active = loads.find(
    (l) => l.driverId === user?.id && l.status === "in_transit"
  );

  const mock = {
    id: "LD-2026-0001",
    origin: "Nairobi",
    destination: "Mombasa",
    cargo: "Electronics",
    weight: 12500,
    status: "in_transit",
    truckId: "KCD 123A",
  };

  const load = active || mock;

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-card">
      <h3 className="text-sm font-semibold text-slate-900 mb-4">Active Load</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
        <div className="flex flex-col gap-1"><strong className="text-[10px] text-slate-400 uppercase tracking-wider">Load ID</strong><span className="text-primary text-sm font-medium hover:underline cursor-pointer">{load.id}</span></div>
        <div className="flex flex-col gap-1"><strong className="text-[10px] text-slate-400 uppercase tracking-wider">Origin</strong><span className="text-sm font-medium text-slate-700">{load.origin}</span></div>
        <div className="flex flex-col gap-1"><strong className="text-[10px] text-slate-400 uppercase tracking-wider">Destination</strong><span className="text-sm font-medium text-slate-700">{load.destination}</span></div>
        <div className="flex flex-col gap-1"><strong className="text-[10px] text-slate-400 uppercase tracking-wider">Cargo</strong><span className="text-sm font-medium text-slate-700">{load.cargo}</span></div>
        <div className="flex flex-col gap-1"><strong className="text-[10px] text-slate-400 uppercase tracking-wider">Weight</strong><span className="text-sm font-medium text-slate-700">{load.weight.toLocaleString()} kg</span></div>
        <div className="flex flex-col gap-1"><strong className="text-[10px] text-slate-400 uppercase tracking-wider">Truck</strong><span className="text-sm font-medium text-slate-700">{load.truckId}</span></div>
        <div className="flex flex-col gap-1"><strong className="text-[10px] text-slate-400 uppercase tracking-wider">Status</strong>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold w-fit" style={{ background: "#eff6ff", color: "#2563eb" }}>In Transit</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveLoad;