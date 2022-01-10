import {
  DialogProviderInst,
  LoadingBarProviderInst,
  MessageProviderInst,
  NotificationProviderInst,
} from 'naive-ui';

declare global {
  interface Window {
    VConsole: any;
    // naive ui Message组件
    $NMessage: MessageProviderInst;
    // naive ui LoadingBar组件
    $NLoadingBar: LoadingBarProviderInst;
    // naive ui Dialog组件
    $NDialog: DialogProviderInst;
    // naive ui Notification组件
    $NNotify: NotificationProviderInst;
  }

  interface OBJ extends Object {
    [k: string]: any;
  }
}
