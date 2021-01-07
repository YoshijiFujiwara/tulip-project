export interface DummyPresentaionImage {
  url: string;
  page: number;
}

export const paging = (urls: string[]) =>
  urls.map(
    (url, index): DummyPresentaionImage => ({
      url,
      page: index + 1,
    }),
  );
