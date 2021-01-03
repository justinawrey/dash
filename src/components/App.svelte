<script>
  import Router from "svelte-spa-router";
  import Background from "./Background.svelte";
  import TrackMouse from "./TrackMouse.svelte";
  import TopRight from "./TopRight.svelte";

  import routes from "../routes";
</script>

<Router {routes} />
<Background />
<TrackMouse />
<TopRight />
