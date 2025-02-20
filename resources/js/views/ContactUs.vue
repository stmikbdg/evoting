<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Beranda</router-link>
        </li>
        <li
          class="breadcrumb-item active"
          aria-current="page"
        >Hubungi Kami</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-lg-6 align-self-center">
        <div class="card border-0 shadow">
          <div class="card-body">
            <h3>Hubungi Kami</h3>
            <p>Jika ada kendala pada aplikasi harap hubungi Panitia melalui</p>
            <div class="d-grid mt-3">
              <a
                href="https://cutt.ly/mPSANwo"
                class="btn btn-light-success"
                target="_blank"
              ><i class="fab fa-whatsapp"></i> WhatsApp</a>
            </div>
            <!-- <form
              method="post"
              @submit.prevent
            >
              <div class="mb-3">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="example@example.com"
                >
              </div>
              <div class="mb-3">
                <label for="subject">Subjek</label>
                <input
                  type="text"
                  id="subject"
                  class="form-control"
                  placeholder="Subjek"
                >
              </div>
              <div class="mb-3">
                <label for="message">Pesan</label>
                <textarea
                  id="message"
                  class="form-control"
                  rows="8"
                  placeholder="Masukan pesan anda disini..."
                ></textarea>
              </div>
              <div class="d-grid">
                <button
                  type="submit"
                  class="btn btn-primary"
                  @click="cobaToast()"
                ><i class="fa fa-paper-plane"></i> Kirim</button>
              </div>
            </form> -->
          </div>
        </div>
      </div>
      <div class="col-lg-6 d-none d-lg-block">
        <img
          :src="this.$base_url + '/assets/img/phone_call.svg'"
          alt="Hubungi"
          class="img-fluid"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  metaInfo: {
    title: 'Hubungi Kami'
  },
  methods: {
    cobaToast () {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  }
}
</script>