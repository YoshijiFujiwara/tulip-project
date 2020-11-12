import { ExhibitorEntity } from '../exhibitor.entity';
import { hasProperty } from '../../func/test.func';
import { GroupEntity } from '../group.entity';
import { ExhibitEntity, GENRE } from '../exhibit.entity';

describe('ExhibitorEntity', () => {
  let exhibitor: ExhibitorEntity;
  let mockGroup: GroupEntity;
  let mockExhibit: ExhibitEntity;

  beforeEach(() => {
    const date = new Date();

    mockExhibit = new ExhibitEntity();
    mockExhibit.id = 1;
    mockExhibit.title = '作品A';
    mockExhibit.description = 'hogehoge';
    mockExhibit.thumbnail = 'hogehoge';
    mockExhibit.genre = GENRE.IT;
    mockExhibit.presentationImage = 'hogehoge';
    mockExhibit.groupId = 1;
    mockExhibit.createdAt = date;
    mockExhibit.updatedAt = date;

    mockGroup = new GroupEntity();
    mockGroup.id = mockExhibit.groupId;
    mockGroup.name = 'チームA';
    mockGroup.exhibit = mockExhibit;
    mockGroup.createdAt = date;
    mockGroup.updatedAt = date;

    exhibitor = new ExhibitorEntity();
    exhibitor.id = 1;
    exhibitor.studentNumber = 'ohs70001';
    exhibitor.password = 'B19990101';
    exhibitor.name = '田中太郎';
    exhibitor.groupId = 1;
    exhibitor.group = mockGroup;
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
      expect(result.group).toEqual(mockGroup.transformToSerializer());
      expect(result.group.exhibit).toEqual(mockExhibit.transformToSerializer());

      expect(hasProperty(result, 'password')).toEqual(false);
      expect(hasProperty(result, 'createdAt')).toEqual(false);
      expect(hasProperty(result, 'updatedAt')).toEqual(false);
    });
  });
});
