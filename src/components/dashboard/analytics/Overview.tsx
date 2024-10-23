import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', total: 167 },
  { name: 'Feb', total: 245 },
  { name: 'Mar', total: 320 },
  { name: 'Apr', total: 290 },
  { name: 'May', total: 265 },
  { name: 'Jun', total: 302 },
  { name: 'Jul', total: 389 },
  { name: 'Aug', total: 420 },
  { name: 'Sep', total: 450 },
  { name: 'Oct', total: 387 },
  { name: 'Nov', total: 423 },
  { name: 'Dec', total: 385 },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
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
        <Line
          type="monotone"
          dataKey="total"
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: 'var(--theme-primary)' },
          }}
          style={
            {
              stroke: 'hsl(var(--primary))',
            } as React.CSSProperties
          }
        />
      </LineChart>
    </ResponsiveContainer>
  );
}