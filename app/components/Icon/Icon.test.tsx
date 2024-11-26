import { CreditCard } from 'lucide-react';
import { render, screen } from '@testing-library/react';

import Icon from '.';

describe('<Icon />', () => {
  it('should render correctly', async () => {
    render(
      <Icon icon="CreditCard" svgProps={{ 'aria-label': 'Credit card icon' }} />
    );

    const audioIcon = screen.getByLabelText(/credit card icon/i);
    expect(audioIcon).toBeInTheDocument();
    expect(audioIcon).toHaveAttribute('width', '1rem');
    expect(audioIcon).toHaveAttribute('height', '1rem');
    expect(audioIcon).toHaveClass('text-muted-foreground');
  });

  it('should render with another size', async () => {
    render(
      <Icon
        icon="CreditCard"
        svgProps={{ 'aria-label': 'Credit card icon' }}
        size="xl"
      />
    );

    const audioIcon = screen.getByLabelText(/credit card icon/i);
    expect(audioIcon).toHaveAttribute('width', '1.25rem');
    expect(audioIcon).toHaveAttribute('height', '1.25rem');
  });
});
