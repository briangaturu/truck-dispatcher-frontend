// Simple SVG bar chart for revenue
const months = ["Jan", "Feb", "Mar", "Apr", "May"];
const data = [850000, 1100000, 950000, 1400000, 2450000];
const max = Math.max(...data);

const RevenueChart = () => (
  <div className="td-table-card">
    <h3>Revenue Overview</h3>
    <div className="revenue-chart">
      <svg viewBox="0 0 400 200" width="100%" height="200">
        {data.map((val, i) => {
          const barHeight = (val / max) * 160;
          const x = 40 + i * 72;
          const y = 170 - barHeight;
          return (
            <g key={i}>
              <rect x={x} y={y} width="40" height={barHeight} rx="4" fill="#2563eb" opacity="0.85" />
              <text x={x + 20} y={190} textAnchor="middle" fontSize="11" fill="#64748b">{months[i]}</text>
              <text x={x + 20} y={y - 4} textAnchor="middle" fontSize="9" fill="#1e293b">
                {(val / 1000000).toFixed(1)}M
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  </div>
);

export default RevenueChart;