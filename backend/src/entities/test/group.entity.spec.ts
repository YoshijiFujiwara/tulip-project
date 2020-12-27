import { GroupEntity } from '../group.entity';
import { ExhibitorEntity } from '../exhibitor.entity';
import { hasProperty } from '../../func/test.func';
import { ExhibitEntity, GENRE } from '../exhibit.entity';
import { PresentationImageEntity } from '../presentationImage.entity';

describe('GroupEntity', () => {
  let group: GroupEntity;
  let mockExhibitors: ExhibitorEntity[];
  let mockExhibit: ExhibitEntity;
  let mockPresentationImage: PresentationImageEntity;

  beforeEach(() => {
    mockExhibit = new ExhibitEntity();
    mockExhibit.id = 1;
    mockExhibit.title = '作品A';
    mockExhibit.description = 'hogehoge';
    mockExhibit.thumbnail = 'hogehoge';
    mockExhibit.genre = GENRE.IT;
    mockExhibit.groupId = 1;
    const date = new Date();
    mockExhibit.createdAt = date;
    mockExhibit.updatedAt = date;

    mockPresentationImage = new PresentationImageEntity();
    mockPresentationImage.id = 1;
    mockPresentationImage.exhibitId = mockExhibit.id;
    mockPresentationImage.url = 'https://hogehoge.com';
    mockPresentationImage.createdAt = date;
    mockPresentationImage.updatedAt = date;

    mockExhibit.presentationImages = [mockPresentationImage];

    group = new GroupEntity();
    group.id = mockExhibit.groupId;
    group.name = 'チームA';
    group.exhibit = mockExhibit;
    group.createdAt = date;
    group.updatedAt = date;

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
      expect(result.exhibit).toEqual(mockExhibit.transformToSerializer());
      expect(result.exhibitors).toEqual(
        mockExhibitors.map(e => e.transformToSerializer()),
      );

      expect(hasProperty(result, 'createdAt')).toEqual(false);
      expect(hasProperty(result, 'updatedAt')).toEqual(false);
    });
  });
});
