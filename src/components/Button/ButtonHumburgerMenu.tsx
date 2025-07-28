import * as React from 'react';
import { MdRestaurantMenu } from 'react-icons/md';
import cn from '@/libs/utils/cn';
import { CgMenuHotdog } from 'react-icons/cg';

type ButtonHumbugerProps = {
  openMenu: boolean;
  handleToogle: () => void;
};

export default function ButtonHumbuger({ openMenu, handleToogle }: ButtonHumbugerProps) {
  return (
    <button type="button" className="center" onClick={() => handleToogle()}>
      {openMenu ? (
        <MdRestaurantMenu className={cn(
          'w-9 h-9 transation-all duration-500 active:-rotate-180',
        )}
        />
      ) : (
        <CgMenuHotdog className={cn(
          'w-9 h-9 transation-all duration-500 active:rotate-180',
        )}
        />
      )}
    </button>
  );
}
