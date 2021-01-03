<script>
  import posts from "../posts";

  export let params = {};
  const { id } = params;
  const { title, subtitle, time, dateCreated } = $posts[id];
</script>

<div class="post">
  <h1>{title}</h1>
  <h2>{subtitle}</h2>
  <span>{time}</span>
  <span>{dateCreated}</span>
</div>

<style>
  .post {
    height: 100%;
    width: 100%;
    color: var(--light);
  }
</style>
