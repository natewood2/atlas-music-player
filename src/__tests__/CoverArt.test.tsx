import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import CoverArt from '../components/CoverArt';

it('renders CoverArt', () => {
  const { container } = render(<CoverArt src="test-image.jpg" />);
  expect(container).toMatchSnapshot();
});