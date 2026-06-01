export default function StatCard({ title, value, icon, trend, trendUp }) {
  return (
    <div className="sc-root">
      <div className="sc-top">
        <span className="sc-icon-wrap">{icon}</span>
        {trend && (
          <span className={`sc-trend ${trendUp ? "sc-trend-up" : "sc-trend-neutral"}`}>
            {trendUp
              ? <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
              : null}
            {trend}
          </span>
        )}
      </div>
      <p className="sc-value">{value}</p>
      <p className="sc-label">{title}</p>
    </div>
  );
}