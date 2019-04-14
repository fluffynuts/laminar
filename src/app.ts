import Vue from "vue";
import Component from "vue-class-component";
import { eventBus } from "@/services/event-bus";

@Component({ name: "app" })
export default class App extends Vue {

  public mounted() {
    eventBus.$emit("set-title", "L A M I N A R");
  }
}

