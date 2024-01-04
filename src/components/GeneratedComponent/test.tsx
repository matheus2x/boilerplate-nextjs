import { render, screen } from '@testing-library/react';

import GeneratedComponent from '.';

describe('<GeneratedComponent />', () => {
  it('should render the heading', () => {
    // primeiro renderiza o componente com o metodo render do TLR
    const { container } = render(<GeneratedComponent />);

    // depois faz um search do DOM com o metodo screen do TLR
    const component = screen.getByRole('heading', {
      name: /GeneratedComponent/i,
    });

    // por fim, roda as análises e comparações do teste em sí
    expect(component).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
