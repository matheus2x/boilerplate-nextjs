import { render, screen } from '@testing-library/react';

import GeneratedComponent from '.';

describe('<GeneratedComponent />', () => {
  it('should render the heading', () => {
    const { container } = render(<GeneratedComponent />);

    expect(
      screen.getByRole('heading', { name: /GeneratedComponent/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
