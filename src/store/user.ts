import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userName: '张三',
    };
  },
  actions: {
    setUserName(name: string) {
      this.userName = name;
    },
  },
});
