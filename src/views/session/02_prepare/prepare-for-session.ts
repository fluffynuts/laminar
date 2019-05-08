import Vue from "vue";
import Component from "vue-class-component";
import { navigate } from "@/services/navigate";
import { Getter } from "vuex-class";
import { ICheckItem } from "@/store/shared";

const namespace = { namespace: "preparation" };

@Component({ name: "prepare-for-session" })
export default class PrepareForSession extends Vue {

  @Getter("beforeSessionChecklist", namespace)
  public beforeSessionChecklist: ICheckItem[];

  public itemToggled(item: ICheckItem) {
    console.log("toggled", item);
  }

  public deleteItem(item: ICheckItem) {
    console.log("deleted", item);
  }

  public next() {
    navigate.to.planSession();
  }
}
