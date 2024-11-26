import ExpensesTable from '@/app/components/ExpensesTable';
import { ModeToggle } from '@/app/components/ModeToggle';
import Stat from '@/app/components/Stat';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
      <ModeToggle />
      <div className="w-full">
        <div className="flex gap-5">
          <Stat
            label="Renda mensal"
            icon="DollarSign"
            percentage={35}
            value={2300}
            isValueCurrency
          />

          <Stat
            label="Despesas mensais"
            icon="Coins"
            percentage={-5}
            value={2150}
            isValueCurrency
          />

          <Stat
            label="Dinheiro poupado"
            icon="PiggyBank"
            percentage={12}
            value={150}
            isValueCurrency
          />

          <Stat
            label="Transações"
            icon="CreditCard"
            percentage={-15}
            value={78}
          />
        </div>
      </div>

      <div className="w-full gap-5 mt-5">
        <ExpensesTable />
      </div>

      <div className="w-full justify-between flex gap-5 mt-5">
        <ExpensesTable />
        <ExpensesTable />
      </div>
    </main>
  );
}
