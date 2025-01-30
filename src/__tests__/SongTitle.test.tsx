import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SongTitle from '../components/SongTitle';

it('renders SongTitle', () => {
  const song = { title: "Test Song", artist: "Test Artist" };
  const { container } = render(<SongTitle song={song} />);
  expect(container).toMatchSnapshot();
});