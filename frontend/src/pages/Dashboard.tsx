export default function Dashboard() {
  const stats = [
    { label: "CO₂ Saved", value: "1.2t" },
    { label: "Active Projects", value: 4 },
    { label: "Energy Score", value: "A+" },
  ];

  return (
    <div className="p-10">
      <h2 className="text-2xl font-semibold mb-8">Dashboard</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="p-6 border rounded-lg bg-soft text-blue-600"
          >
            <p className="text-sm">{item.label}</p>
            <p className="text-2xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
