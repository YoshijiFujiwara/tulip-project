import { GroupEntity } from '../group.entity';
import { ExhibitorEntity } from '../exhibitor.entity';

describe('GroupEntity', () => {
  let group: GroupEntity;

  beforeEach(() => {
    group = new GroupEntity();
    group.id = 1;
    group.name = 'チームA';
    group.createdAt = new Date();
    group.updatedAt = new Date();
    group.exhibitors = [];

    ['山田花子', '佐藤二朗'].map((name, id) => {
      const mockExhibitor = new ExhibitorEntity();
      mockExhibitor.id = id + 1;
      mockExhibitor.studentNumber = `ohs7000${mockExhibitor.id}`;
      mockExhibitor.password = 'B19990101';
      mockExhibitor.name = name;
      mockExhibitor.group = group;
      mockExhibitor.groupId = group.id;

      const addUserDate = new Date();
      mockExhibitor.lastLoggedinAt = addUserDate;
      mockExhibitor.createdAt = addUserDate;
      mockExhibitor.updatedAt = addUserDate;
      group.exhibitors = [...group.exhibitors, mockExhibitor];
    });
  });

  describe('transformToSerializer', () => {
    it('シリアライズされるパラメータが正しいか', () => {
      const result = group.transformToSerializer();
      expect(result.id).toEqual(group.id);
      expect(result.name).toEqual(group.name);
      expect(result.exhibitors).toEqual(
        group.exhibitors.map(e => e.transformToSerializer()),
      );
      expect(hasProperty(result, 'createdAt')).toEqual(false);
      expect(hasProperty(result, 'updatedAt')).toEqual(false);
    });
  });
});

const hasProperty = (obj, key) =>
  !!obj && Object.prototype.hasOwnProperty.call(obj, key);
