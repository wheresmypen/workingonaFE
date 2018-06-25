<template>
  <div>
    <div
    v-for="(post, number) in posts"
    v-bind:key="post.number">
      <app-post>
        <h3 slot="title">{{ post.address }} <span>{{message.text}}</span></h3>
        <span slot="content">${{ post.totalValue }} CASE #{{ post.number}}</span>
      </app-post>
    </div>
  </div>
</template>
<script>
</script>
