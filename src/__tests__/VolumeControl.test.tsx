import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import VolumeControls from '../components/VolumeControl';

it('renders VolumeControls', () => {
  const { container } = render(<VolumeControls setVolume={() => {}} />);
  expect(container).toMatchSnapshot();
});