// @flow
import * as Ship from 'redux-ship';

export type HttpRequest = {
  body: ?string,
  method: string,
  url: string,
};

export type HttpResponse = {
  status: number,
  text: string,
};

export type t = {
  type: 'HttpRequest',
  request: HttpRequest,
};

export function httpRequest<Action, State>(request: HttpRequest)
  : Ship.t<t, Action, State, HttpResponse> {
  return Ship.call({
    type: 'HttpRequest',
    request,
  });
}

function runHttpRequest(request: HttpRequest): Promise<HttpResponse> {
  return new Promise((resolve) => {
    const xmlRequest = new XMLHttpRequest();
    xmlRequest.open(request.method, request.url);
    xmlRequest.onreadystatechange = () => {
      if (xmlRequest.readyState === 4) {
        resolve({
          status: xmlRequest.status,
          text: xmlRequest.responseText,
        });
      }
    };
    xmlRequest.send(request.body);
  });
}

export function run(effect: t): Promise<any> {
  switch (effect.type) {
    case 'HttpRequest':
      return runHttpRequest(effect.request);
    default:
      return effect;
  }
}
