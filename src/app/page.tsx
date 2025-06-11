"use client";

import { AppSidebar } from "@/components/ui/app-sidebar";
import { SiteHeader } from "@/components/ui/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ChartAreaInteractive } from "./trang-chu/components/chart-area-interactive";
import { Calendar27 } from "./trang-chu/components/calendar-27";
import { DataTableDemo } from "./trang-chu/components/table-data";
import { CookieSettingsCard } from "./trang-chu/components/cookie-settings";
import { UpgradeSubscriptionForm } from "./trang-chu/components/upgrade-subscription";

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
              {/* Section 1: Data Summary */}
              <div className="bg-muted/50 rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Data Summary</h2>
                <DataTableDemo />
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

              {/* Section 5: Cookie Settings */}
              <div className="bg-muted/50 rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Cookie Settings</h2>
                <CookieSettingsCard />
              </div>

              {/* Section 6: Upgrade Subscription */}
              <div className="bg-muted/50 rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Upgrade Subscription
                </h2>
                <UpgradeSubscriptionForm />
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
