import { Cell, Pie, PieChart, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Prescreening', value: 45, color: '#3B82F6' },
  { name: 'Assessment', value: 30, color: '#A855F7' },
  { name: 'Interview', value: 15, color: '#F97316' },
  { name: 'Offer', value: 10, color: '#22C55E' },
];

export default function StageDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        {payload[0].name}
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[0].value}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}