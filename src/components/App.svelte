<script>
  import Router from "svelte-spa-router";
  import Background from "./Background.svelte";
  import TrackMouse from "./TrackMouse.svelte";
  import ThemePicker from "./ThemePicker.svelte";

  import routes from "../routes";
</script>

<Router {routes} />
<Background />
<TrackMouse />
<ThemePicker />
