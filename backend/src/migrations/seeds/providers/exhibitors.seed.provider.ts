import { DummyGroup, dummyGroups } from './groups.seed.provider';
import { randomJapaneseFullName } from '../../../func/rand.func';

export interface DummyExhibitor {
  id: number;
  studentNumber: string;
  password: string;
  name: string;
  group: DummyGroup;
  attendedAt?: Date;
}

export const factoryDummyExhibitors = (
  groupId,
  count = 9,
): DummyExhibitor[] => {
  let exhibitors: DummyExhibitor[] = [];
  for (let id = 1 + groupId * count; id <= groupId * count + count; id++) {
    exhibitors = [
      ...exhibitors,
      {
        id,
        studentNumber: `ohs7${('0000' + id).slice(-4)}`,
        password: 'B19990101',
        name: randomJapaneseFullName(),
        group: dummyGroups[groupId],
      },
    ];
  }
  return exhibitors;
};

export const provideDummyExhibitors = (
  limit = dummyGroups.length,
): DummyExhibitor[] => {
  let exhibitors: DummyExhibitor[] = [];
  for (let groupId = 0; groupId < limit; groupId++) {
    exhibitors = [...exhibitors, ...factoryDummyExhibitors(groupId)];
  }
  return exhibitors;
};

export const dummyExhibitors = provideDummyExhibitors();
