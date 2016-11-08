// @flow
import * as Ship from 'redux-ship';

export type HttpResponse = {
  status: number,
  text: string,
};

export type t = {
  type: 'HttpRequest',
  url: string,
};

export function httpRequest<Action, State>(url: string): Ship.Ship<t, Action, State, HttpResponse> {
  return Ship.call({
    type: 'HttpRequest',
    url,
  });
}

function runHttpRequest(url: string): Promise<HttpResponse> {
  return new Promise((resolve) => {
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

export function run(effect: t): Promise<any> {
  switch (effect.type) {
    case 'HttpRequest':
      return runHttpRequest(effect.url);
    default:
      return effect;
  }
}
