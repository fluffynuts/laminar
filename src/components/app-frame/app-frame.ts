import Vue from "vue";
import Component from "vue-class-component";
import { remote } from "electron";
import { eventBus } from "@/services/event-bus";

@Component({ name: "app-frame" })
export default class AppFrame extends Vue {
  public title: string = null;
  public close() {
    remote.getCurrentWindow().close();
  }

  public mounted() {
    eventBus.$on("set-title", title => this.title = title);
  }
}
