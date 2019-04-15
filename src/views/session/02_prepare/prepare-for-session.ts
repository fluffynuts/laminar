import Vue from "vue";
import Component from "vue-class-component";
import { navigate } from "@/services/navigate";

@Component({ name: "prepare-for-session" })
export default class PrepareForSession extends Vue {
  public next() {
    navigate.to.planSession();
  }
}
