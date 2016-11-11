// @flow
import * as Ship from 'redux-ship';

export type HttpResponse = {
  status: number,
  text: string,
};

export type Effect = {
  type: 'HttpRequest',
  url: string,
} | {
  type: 'TransitionTo',
  url: string,
};

function runHttpRequest(url: string): Promise<HttpResponse> {
  return new Promise(resolve => {
    const xmlRequest = new XMLHttpRequest();
    xmlRequest.open('GET', url);
    xmlRequest.onreadystatechange = () => {
      if (xmlRequest.readyState === 4) {
        resolve({
          status: xmlRequest.status,
          text: xmlRequest.responseText,
        });
      }
    };
    xmlRequest.send();
  });
}

export function run(history: any, effect: Effect): any | Promise<any> {
  switch (effect.type) {
    case 'HttpRequest':
      return runHttpRequest(effect.url);
    case 'TransitionTo':
      return history.push(effect.url);
    default:
      return;
  }
}

export function httpRequest<Commit, State>(
  url: string
): Ship.Ship<Effect, Commit, State, HttpResponse> {
  return Ship.call({
    type: 'HttpRequest',
    url,
  });
}

export function transitionTo<Commit, State>(
  url: string
): Ship.Ship<Effect, Commit, State, void> {
  return Ship.call({
    type: 'TransitionTo',
    url,
  });
}
