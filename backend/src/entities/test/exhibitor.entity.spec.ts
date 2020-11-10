import { ExhibitorEntity } from '../exhibitor.entity';
import { hasProperty } from '../../func/test.func';

describe('ExhibitorEntity', () => {
  let exhibitor: ExhibitorEntity;

  beforeEach(() => {
    exhibitor = new ExhibitorEntity();
    exhibitor.id = 1;
    exhibitor.studentNumber = 'ohs70001';
    exhibitor.password = 'B19990101';
    exhibitor.name = '田中太郎';
    exhibitor.groupId = 1;

    const date = new Date();
    exhibitor.lastLoggedinAt = date;
    exhibitor.createdAt = date;
    exhibitor.updatedAt = date;
  });

  describe('transformToSerializer', () => {
    it('シリアライズされるパラメータが正しいか', () => {
      const result = exhibitor.transformToSerializer();
      expect(result.id).toEqual(exhibitor.id);
      expect(result.studentNumber).toEqual(exhibitor.studentNumber);
      expect(result.name).toEqual(exhibitor.name);
      expect(result.groupId).toEqual(exhibitor.groupId);
      expect(result.lastLoggedinAt).toEqual(exhibitor.lastLoggedinAt);

      expect(hasProperty(result, 'password')).toEqual(false);
      expect(hasProperty(result, 'createdAt')).toEqual(false);
      expect(hasProperty(result, 'updatedAt')).toEqual(false);
    });
  });
});
