import Vue from "vue";
import Component from "vue-class-component";
import { navigate } from "@/services/navigate";

@Component({ name: "home" })
export default class Home extends Vue {

  public startSession() {
    navigate.to.startSession();
  }
}
