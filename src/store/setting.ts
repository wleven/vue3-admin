import { getLocalStorage, LocalStorageName, setLocalStorage } from '@/utils/storage';
import VConsole from 'vconsole';

interface IState {
  // 是否打开调试
  isConsole: boolean;
  // console实例
  vConsoleInst: VConsole | undefined;
}

const useSettingStore = defineStore('setting', {
  state: (): IState => {
    return {
      isConsole: true,
      vConsoleInst: undefined,
    };
  },

  actions: {
    init() {
      this.setConsole(!!getLocalStorage(LocalStorageName.setting, ['console']));
    },

    // 打开调试
    setConsole(value: boolean) {
      if (value) {
        this.vConsoleInst = new VConsole();
      } else {
        this.vConsoleInst?.destroy();
      }

      this.isConsole = value;
      setLocalStorage(LocalStorageName.setting, ['console'], value);
    },
  },
});

export default useSettingStore;
