import { ElButton,ElSubmenu,ElCol,ElMenu,ElMenuItem,ElRow,ElIcon } from 'element-plus'

export default (app) => {
  console.log(app);
  app.use(ElButton).use(ElSubmenu).use(ElCol).use(ElMenu).use(ElMenuItem).use(ElRow).use(ElIcon);
}
