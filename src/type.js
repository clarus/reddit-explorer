// @flow

export type Comment = {
  author: string,
  body_html: string,
  score: number,
};

export type Comments = {[id: string]: Comment};

export type Link = {
  author: string,
  num_comments: number,
  score: number,
  selftext_html: string,
  subreddit: string,
  thumbnail: string,
  title: string,
  url: string,
};

export type Links = {[id: string]: Link};
