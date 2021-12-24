import { GlobalThemeWithoutCommon } from 'naive-ui/es/config-provider/src/internal-interface';
import { ExtractThemeOverrides } from 'naive-ui/lib/_mixins/use-theme';

const ThemeButton: ExtractThemeOverrides<GlobalThemeWithoutCommon['Button']> = {};

export default ThemeButton;
