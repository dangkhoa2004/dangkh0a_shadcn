"use client";

import { AppSidebar } from "@/components/ui/app-sidebar";
import { SiteHeader } from "@/components/ui/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ChartAreaInteractive } from "./trang-chu/components/chart-area-interactive";
import { Calendar27 } from "./trang-chu/components/calendar-27";

export default function Page() {
  return (
    <div className="[--header-height:calc(var(--spacing)*14)] min-h-screen">
      <SidebarProvider className="flex flex-col">
        {/* Header */}
        <SiteHeader />

        {/* Sidebar + Content */}
        <div className="flex flex-1">
          <AppSidebar />

          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              {/* Section 1: Cards */}
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">
                    Overview
                  </span>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Revenue</span>
                </div>
                <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Users</span>
                </div>
              </div>

              {/* Section 2: Search Form and Content */}
              <div className="bg-muted/50 flex-1 rounded-xl p-6 md:min-h-min space-y-4">
                <h2 className="text-lg font-semibold">Search</h2>
                <form className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search something..."
                    className="flex-1 px-4 py-2 border rounded-md text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded-md text-sm"
                  >
                    Search
                  </button>
                </form>

                <div className="mt-6 text-muted-foreground text-sm">
                  No search results yet. Try typing something and hit Enter.
                </div>
              </div>

              {/* Section 3: Chart Area */}
              <div className="bg-muted/50 rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">
                  User Activity Chart
                </h2>
                <ChartAreaInteractive />
              </div>

              {/* Section 4: Calendar Area */}
              <div className="bg-muted/50 rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Schedule Overview
                </h2>
                <Calendar27 />
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
