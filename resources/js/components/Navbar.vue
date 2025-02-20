<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top mb-5">
    <div class="container">
      <router-link
        class="navbar-brand"
        to="/"
      >E-Voting</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              class="nav-link"
              aria-current="page"
              to="/"
              active-class="active fw-bold"
              exact
            >Beranda</router-link>
          </li>
          <li class="nav-item">
            <router-link
              v-if="authenticated"
              class="nav-link"
              aria-current="page"
              to="/vote"
              active-class="active fw-bold"
            >Voting</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Halaman
            </a>
            <ul
              class="dropdown-menu border-0 shadow-sm"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <router-link
                  class="dropdown-item"
                  to="/about-us"
                  active-class="active fw-bold"
                >Tentang Kami</router-link>
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  to="/contact-us"
                  active-class="active fw-bold"
                >Hubungi Kami</router-link>
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  to="/terms-and-conditions"
                  active-class="active fw-bold"
                >Syarat & Ketentuan</router-link>
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  to="/privacy-policy"
                  active-class="active fw-bold"
                >Kebijakan & Privasi</router-link>
              </li>
              <!-- <li>
                <hr class="dropdown-divider">
              </li> -->
              <!-- <li><a
                  class="dropdown-item"
                  href="#"
                >Something else here</a></li> -->
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li
            class="nav-item"
            v-if="!authenticated"
          >
            <router-link
              to="/login"
              class="btn btn-outline-dark"
              active-class="no-effect"
            ><i class="fa fa-sign-in-alt"></i> Masuk</router-link>
          </li>
          <li
            class="nav-item dropdown"
            v-else
          >
            <a
              class="nav-link dropdown-toggle active"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span v-if="userdata.student_id !== null">{{ userdata.personal_data.student_number }}</span>
              <span v-if="userdata.teacher_id !== null">{{ userdata.personal_data.email }}</span>
            </a>
            <ul
              class="dropdown-menu border-0 shadow-sm w-auto"
              aria-labelledby="navbarDropdown"
              style="width: 18rem;"
            >
              <li>
                <h6 class="dropdown-header pb-0">Masuk Sebagai</h6>
                <h6 class="dropdown-header fw-bold">{{ userdata.personal_data.name }}</h6>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li>
                <router-link
                  v-if="userdata.userdata.is_admin === 1"
                  class="dropdown-item"
                  to="/control-panel"
                ><i class="fa fa-server"></i> Control Panel</router-link>
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  to="/settings"
                ><i class="fa fa-cog"></i> Pengaturan</router-link>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a
                  class="dropdown-item"
                  href=""
                  @click.prevent="logout()"
                ><i class="fa fa-sign-out-alt"></i> Keluar</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({
      authenticated: 'authenticated',
      userdata: 'user'
    })
  },
  data () {
    return {
      current_url: window.location.href
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$toast.open({
            message: 'Logout Successfully.',
            type: 'success'
          })
          this.$router.push({ name: 'Home' })
        })
        .catch(() => {
          this.$toast.open({
            type: 'error',
            message: 'Logout Berhasil'
          })
        })
    },
  },
}
</script>