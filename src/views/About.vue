<template>
  <div class="about-description">
    <h1>This is an about page</h1>
     <!-- <span>@{{ event.time }} on {{ event.date }}</span>-->
    <!-- <h3>{{ event.description }}</h3>  -->
    <!-- <EventCard  :key='event.id' :event='event' /> -->
  </div>
</template>

<script>
export default {
  name: "About",
  // props: {
  //   event: Object,
  // },
  
};
</script>

<style>
.about-description {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>