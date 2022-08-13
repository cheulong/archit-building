import { render, screen } from '@testing-library/react';
import BaseButton from './BaseButton';

describe('BaseButton', () => {
  it('renders a BaseButton', () => {
    const { container } = render(<BaseButton />);
    const content = screen.getByText('BaseButton');
    expect(content).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
