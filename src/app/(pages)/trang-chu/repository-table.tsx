// src/app/(pages)/trang-chu/repository-table.tsx
"use client";

// Import the DataTable component, its columns, and mock data from the new location
import { DataTable } from "./data-table/data-table";
import { columns } from "./data-table/columns";
import { mockRepositories } from "./data-table/data";

// Renamed the component to DataTableDemo and changed it to a named export
export function RepositoryTable() {
  return (
    <div className="container mx-auto">
      {/* Render the generic DataTable component with our specific columns and mock data */}
      <DataTable columns={columns} data={mockRepositories} />
    </div>
  );
}
