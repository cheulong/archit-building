import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/pages/index';
import I18nProvider from 'next-translate/I18nProvider';
import commonEN from '../../locales/en/common.json';

describe('Home', () => {
  it('renders a home page', () => {
    const { container } = render(
      <I18nProvider lang="en" namespaces={{ common: commonEN }}>
        <Home />
      </I18nProvider>,
    );

    const heading = screen.getByText('Hello world!');
    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
