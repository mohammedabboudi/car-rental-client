<template>
  <HeaderSection />
  <HeroSection />
  <MainSection>
    <FleetSection />
  </MainSection>
  <FooterSection />
  <Teleport to="#modals" v-if="modalType == 'signin'">
    <ModalWidget @openSignin="toggleSigninModal">
      <template>
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="email" class="col-form-label">Email:</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="mb-3">
              <label for="password" class="col-form-label">Password:</label>
              <input type="password" class="form-control" id="password" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Send message</button>
        </div>
      </template>
    </ModalWidget>
  </Teleport>
  <Teleport to="#modals" v-if="modalType == 'signup'">
    <ModalWidget @openSignup="toggleSignupModal">
      <h3>Sign in to our newsletter</h3>
      <button>CLick Here...</button>
    </ModalWidget>
  </Teleport>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import MainSection from "@/components/MainSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import FleetSection from "@/components/FleetSection.vue";
import ModalWidget from "@/components/widgets/ModalWidget.vue";
export default {
  components: {
    HeaderSection,
    FooterSection,
    MainSection,
    HeroSection,
    FleetSection,
    ModalWidget,
  },
  data() {
    return {
      modalType: "",
    };
  },
  methods: {
    toggleSigninModal() {
      this.modalType = "signin";
      console.log("signin");
    },
    toggleSignupModal() {
      this.modalType = "signup";
      console.log("signup");
    },
  },
};
</script>

<style></style>
