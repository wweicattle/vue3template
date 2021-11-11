<template>
  <div class="Login-contain">
    <div class="content">
      <div class="left l-contain">
        <div class="tit">欢迎进入</div>
        <div class="t-content">打开Vue3的世界大门</div>
        <div class="img">
          <img src="./actor.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <el-form
          ref="ruleFormrefs"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="钥匙" props="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <!-- <el-form-item label="Age" prop="age">
            <el-input v-model.number="ruleForm.age"></el-input>
          </el-form-item> -->
          <el-form-item>
            <el-button type="primary" @click="submitBtn">Submit</el-button>
            <el-button>Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "@/network/home";

import { defineComponent } from "vue";
import { reactive, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

import { ElMessage } from "element-plus/lib/components/message";

export default defineComponent({
  name: "Login",
  setup() {
    let ruleFormrefs = ref();
    const route = useRouter();
    const rules = {
      email: [
        { required: true },
        { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" },
      ],
      password: [
        {
          required: true,
        },
      ],
    };
    const ruleForm = reactive({
      password: "",
      email: "",
    });
    const submitBtn = () => {
      ruleFormrefs.value.validate(async (val: any) => {
        console.log(val);
        if (val) {
          // 开始验证用户名与密码
          let useRes = await axios.postLogin(ruleForm);
          console.log(useRes);
          if (useRes?.data?.accessToken) {
            localStorage.setItem("token", useRes.data.accessToken);
            ElMessage({
              type: "success",
              message: "登录成功！",
            });
            route.push("/home");
          }else{
              ElMessage({
              type: "error",
              message: useRes.message,
            });
          }
          return true;
        } else {
        }
        return false;
      });
    };

    onMounted(() => {});
    return {
      ruleForm,
      rules,
      submitBtn,
      ruleFormrefs,
    };
  },
});
</script>

<style lang="scss" scoped>
body,
html {
  height: 100%;
  background-image: linear-gradient(90deg, #ebebeb, #f5f7f6);
}
.Login-contain {
  .content {
    width: 900px;
    height: 500px;
    // border: 1px solid red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 20px 5px rgb(34 84 142 / 26%);
    background: #fff;
    padding: 100px;
    .l-contain {
      text-align: center;

      .tit {
        font-size: 24px;
        font-weight: 600;
      }
      .t-content {
        margin-top: 20px;
        color: #a6afbc;
        font-size: 22px;
      }
      .img {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        height: 140px;
        img {
          border-radius: 50%;
          width: 140px;
          //   width: 100%;
        }
      }
    }
  }
}
</style>
