import { dummyBooths } from './booths.seed.provider';
import { randRange, randomJapaneseFullName } from '../../../func/rand.func';

export interface DummyAccessLog {
  id?: number;
  url: string;
  useragent: string;
  username: string;
  avatar: Avatar;
}

const AVATAR_PRESETS = [
  'super_carrot',
  'cute_penguin',
  'baby_carrot',
  'dragon',
  'scarlet_macaw',
] as const;
type AvatarTuple = typeof AVATAR_PRESETS;
type Avatar = AvatarTuple[number];

export const provideDummyAccessLog = (limit = 100) => {
  let dummyAccessLog: DummyAccessLog[] = [];

  for (let id = 1; id <= limit; id++) {
    const username = randomJapaneseFullName();
    const avatar = AVATAR_PRESETS[randRange(AVATAR_PRESETS.length - 1)];
    const url = urlGenerate({ username, avatar });
    const useragent = dummyUserAgents[randRange(dummyUserAgents.length - 1)];

    dummyAccessLog = [
      ...dummyAccessLog,
      {
        id,
        url,
        useragent,
        username,
        avatar,
      },
    ];
  }
  return dummyAccessLog;
};

function urlGenerate({
  username,
  avatar,
}: {
  username: string;
  avatar: string;
}) {
  const url =
    randRange(1) === 0
      ? `/honnban/`
      : `/booths/${randRange(dummyBooths.length - 1)}`;
  return `${url}?username=${username}&avatar=${avatar}`;
}

const dummyUserAgents = [
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/5351 (KHTML, like Gecko) Chrome/40.0.808.0 Mobile Safari/5351',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/5332 (KHTML, like Gecko) Chrome/36.0.806.0 Mobile Safari/5332',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_9) AppleWebKit/5320 (KHTML, like Gecko) Chrome/39.0.890.0 Mobile Safari/5320',
  'Mozilla/5.0 (X11; Linux i686) AppleWebKit/5312 (KHTML, like Gecko) Chrome/37.0.885.0 Mobile Safari/5312',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/5330 (KHTML, like Gecko) Chrome/36.0.892.0 Mobile Safari/5330',
  'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/5360 (KHTML, like Gecko) Chrome/37.0.887.0 Mobile Safari/5360',
  'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_6_8) AppleWebKit/5362 (KHTML, like Gecko) Chrome/36.0.810.0 Mobile Safari/5362',
  'Mozilla/5.0 (Windows NT 5.2) AppleWebKit/5320 (KHTML, like Gecko) Chrome/40.0.826.0 Mobile Safari/5320',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/5331 (KHTML, like Gecko) Chrome/37.0.800.0 Mobile Safari/5331',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/5322 (KHTML, like Gecko) Chrome/38.0.867.0 Mobile Safari/5322',
];
