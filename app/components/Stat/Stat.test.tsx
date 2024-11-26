import { render, screen } from '@testing-library/react';

import Stat from '.';

jest.mock('@/app/components/Icon', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Icon" />;
    }
  };
});

describe('<Stat />', () => {
  it('should render correctly', () => {
    render(
      <Stat label="Stat label" percentage={13} value={5000} icon="creditCard" />
    );

    expect(screen.getByText('Stat label')).toBeInTheDocument();
    expect(screen.getByText('5000')).toBeInTheDocument();
    expect(screen.getByText('+13%')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Icon')).toBeInTheDocument();
  });

  it('should render a currency value', () => {
    render(
      <Stat
        label="Stat label"
        percentage={13}
        value={5000}
        icon="creditCard"
        isValueCurrency
      />
    );

    expect(screen.getByText('€5,000.00')).toBeInTheDocument();
  });
});
