import { ExhibitEntity, GENRE } from '../exhibit.entity';
import { ExhibitorEntity } from '../exhibitor.entity';
import { GroupEntity } from '../group.entity';
import { hasProperty } from '../../func/test.func';
import { PresentationImageEntity } from '../presentationImage.entity';

describe('ExhibitEntity', () => {
  let exhibit: ExhibitEntity;
  let mockExhibitors: ExhibitorEntity[];
  let mockGroup: GroupEntity;
  let mockPresentationImage: PresentationImageEntity;

  beforeEach(() => {
    mockExhibitors = [];

    mockGroup = new GroupEntity();
    mockGroup.id = 1;
    mockGroup.name = 'チームA';
    mockGroup.createdAt = new Date();
    mockGroup.updatedAt = new Date();

    ['山田花子', '佐藤二朗'].map((name, id) => {
      const mockExhibitor = new ExhibitorEntity();
      mockExhibitor.id = id + 1;
      mockExhibitor.studentNumber = `ohs7000${mockExhibitor.id}`;
      mockExhibitor.password = 'B19990101';
      mockExhibitor.name = name;
      mockExhibitor.groupId = mockGroup.id;

      const addUserDate = new Date();
      mockExhibitor.lastLoggedinAt = addUserDate;
      mockExhibitor.createdAt = addUserDate;
      mockExhibitor.updatedAt = addUserDate;
      mockExhibitors = [...mockExhibitors, mockExhibitor];
    });
    mockGroup.exhibitors = mockExhibitors;

    exhibit = new ExhibitEntity();
    exhibit.id = mockGroup.id;
    exhibit.title = '作品A';
    exhibit.description = 'hogehoge';
    exhibit.thumbnail = 'hogehoge';
    exhibit.genre = GENRE.IT;
    exhibit.group = mockGroup;
    exhibit.groupId = mockGroup.id;

    const date = new Date();
    exhibit.createdAt = date;
    exhibit.updatedAt = date;

    mockPresentationImage = new PresentationImageEntity();
    mockPresentationImage.id = 1;
    mockPresentationImage.url = 'https://hogehoge.com';
    mockPresentationImage.exhibitId = exhibit.id;
    mockPresentationImage.createdAt = date;
    mockPresentationImage.updatedAt = date;
    exhibit.presentationImages = [mockPresentationImage];
  });

  describe('transformToSerializer', () => {
    it('シリアライズされるパラメータが正しいか', () => {
      const result = exhibit.transformToSerializer();
      expect(result.id).toEqual(exhibit.id);
      expect(result.title).toEqual(exhibit.title);
      expect(result.description).toEqual(exhibit.description);
      expect(result.thumbnail).toEqual(exhibit.thumbnail);
      expect(result.genre).toEqual(exhibit.genre);
      expect(result.presentationImages).toEqual(exhibit.presentationImages);
      expect(result.groupId).toEqual(exhibit.groupId);
      expect(result.group).toEqual(mockGroup.transformToSerializer());
      expect(result.group.exhibitors).toEqual(
        mockExhibitors.map(e => e.transformToSerializer()),
      );

      expect(hasProperty(result, 'createdAt')).toEqual(false);
      expect(hasProperty(result, 'updatedAt')).toEqual(false);
    });
  });
});
