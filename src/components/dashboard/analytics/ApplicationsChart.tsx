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
    name: 'Mon',
    total: 45,
  },
  {
    name: 'Tue',
    total: 62,
  },
  {
    name: 'Wed',
    total: 58,
  },
  {
    name: 'Thu',
    total: 71,
  },
  {
    name: 'Fri',
    total: 49,
  },
  {
    name: 'Sat',
    total: 38,
  },
  {
    name: 'Sun',
    total: 33,
  },
];

export default function ApplicationsChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
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
          dataKey="total"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}