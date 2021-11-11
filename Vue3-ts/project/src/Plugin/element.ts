import {
  ElButton,
  ElFormItem,
  ElForm,
  ElInput,
  ElIcon,
  ElContainer,
  ElAside,
  ElMain,
  ElTable,
  ElTableColumn,
  ElTabs,
  ElTabPane,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
  ElRadioButton,
  ElRadioGroup,
  ElMenu,
  ElBreadcrumb,
  ElBreadcrumbItem,
} from "element-plus";
export default (app: any) => {
  console.log(app);

  app
    .use(ElButton)
    .use(ElFormItem)
    .use(ElForm)
    .use(ElInput)
    .use(ElIcon)
    .use(ElContainer)
    .use(ElAside)
    .use(ElMain)
    .use(ElTableColumn)
    .use(ElTable)
    .use(ElTabs)
    .use(ElTabPane)
    .use(ElButton)
    .use(ElMenuItemGroup)
    .use(ElRadioGroup)
    .use(ElRadioButton)
    .use(ElSubMenu)
    .use(ElMenuItem)
    .use(ElMenu)
    .use(ElBreadcrumb)
    .use(ElBreadcrumbItem);
};
// impo
