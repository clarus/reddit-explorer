// @flow

export type Link = {
  author: string,
  permalink: string,
  score: number,
  title: string,
  url: string,
};

export type Links = {[id: string]: Link};
