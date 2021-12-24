import { GlobalThemeOverrides } from 'naive-ui';
import ThemeCommon from '@/theme/common';
import ThemeButton from '@/theme/button';
import ThemeInput from '@/theme/input';
import ThemeForm from '@/theme/form';

const Theme: GlobalThemeOverrides = {
  common: ThemeCommon,
  Button: ThemeButton,
  Input: ThemeInput,
  Form: ThemeForm,
};

export default Theme;
