import { Component, Vue } from "vue-property-decorator";
import { eventBus } from "@/services/event-bus";
import { navigate } from "@/services/navigate";

@Component({ name: "home" })
export default class StartSession extends Vue {

  public next() {
    navigate.to.prepareForSession();
  }

  public defer() {
    // TODO: tell the session service about the deferral
    eventBus.$emit("close-window");
  }
}
