import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const data = [
  {
    position: 'Frontend Dev',
    applications: 89,
  },
  {
    position: 'Backend Dev',
    applications: 75,
  },
  {
    position: 'UI Designer',
    applications: 68,
  },
  {
    position: 'DevOps',
    applications: 45,
  },
  {
    position: 'PM',
    applications: 38,
  },
];

export default function TopPositionsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis
          dataKey="position"
          type="category"
          scale="band"
          width={100}
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">
                        Applications
                      </span>
                      <span className="font-bold text-muted-foreground">
                        {payload[0].value}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <Bar
          dataKey="applications"
          fill="hsl(var(--primary))"
          radius={[0, 4, 4, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}