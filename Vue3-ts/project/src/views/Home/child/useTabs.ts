import { ref, reactive, toRefs, watch } from "vue";
interface dataType {
  title: String;
  name: String;
  content: String;
}
interface types {
  options: dataType[];
}

export default function we3(props: any, emit: any) {
  let datas = props.navlist;
  let editableTabss = JSON.parse(JSON.stringify(datas));
  let editableTabs = reactive<types>({ options: editableTabss});
  watch(
    () => props.navlist,
    (newVal) => {
      console.log(3333333333);
      editableTabs.options = JSON.parse(JSON.stringify(newVal));
    },
    {
      deep: true,
    }
  );
  const editableTabsValue = ref("1");
  const removeTab = (index: number) => {
    editableTabs.options.splice(Number(index), 1);
  };
  const addNavBtn = () => {
    emit("addNavs", "wuwei");
  };
  return { editableTabsValue, removeTab, ...toRefs(editableTabs), addNavBtn };
}
