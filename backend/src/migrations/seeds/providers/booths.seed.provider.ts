import { dummyOriginExhibits } from './exhibits.seed.provider';

export interface DummyBooth {
  id: number;
  positionNumber: number;
}

const provideDummyBooths = (limit = dummyOriginExhibits.length) => {
  let booths: DummyBooth[] = [];
  for (let id = 1; id <= limit; id++) {
    booths = [
      ...booths,
      {
        id,
        positionNumber: id,
      },
    ];
  }
  return booths;
};

export const dummyBooths = provideDummyBooths();
