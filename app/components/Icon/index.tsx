import { icons } from 'lucide-react';

export type IconType =
  | 'creditCard'
  | 'receiveDollars'
  | 'sendDollars'
  | 'wallet';

export type IconColor = 'red' | 'green' | 'white' | 'black' | 'gray';

export type IconSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';

export type IconProps = {
  color?: IconColor;
  size?: IconSize;
  icon: keyof typeof icons;
  svgProps?: React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>;
};

const iconSizes: { [key in IconSize]: { height: string; width: string } } = {
  sm: {
    height: '0.875rem' /* 14px */,
    width: '0.875rem'
  },
  base: {
    height: '1rem' /* 16px */,
    width: '1rem'
  },
  lg: {
    height: '1.125rem' /* 18px */,
    width: '1.125rem'
  },
  xl: {
    height: '1.25rem' /* 20px */,
    width: '1.25rem'
  },
  '2xl': {
    height: '1.5rem' /* 24px */,
    width: '1.5rem'
  },
  '3xl': {
    height: '1.875rem' /* 30px */,
    width: '1.875rem'
  }
};

const Icon = ({
  color = 'black',
  size = 'base',
  icon,
  svgProps
}: IconProps) => {
  const IconComponent = icons[icon];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      strokeWidth={1.5}
      className="text-muted-foreground"
      {...iconSizes[size]}
      {...svgProps}
    />
  );
};

export default Icon;
