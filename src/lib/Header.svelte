<!-- Header -->
<header>
  <div>
    <h1>Emmanuel Raju D</h1>
    <h3>Web Developer</h3>
    <p>
      Mechanical by Education; Software by Profession; Engineer by PASSION
    </p>
  </div>
  <div class="header-img">
    <img src="emmanuel.jpg" alt="emmanuel" />
  </div>
</header>

<style>
  header {
  @apply bg-primary p-8 text-white flex flex-col-reverse sm:flex-row sm:justify-between;
}

.header-img {
  @apply max-h-28 w-28 overflow-hidden rounded-full border-4 border-accent mb-2;
}

header h3 {
  @apply text-accent font-medium;
}

header p {
  @apply text-sm mt-1;
}
</style>