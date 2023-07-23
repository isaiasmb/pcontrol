'use client';

import { useFirstStore } from 'store/firstStore';

const Body = () => {
  const bears = useFirstStore((state) => state.bears);

  return <div className="text-slate-50 mt-5">Bears: {bears}</div>;
};

export default Body;
