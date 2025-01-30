import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { PlayListItem } from '../components/PlayListItem';

it('renders PlayListItem ＾ዋ⋏ዋ＾', () => {
  const { container } = render(
    <PlayListItem 
      songName="Test Song"
      songTime={180}
      artist="Test Artist"
      isPlaying={false}
      onClick={() => {}}
    />
  );
  expect(container).toMatchSnapshot();
});