'use client';

import { AddCircle, DeleteCircle } from 'iconoir-react';
import { useFirstStore } from '../../store/firstStore';

import Button from '../Button';

const Menu = () => {
  const { increasePopulation, removeAllBears } = useFirstStore(
    (state) => state
  );

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <Button
        icon={AddCircle}
        onClick={increasePopulation}
        label="Increase population"
      />
      <Button
        icon={DeleteCircle}
        onClick={removeAllBears}
        label="Remove all bears"
      />
    </div>
  );
};

export default Menu;
