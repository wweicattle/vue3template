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
  ElTableColumn
} from "element-plus";
export default (app) => {
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
    .use(ElTableColumn).use(ElTable);
};
// impo
