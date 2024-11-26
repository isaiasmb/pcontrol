'use client';

import { useReactTable, getCoreRowModel } from '@tanstack/react-table';

import { Card, CardTitle } from '@/shadcn/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/shadcn/ui/table';

const invoices = [
  {
    id: '001',
    category: 'Alimentação',
    plannedValue: 400,
    currentValue: 350,
    differenceValue: 50
  },
  {
    id: '002',
    category: 'Transporte',
    plannedValue: 100,
    currentValue: 50,
    differenceValue: 50
  },
  {
    id: '003',
    category: 'Lazer',
    plannedValue: 200,
    currentValue: 100,
    differenceValue: 100
  },
  {
    id: '004',
    category: 'Assinaturas',
    plannedValue: 100,
    currentValue: 100,
    differenceValue: 0
  },
  {
    id: '005',
    category: 'Compras',
    plannedValue: 250,
    currentValue: 350,
    differenceValue: 150
  }
];

const totals = {
  plannedValue: 2100,
  currentValue: 1650,
  difference: 450
};

export type Cell = {
  id?: string;
  value: null | string | number;
};

export type ExpensesTableProps = {
  title: string;
  head: Cell[];
  totals?: Cell[];
  body: { id?: string; cells: Cell[] }[];
};

const columns = [
  {
    header: '',
    accessorKey: 'category'
  }
];

const data = invoices;

const fallbackData = () => null;

const ExpensesTable = () => {
  const table = useReactTable({
    columns,
    data: data ?? fallbackData,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <Card className="w-full">
      <div className="w-full p-5">
        <div className="flex justify-between items-center mb-5">
          <CardTitle>Despesas</CardTitle>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead />
              <TableHead>Planejado</TableHead>
              <TableHead>Real</TableHead>
              <TableHead className="text-right">Diferença</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-muted/[0.5]">
              <TableCell>Total</TableCell>
              <TableCell>{totals.plannedValue}</TableCell>
              <TableCell>{totals.currentValue}</TableCell>
              <TableCell className="text-right">{totals.difference}</TableCell>
            </TableRow>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.category}</TableCell>
                <TableCell>{invoice.plannedValue}</TableCell>
                <TableCell>{invoice.currentValue}</TableCell>
                <TableCell className="text-right">
                  {invoice.differenceValue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default ExpensesTable;
