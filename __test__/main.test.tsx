import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { describe } from 'node:test';
import Main from '@/components/Main';

describe('<Main />', () => {
  it('shoudl render the heading', () => {
    const {container} = render(<Main />);
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot()
  });

  it('should render the color specific', () => {
    const {container} = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color':'#06092b'})

    expect(container.firstChild).toMatchSnapshot()
  })
});
