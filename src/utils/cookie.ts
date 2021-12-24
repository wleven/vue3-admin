import Cookies from 'js-cookie';

export enum CookieNameEnum {
  Token = 'POS_TOKEN',
}

export function setCookie(name: CookieNameEnum, value: string, expires: number) {
  Cookies.set(name, value, {
    expires: expires,
  });
}

export function getCookie(name: CookieNameEnum) {
  return Cookies.get(name);
}

export function clearCookie(name?: CookieNameEnum) {
  if (name) {
    Cookies.remove(name);
  } else {
    Object.values(CookieNameEnum).map((value) => {
      Cookies.remove(value);
    });
  }
}
