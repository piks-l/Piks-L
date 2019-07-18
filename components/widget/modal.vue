<template>
  <div class="modal-basic">
  <a id="open-modal" href="#">Open Modal</a>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <span id="close-modal" class="close">&times;</span>
        <h2>Modal Header</h2>
      </div>
      <div class="modal-body">
        <p>Some text in the Modal Body</p>
        <p>Some other text...</p>
      </div>
      <div class="modal-footer">
        <h3>Modal Footer</h3>
      </div>
    </div>
  </div>
</div>
</template>
<script>
// Library
import $ from 'jquery'
export default {
  mounted() {
    // Get the modal
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("open-modal");
    var span = document.getElementById("close-modal");
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}
</script>
