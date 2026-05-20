// Loads Overview — SVG line/area chart matching the design
const months = ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17", "May 18"];
const delivered = [12, 18, 14, 22, 16, 28, 24];
const inTransit = [8, 12, 10, 16, 20, 18, 22];
const pending = [4, 6, 8, 5, 7, 6, 9];

const W = 400;
const H = 140;
const PAD = { top: 10, right: 10, bottom: 28, left: 30 };
const chartW = W - PAD.left - PAD.right;
const chartH = H - PAD.top - PAD.bottom;
const maxVal = 32;

const toX = (i: number) => PAD.left + (i / (months.length - 1)) * chartW;
const toY = (v: number) => PAD.top + chartH - (v / maxVal) * chartH;

const polyline = (data: number[]) =>
  data.map((v, i) => `${toX(i)},${toY(v)}`).join(" ");

const area = (data: number[]) => {
  const pts = data.map((v, i) => `${toX(i)},${toY(v)}`).join(" ");
  return `M${toX(0)},${toY(data[0])} L${pts} L${toX(data.length - 1)},${PAD.top + chartH} L${toX(0)},${PAD.top + chartH} Z`;
};

const RevenueChart = () => (
  <div className="dashboard-card">
    <div className="dashboard-card-header">
      <div>
        <h3 className="dashboard-card-title">Loads Overview</h3>
        <p className="dashboard-card-subtitle">Last 7 days performance</p>
      </div>
      <div className="flex items-center gap-3 text-[11px] text-slate-500">
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#2563eb] inline-block"></span>Delivered</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#16a34a] inline-block"></span>In Transit</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] inline-block"></span>Pending</span>
      </div>
    </div>
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id="grad-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="grad-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="grad-amber" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {[0, 8, 16, 24, 32].map((v) => (
        <g key={v}>
          <line x1={PAD.left} y1={toY(v)} x2={PAD.left + chartW} y2={toY(v)} stroke="#e2e8f0" strokeWidth="1" />
          <text x={PAD.left - 4} y={toY(v) + 3} textAnchor="end" fontSize="9" fill="#94a3b8">{v}</text>
        </g>
      ))}

      {/* Area fills */}
      <path d={area(delivered)} fill="url(#grad-blue)" />
      <path d={area(inTransit)} fill="url(#grad-green)" />
      <path d={area(pending)} fill="url(#grad-amber)" />

      {/* Lines */}
      <polyline points={polyline(delivered)} fill="none" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points={polyline(inTransit)} fill="none" stroke="#16a34a" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points={polyline(pending)} fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

      {/* X-axis labels */}
      {months.map((m, i) => (
        <text key={m} x={toX(i)} y={H - 4} textAnchor="middle" fontSize="9" fill="#94a3b8">{m}</text>
      ))}
    </svg>
  </div>
);

export default RevenueChart;
