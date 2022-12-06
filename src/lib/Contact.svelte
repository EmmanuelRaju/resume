<script>
  import Icon from "./Icon.svelte";

</script>

<!-- Contact details -->
<ul id="contact">
  <li>
    <Icon kind="mail"/>
    <p>eraj007@gmail.com</p>
  </li>
  <li>
    <Icon kind="phone"/>
    <p>+91-7989234688</p>
  </li>
  <li>
    <Icon kind="pin"/>
    <p>Hyderabad, India</p>
  </li>
  <li class="ml-2">
    <Icon kind="linkedIn"/>
    <a href="linkedin.com/in/emmanuel-raju">
      linkedin.com/in/emmanuel-raju
    </a>
  </li>
</ul>

<style>
  ul {
  @apply px-8 grid grid-cols-1 bg-secondary py-4 text-white text-sm gap-3 sm:grid-cols-2
}

ul li {
  @apply flex items-center gap-2 col-span-1
}
/* a {
  @apply ml-1
} */
</style>