import classNames from 'classnames';

import Icon, { IconProps } from '@/app/components/Icon';
import { formatCurrency, formatPercentage } from '@/app/utils/number';
import { Card } from '@/shadcn/ui/card';

export type StatProps = {
  label: string;
  value: number;
  isValueCurrency?: boolean;
  percentage: number;
} & Pick<IconProps, 'icon'>;

const Stat = ({
  label,
  value,
  isValueCurrency = false,
  percentage,
  icon
}: StatProps) => {
  return (
    <Card className="w-full">
      <div className="w-full p-5 flex justify-between items-center gap-8">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-sm">{label}</h1>
            <div className="w-fit">
              <Icon icon={icon} size="xl" color="white" />
            </div>
          </div>

          <div className="align-middle mt-2">
            <span className="text-xl font-semibold mr-1">
              {isValueCurrency ? formatCurrency(value) : value}
            </span>
            <span
              className={classNames('text-sm', {
                'text-green-500': percentage > 0,
                'text-red-500': percentage < 0
              })}
            >
              {formatPercentage(percentage)}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Stat;
