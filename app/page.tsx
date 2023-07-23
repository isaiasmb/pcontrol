import Menu from 'components/Menu';
import Body from 'components/Body';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-24">
      <div className="w-96">
        <Menu />
        <Body />
      </div>
    </main>
  );
}
