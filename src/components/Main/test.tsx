import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the reading', () => {
    // renderiza
    const { container } = render(<Main />);

    // busca elemento e verifica existencia
    expect(
      screen.getByRole('heading', { name: /Next.js Boilerplate/i })
    ).toBeInTheDocument();

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    // renderiza
    const { container } = render(<Main />);

    // verifica se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#17182b' });
  });
});
