import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the reading', () => {
    // renderiza
    const { container } = render(<Main />);

    // busca elemento e verifica existencia
    expect(
      screen.getByRole('heading', { name: /Next.js React Boilerplate/i })
    ).toBeInTheDocument();

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot();
  });
});
