import { DummyGroup, dummyGroups } from './groups.seed.provider';
import {
  DummyExhibitor,
  factoryDummyExhibitors,
} from './exhibitors.seed.provider';
import {
  DummyPresentaionImage,
  paging,
} from './presentationImages.seed.provider';
import { GENRE } from '../../../entities/exhibit.entity';

export interface DummyExhibit {
  id?: number;
  title: string;
  genre: GENRE;
  description: string;
  thumbnail: string;
  demo: string;
  presentationImages: DummyPresentaionImage[];
  group?: DummyGroup;
  booth?: {
    positionNumber: number;
  };
  exhibitors?: DummyExhibitor[];
}

export const dummyOriginExhibits: Array<DummyExhibit> = [
  {
    title: 'たったそれだけの物語',
    genre: GENRE.MUSIC,
    description:
      '行き過ぎた欲望と力。飲み込まれた正義を取り戻す、希望を賭けた聖戦。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610697313/ks1sypu4ufolv18ek6rz.mp4',
    thumbnail:
      'https://res.cloudinary.com/db32y726v/image/upload/v1610675036/f0ihqaen3xklk9pfyfiq.jpg',
    presentationImages: paging([
      'https://res.cloudinary.com/db32y726v/image/upload/v1610675036/f0ihqaen3xklk9pfyfiq.jpg',
    ]),
  },
  {
    title: 'Rain',
    genre: GENRE.MUSIC,
    description:
      '「水」と「青色」をキーワードに、ファンタジーゲームでの水や洞窟のシーンで使われるBGMを想定して制作しました。水をピアノのアルペジオで表現し、テンションノートをたくさん入れることで水面の不安定さを出しました。ピアノのフレーズにベル系のシンセサイザーを重ねたことにより、水の透明感や光の反射による輝きが増したと思います。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610169578/z1ntvvqulbsdc9qmzz6d.mp4',
    thumbnail:
      'https://res.cloudinary.com/db32y726v/image/upload/v1610169572/jp4f9pvsran8tf2jith2.jpg',
    presentationImages: paging([
      'https://res.cloudinary.com/db32y726v/image/upload/v1610169572/jp4f9pvsran8tf2jith2.jpg',
    ]),
  },
  {
    title: 'AbsentedAge',
    genre: GENRE.GAME,
    description:
      'ARPG×SRPG×ローグライクの新世代ミックスジャンルゲーム。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610698355/b8wqtphvxayecthsvgbe.mp4',
    thumbnail:
      'https://res.cloudinary.com/db32y726v/image/upload/v1610678667/md5ynzmbphbgys2nhqzk.jpg',
    presentationImages: paging([
      'https://res.cloudinary.com/db32y726v/image/upload/v1610678844/hzunjybzwpcjfsf3pp8d.jpg',
    ]),
  },
  {
    title: '幻想霧',
    genre: GENRE.MOVIE,
    description:
      '霧に包まれた、その上空から見た世界。雲がないため夜間に地上の気温が下がる「放射冷却」により、地表付近の空気が一定温度以下になることによって発生する霧。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610693805/z1i91ohomewmyjwcvxbl.mp4',
    thumbnail:
      'https://res.cloudinary.com/db32y726v/image/upload/v1610677196/egkecxnqyllnqjjw7wmy.jpg',
    presentationImages: paging([
      'https://res.cloudinary.com/db32y726v/image/upload/v1610677197/t6zw5xpgtcclkngzvudg.jpg',
    ]),
  },
  {
    title: 'A.C.I.D',
    genre: GENRE.GAME,
    description: '「未来創造展2020」で4年制HAL大賞を受賞した作品です。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610699066/smxeq9o3swm6igwkionf.mp4',
    thumbnail:
      'https://res.cloudinary.com/db32y726v/image/upload/v1610683145/kxdrbx2ltgguwa2sm5yb.png',
    presentationImages: paging([
      'https://res.cloudinary.com/db32y726v/image/upload/v1610683145/kxdrbx2ltgguwa2sm5yb.png',
    ]),
  },
  {
    title: 'Emotion',
    genre: GENRE.MOVIE,
    description: 'モーショングラフィックスを使った動画です。',
    demo:
      'https://res.cloudinary.com/db32y726v/video/upload/v1610699459/xmeavuwwce09ddknuuim.mp4',
    thumbnail:
      'https://res.cloudinary.com/db32y726v/image/upload/v1610699970/aswvxj1tlpcdppekrhmi.jpg',
    presentationImages: paging([
      'https://res.cloudinary.com/db32y726v/image/upload/v1610680465/s0vfhnkyinnx49nslfrh.jpg',
    ]),
  },
];

export type ReqDummyExhibit = Required<DummyExhibit> | null;

export const dummyExhibits: ReqDummyExhibit[] = dummyOriginExhibits.map(
  (exhibit, index) => ({
    id: index + 1,
    ...exhibit,
    group: dummyGroups[index],
    booth: {
      id: index + 1,
      positionNumber: index + 1,
    },
    exhibitors: factoryDummyExhibitors(index),
  }),
);
