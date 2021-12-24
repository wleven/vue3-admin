export enum LocalStorageName {
  setting = 'POS_SETTING',
}

export enum SessionStorageName {
  text = 'text',
}

/**
 * 获取LocalStorage缓存数据
 * @param name key
 * @param key  对象路径
 */
export function getLocalStorage(name: LocalStorageName, key: string[] = []) {
  const value = localStorage.getItem(name);
  if (value && key) {
    const json = JSON.parse(value);
    if (typeof json === 'object') {
      return key.reduce((pre: IObject, cur) => {
        return pre[cur];
      }, json);
    }
    return json;
  }
  return undefined;
}

/**
 * 设置LocalStorage数据
 * @param name key
 * @param key 对象路径
 * @param value 值
 */
export function setLocalStorage(name: LocalStorageName, key: string[], value: any): void {
  if (key.length === 0) {
    localStorage.setItem(name, JSON.stringify(value));
    return;
  }

  const str = localStorage.getItem(name);
  let data = str ? JSON.parse(str) : {};

  if (typeof data !== 'object') {
    data = {};
  }

  key.reduce((pre: IObject, cur, index) => {
    if (!pre.hasOwnProperty(cur)) {
      pre[cur] = {};
    }

    if (index === key.length - 1) {
      pre[cur] = value;
    }
    return pre[cur];
  }, data);

  localStorage.setItem(name, JSON.stringify(data));
}

/**
 * 删除LocalStorage
 * @param name
 */
export function clearLocalStorage(name?: LocalStorageName) {
  if (name) {
    localStorage.removeItem(name);
  } else {
    localStorage.clear();
  }
}

/**
 * 获取SessionStorage缓存数据
 * @param name key
 * @param key  对象路径
 */
export function getSessionStorage(name: SessionStorageName, key: string[] = []) {
  const value = sessionStorage.getItem(name);
  if (value && key) {
    const json = JSON.parse(value);
    if (typeof json === 'object') {
      return key.reduce((pre: IObject, cur) => {
        return pre[cur];
      }, json);
    }
    return json;
  }
  return undefined;
}

/**
 * 设置SessionStorage数据
 * @param name key
 * @param key 对象路径
 * @param value 值
 */
export function setSessionStorage(name: SessionStorageName, key: string[], value: any): void {
  if (key.length === 0) {
    sessionStorage.setItem(name, JSON.stringify(value));
    return;
  }

  const str = sessionStorage.getItem(name);
  let data = str ? JSON.parse(str) : {};

  if (typeof data !== 'object') {
    data = {};
  }

  key.reduce((pre: IObject, cur, index) => {
    if (index === key.length - 1) {
      pre[cur] = value;
    }
    return pre[cur];
  }, data);

  sessionStorage.setItem(name, JSON.stringify(data));
}

/**
 * 删除SessionStorage
 * @param name
 */
export function clearSessionStorage(name?: SessionStorageName) {
  if (name) {
    sessionStorage.removeItem(name);
  } else {
    sessionStorage.clear();
  }
}
