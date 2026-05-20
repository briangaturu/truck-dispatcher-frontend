// Loads by Status — donut chart + legend matching the design
const statuses = [
  { label: "Delivered", value: 48, color: "#2563eb" },
  { label: "In Transit", value: 74, color: "#16a34a" },
  { label: "Pending", value: 6, color: "#f59e0b" },
  { label: "Cancelled", value: 0, color: "#ef4444" },
];

const total = statuses.reduce((a, s) => a + s.value, 0);

// Build donut segments
const R = 44;
const CX = 60;
const CY = 60;
const STROKE = 18;
const circumference = 2 * Math.PI * R;

let offset = 0;
const segments = statuses.map((s) => {
  const dash = (s.value / total) * circumference;
  const seg = { ...s, dash, offset };
  offset += dash;
  return seg;
});

const Analytics = () => (
  <div className="dashboard-card">
    <div className="dashboard-card-header">
      <div>
        <h3 className="dashboard-card-title">Loads by Status</h3>
        <p className="dashboard-card-subtitle">Distribution across all statuses</p>
      </div>
    </div>
    <div className="flex items-center gap-6">
      {/* Donut */}
      <div className="shrink-0">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="#f1f5f9" strokeWidth={STROKE} />
          {segments.map((s) => (
            <circle
              key={s.label}
              cx={CX}
              cy={CY}
              r={R}
              fill="none"
              stroke={s.color}
              strokeWidth={STROKE}
              strokeDasharray={`${s.dash} ${circumference - s.dash}`}
              strokeDashoffset={-s.offset + circumference / 4}
              strokeLinecap="butt"
            />
          ))}
          <text x={CX} y={CY - 4} textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">{total}</text>
          <text x={CX} y={CY + 12} textAnchor="middle" fontSize="9" fill="#94a3b8">Total</text>
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-3 flex-1">
        {statuses.map((s) => (
          <div key={s.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: s.color }}></span>
              <span className="text-xs text-slate-600">{s.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-900">{s.value}</span>
              <span className="text-[10px] text-slate-400 w-8 text-right">
                {total > 0 ? Math.round((s.value / total) * 100) : 0}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Analytics;
