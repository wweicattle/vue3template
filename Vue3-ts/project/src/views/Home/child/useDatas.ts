import { ref, reactive, toRefs, watch } from "vue";

export default function sa() {
  let ope = ref(100);
  const changeOpe=()=>{
      console.log(4343);
      ope.value=200;
  }
  return { ope,changeOpe};
}
