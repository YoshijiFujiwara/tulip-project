import { GroupEntity } from '../group.entity';
import { ExhibitorEntity } from '../exhibitor.entity';
import { hasProperty } from '../../func/test.func';

describe('GroupEntity', () => {
  let group: GroupEntity;
  let mockExhibitors: ExhibitorEntity[];

  beforeEach(() => {
    group = new GroupEntity();
    group.id = 1;
    group.name = 'チームA';
    group.createdAt = new Date();
    group.updatedAt = new Date();

    mockExhibitors = [];
    ['山田花子', '佐藤二朗'].map((name, id) => {
      const mockExhibitor = new ExhibitorEntity();
      mockExhibitor.id = id + 1;
      mockExhibitor.studentNumber = `ohs7000${mockExhibitor.id}`;
      mockExhibitor.password = 'B19990101';
      mockExhibitor.name = name;
      mockExhibitor.groupId = group.id;

      const addUserDate = new Date();
      mockExhibitor.lastLoggedinAt = addUserDate;
      mockExhibitor.createdAt = addUserDate;
      mockExhibitor.updatedAt = addUserDate;
      mockExhibitors = [...mockExhibitors, mockExhibitor];
    });
    group.exhibitors = mockExhibitors;
  });

  describe('transformToSerializer', () => {
    it('シリアライズされるパラメータが正しいか', () => {
      const result = group.transformToSerializer();
      expect(result.id).toEqual(group.id);
      expect(result.name).toEqual(group.name);
      expect(result.exhibitors).toEqual(
        mockExhibitors.map(e => e.transformToSerializer()),
      );

      expect(hasProperty(result, 'createdAt')).toEqual(false);
      expect(hasProperty(result, 'updatedAt')).toEqual(false);
    });
  });
});
