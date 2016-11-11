// @flow

export type Comment = {
  author: string,
  body: string,
  score: number,
};

export type Comments = {[id: string]: Comment};

export type Link = {
  author: string,
  num_comments: number,
  score: number,
  title: string,
  url: string,
};

export type Links = {[id: string]: Link};
