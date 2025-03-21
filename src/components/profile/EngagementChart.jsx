import { Card, CardContent, Typography } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

function EngagementChart() {
  const data = [
    { month: 'Jan', engagement: 65, credibility: 70, reach: 80 },
    { month: 'Feb', engagement: 70, credibility: 72, reach: 85 },
    { month: 'Mar', engagement: 85, credibility: 75, reach: 87 },
    { month: 'Apr', engagement: 78, credibility: 78, reach: 88 },
    { month: 'May', engagement: 90, credibility: 80, reach: 90 },
    { month: 'Jun', engagement: 95, credibility: 85, reach: 92 }
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Performance Metrics
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="engagement" 
              stroke="#2E3B55" 
              strokeWidth={2}
              name="Engagement"
            />
            <Line 
              type="monotone" 
              dataKey="credibility" 
              stroke="#FF6B6B" 
              strokeWidth={2}
              name="Credibility"
            />
            <Line 
              type="monotone" 
              dataKey="reach" 
              stroke="#4CAF50" 
              strokeWidth={2}
              name="Reach"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default EngagementChart;