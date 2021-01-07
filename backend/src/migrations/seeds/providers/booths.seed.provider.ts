import { dummyOriginExhibits } from './exhibits.seed.provider';

interface DummyBooth {
  positionNumber: number;
}

const provideDummyBooths = (limit = dummyOriginExhibits.length) => {
  let booths: DummyBooth[];
  for (let id = 1; id <= limit; id++) {
    booths = [
      ...booths,
      {
        positionNumber: id,
      },
    ];
  }
  return booths;
};

export const dummyBooths = provideDummyBooths();
