"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"; // Added YAxis

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --- START: SIMULATED GITHUB CONTRIBUTION DATA ---
const generateGitHubContributions = (days:number) => {
  const data = [];
  const today = new Date("2025-06-14"); // Reference date as per current time provided
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD

    // Simulate varying contribution levels with some peaks and valleys
    let contributions = Math.floor(Math.random() * 8); // Base contributions 0-7
    if (Math.random() < 0.2) { // 20% chance of higher activity
      contributions += Math.floor(Math.random() * 15); // Add 0-14 for peaks
    }
    if (Math.random() < 0.1) { // 10% chance of very high activity
      contributions += Math.floor(Math.random() * 10); // Add 0-9 for super peaks
    }
    if (contributions > 25) contributions = 25; // Cap at 25, similar to the image
    if (contributions < 0) contributions = 0; // Ensure no negative contributions

    data.push({
      date: formattedDate,
      contributions: contributions,
    });
  }
  return data;
};

const gitHubChartData = generateGitHubContributions(90); // Generate 90 days of data
// --- END: SIMULATED GITHUB CONTRIBUTION DATA ---


const chartConfig = {
  contributions: {
    label: "Contributions",
    color: "var(--chart-1)", // Green color similar to GitHub
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = gitHubChartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2025-06-14"); // Reference date as per current time provided
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>dangkh0a Contribution Graph</CardTitle>
          <CardDescription>
            Showing total contributions for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillContributions" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-1)" // Using chart-1 for green
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-1)" // Using chart-1 for green
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value, index) => {
                const date = new Date(value);
                // Only show a tick label for every 7th day, or adjust based on chart density
                if (timeRange === "7d") {
                  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
                } else if (timeRange === "30d") {
                  if (index % 5 === 0) { // Show every 5th day for 30d
                      return date.toLocaleDateString("en-US", { day: "numeric" });
                  }
                } else { // 90d
                    if (index % 7 === 0) { // Show every 7th day for 90d, similar to GitHub
                        return date.toLocaleDateString("en-US", { day: "numeric" });
                    }
                }
                return ""; // Hide tick label
              }}
            />
            <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickCount={5} // Adjust as needed
                domain={[0, 'dataMax + 5']} // Ensures a bit of padding above max
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      year: "numeric", // Added year for clarity
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="contributions"
              type="natural"
              fill="url(#fillContributions)"
              stroke="var(--chart-1)" // Using chart-1 for green
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}