import { useDialog, useLoadingBar, useMessage, useNotification } from 'naive-ui';

export default defineComponent({
  setup() {
    window.$NLoadingBar = useLoadingBar();
    window.$NMessage = useMessage();
    window.$NDialog = useDialog();
    window.$NNotify = useNotification();
  },
  render() {
    return undefined;
  },
});
