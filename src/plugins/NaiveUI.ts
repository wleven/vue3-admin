import {
    create,
    NButton,
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NConfigProvider
} from 'naive-ui'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'


const NaiveUI = create({
    components: [NButton, NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NLayoutFooter, NConfigProvider]
})


export default NaiveUI
