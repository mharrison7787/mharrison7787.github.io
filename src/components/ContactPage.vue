<template>
    <div>
        <TCNnavbar></TCNnavbar>
        <form method="post" action="https://forms.un-static.com/forms/10146f17ad4811e2b6189db350acad6968ce8c22">
  <div class="form-group row">
    <label for="inputName" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputName" placeholder="Please enter your name">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="input-group col-sm-10">
      <div class="input-group-prepend"><i class="input-group-text fa fa-envelope"></i></div>
      <input type="email" class="form-control" id="inputEmail" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputMessage" class="col-sm-2 col-form-label">Message</label>
    <div class="col-sm-10">
      <textarea name="inputMessage" cols="40" rows="8" class="form-control"></textarea>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Send</button>
    </div>
  </div>
  <div class="text-center">
    <p><small>(Powered by <a rel="nofollow" href="Un-static Forms">Un-static Forms</a>)</small></p>
  </div>
</form>
    </div>
</template>

<script>
import TCNnavbar from '@/components/TCNnavbar.vue';
export default {
    name: 'ContactPage',
    components: {
        TCNnavbar,
    }
}
</script>

<style scoped></style>