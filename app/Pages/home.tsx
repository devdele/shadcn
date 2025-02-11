"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { ArrowUpRight } from "lucide-react";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const Home = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-2 md:grid-cols-3">
        <div className="rounded-xl bg-muted/50 aspect-square w-[440px] flex flex-col gap-4 justify-center items-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-[250px]"
          />
        </div>
        <div className="rounded-xl bg-muted/50 aspect-square w-[440px] flex flex-col gap-4 justify-end items-center">
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] rounded-lg shadow-lg mb-[50px]">
            <span className="text-lg font-semibold text-white tracking-wide transform hover:scale-105 transition-transform duration-300">
              Desktop
            </span>
            <span className="text-lg font-semibold text-white tracking-wide transform hover:scale-105 transition-transform duration-300">
              Mobile
            </span>
          </div>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
        <div className="rounded-xl bg-muted/50 aspect-square w-[440px] flex flex-col justify-center items-center">
          <div className="flex items-center gap-4 p-4 rounded-lg shadow-lg flex-row w-[400px]">
            <div className="rounded-xl bg-muted/50 aspect-square w-[200px] flex flex-col gap-4 justify-center items-center transition-transform duration-300 hover:scale-105">
              <div className="font-semibold">Blogs</div>
              <div className="flex flex-col justify-center items-center gap-4">
                <div>Read more</div>
                <div>
                  <ArrowUpRight />
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-muted/50 aspect-square w-[200px] flex flex-col gap-4 justify-center items-center transition-transform duration-300 hover:scale-105">
              <div className="font-semibold">Articles</div>
              <div className="flex flex-col justify-center items-center gap-4">
                <div>Read more</div>
                <div>
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg shadow-lg flex-row w-[400px]">
            <div className="rounded-xl bg-muted/50 aspect-square w-[200px] flex flex-col gap-4 justify-center items-center transition-transform duration-300 hover:scale-105">
              <div className="font-semibold">Blogs</div>
              <div className="flex flex-col justify-center items-center gap-4">
                <div>Read more</div>
                <div>
                  <ArrowUpRight />
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-muted/50 aspect-square w-[200px] flex flex-col gap-4 justify-center items-center transition-transform duration-300 hover:scale-105">
              <div className="font-semibold">Articles</div>
              <div className="flex flex-col justify-center items-center gap-2">
                <div>Read more</div>
                <div>
                  <ArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[100vh] flex flex-row rounded-xl md:min-h-min gap-4">
          <div className="rounded-xl bg-muted/50 aspect-video w-[670px] h-[400px]"></div>
          <div className="rounded-xl bg-muted/50 aspect-video w-[670px] h-[400px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
