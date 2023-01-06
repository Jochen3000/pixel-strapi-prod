<template>
  <div class="strapline">Let&#x27;s talk</div>
  <h2 class="center">Get in touch</h2>
  <div class="contacts-block-container">
    <div
      id="w-node-_7c221cb0-9b56-ef97-66fd-bf544eeacb05-8bb3785f"
      class="about"
    >
      <p>
        👋 Hello, I&#x27;m Jochen Ade<br />👀 I develop prototypes, digital
        products and web applications. <br />🌱 I use different technologies
        like HTML5, CSS/SASS, Javascript, JS Frameworks (React, Next.js) and
        tools like Figma, Wordpress, Make, Bubble, and Webflow.<br />💞️ I would
        be happy to speak about your project or idea.<br />📫 Please use my chat
        application to get in touch
        <a href="https://emojipedia.org/backhand-index-pointing-right/">👉 </a>
      </p>
    </div>
    <div class="whatsapp-container">
      <div class="whatsapp-inner">
        <div class="phone-top">
          <div class="time">
            <div class="time-display">{{ currentTime() }}</div>
          </div>
          <div class="signal-battery">
            <img
              src="images/phone-battery-status.svg"
              loading="lazy"
              alt=""
              class="phone-status-img"
            />
          </div>
        </div>
        <div class="whatsapp-top">
          <div class="profile-img">
            <img
              src="images/jochen-profile-rund-2x.png"
              loading="lazy"
              alt="profile image"
              height="36"
              class="profile-image"
            />
          </div>
          <div class="name-contact">
            <div class="profile-name">Jochen</div>
            <div class="contact-tap" :class="{ hide: !isTyping }">
              is typing...
            </div>
          </div>
        </div>
        <div class="chat-container">
          <div class="chat-container-inner">
            <div class="date-time">
              <div class="date-time-info">Today</div>
            </div>
            <div class="message-computer" :class="{ hide: !messagesComputer0 }">
              <div class="message-comp-inner">
                <div class="message-container-incoming appear">
                  <div class="message-incoming-content">
                    Hi 👋 are you interested in a collaboration?
                  </div>
                  <div class="message-time">11:40</div>
                </div>
                <div class="arrow-container-user">
                  <img
                    src="images/speech-shadow-left.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-shadow-user"
                  /><img
                    src="images/speech-left.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-img-user"
                  />
                </div>
              </div>
            </div>
            <div class="message-computer" :class="{ hide: !messagesComputer1 }">
              <div class="message-comp-inner">
                <div class="message-container-incoming">
                  <div class="message-incoming-content">What is your name?</div>
                  <div class="message-time">11:40</div>
                </div>
                <div class="arrow-container-user">
                  <img
                    src="images/speech-shadow-left.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-shadow-user"
                  /><img
                    src="images/speech-left.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-img-user"
                  />
                </div>
              </div>
            </div>
            <div class="message-user" :class="{ hide: !messagesUser0 }">
              <div class="message-container">
                <div class="message-container-inner">
                  <div class="message-content">{{ messageName }}</div>
                  <div class="message-time-status">
                    <div class="message-time">10:10</div>
                    <img
                      src="images/whatsapp-message-ok.svg"
                      loading="lazy"
                      alt=""
                      class="message-status"
                    />
                  </div>
                </div>
                <div class="arrow-container">
                  <img
                    src="images/speech-shadow.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-shadow"
                  /><img
                    src="images/speech-bar-green.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-img"
                  />
                </div>
              </div>
            </div>
            <div class="message-computer" :class="{ hide: !messagesComputer2 }">
              <div class="message-comp-inner">
                <div class="message-container-incoming">
                  <div class="message-incoming-content">How can I help?</div>
                  <div class="message-time">11:40</div>
                </div>
                <div class="arrow-container-user">
                  <img
                    src="images/speech-shadow-left.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-shadow-user"
                  /><img
                    src="images/speech-left.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-img-user"
                  />
                </div>
              </div>
            </div>
            <div class="message-user" :class="{ hide: !messagesUser1 }">
              <div class="message-container">
                <div class="message-container-inner">
                  <div class="message-content">text-entry-message</div>
                  <div class="message-time-status">
                    <div class="message-time">10:10</div>
                    <img
                      src="images/whatsapp-message-ok.svg"
                      loading="lazy"
                      alt=""
                      class="message-status"
                    />
                  </div>
                </div>
                <div class="arrow-container">
                  <img
                    src="images/speech-shadow.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-shadow"
                  /><img
                    src="images/speech-bar-green.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-img"
                  />
                </div>
              </div>
            </div>
            <div class="message-computer" :class="{ hide: !messagesComputer3 }">
              <div class="message-comp-inner">
                <div class="message-container-incoming">
                  <div class="message-incoming-content">
                    Cool 🙂 How can I reach you?
                  </div>
                  <div class="message-time">11:40</div>
                </div>
                <div class="arrow-container-user">
                  <img
                    src="images/speech-shadow-left.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-shadow-user"
                  /><img
                    src="images/speech-left.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-img-user"
                  />
                </div>
              </div>
            </div>
            <div class="message-user" :class="{ hide: !messagesUser2 }">
              <div class="message-container">
                <div class="message-container-inner">
                  <div class="message-content">text-entry-contact</div>
                  <div class="message-time-status">
                    <div class="message-time">10:10</div>
                    <img
                      src="images/whatsapp-message-ok.svg"
                      loading="lazy"
                      alt=""
                      class="message-status"
                    />
                  </div>
                </div>
                <div class="arrow-container">
                  <img
                    src="images/speech-shadow.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-shadow"
                  /><img
                    src="images/speech-bar-green.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-img"
                  />
                </div>
              </div>
            </div>
            <div class="message-computer" :class="{ hide: !messagesComputer4 }">
              <div class="message-comp-inner">
                <div class="message-container-incoming">
                  <div class="message-incoming-content">
                    Danke, ich melde mich!
                  </div>
                  <div class="message-time">11:40</div>
                </div>
                <div class="arrow-container-user">
                  <img
                    src="images/speech-shadow-left.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-shadow-user"
                  /><img
                    src="images/speech-left.svg"
                    loading="lazy"
                    alt=""
                    class="arrow-img-user"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="whatsapp-bottom">
          <div class="message-box">
            <div class="form-block w-form">
              <form
                id="wf-form-Name"
                name="wf-form-Name"
                data-name="Name"
                method="get"
                class="whatsapp-form"
              >
                <div class="message-send">
                  <input
                    @focus="onFocusName"
                    v-model="messageName"
                    type="text"
                    class="text-entry-name w-input"
                    :class="{ hide: !textEntryName }"
                    maxlength="200"
                    name="Name"
                    data-name="Name"
                    placeholder=""
                    id="name"
                    required=""
                  /><input
                    type="text"
                    class="text-entry-message w-input"
                    :class="{ hide: !textEntryMessage }"
                    maxlength="200"
                    name="message"
                    data-name="message"
                    placeholder=""
                    id="message-2"
                    required=""
                  /><input
                    type="text"
                    class="text-entry-contact w-input"
                    :class="{ hide: !textEntryContact }"
                    maxlength="200"
                    name="contact"
                    data-name="contact"
                    placeholder=""
                    id="contact-2"
                    required=""
                  /><img
                    alt="whatsapp submit button"
                    width="24"
                    height="24"
                    src="/images/button-whatsapp.svg"
                    loading="lazy"
                    class="submit-arrow-button"
                    v-on:click="displayUserMessage"
                  />
                </div>
                <input
                  type="submit"
                  data-wait=""
                  value="submit"
                  class="submit-button w-button"
                  :class="{ hide: !formSubmitButton }"
                />
              </form>
              <div class="success-message w-form-done">
                <div class="submit-success-message">ok</div>
              </div>
              <div class="w-form-fail">
                <div>error</div>
              </div>
            </div>
          </div>
          <div class="wipeup-container">
            <div class="swipe-up"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isTyping = ref(false);
const messagesUser0 = ref(false);
const messagesUser1 = ref(false);
const messagesUser2 = ref(false);
const messagesUser3 = ref(false);
const messagesComputer0 = ref(true);
const messagesComputer1 = ref(false);
const messagesComputer2 = ref(false);
const messagesComputer3 = ref(false);
const messagesComputer4 = ref(false);
const textEntryName = ref(true);
const textEntryMessage = ref(false);
const textEntryContact = ref(false);
const formSubmitButton = ref(false);

const currentTime = () => {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let minutesString = minutes <= 9 ? `0${minutes}` : `${minutes}`;
  return `${hours}:${minutesString}`;
};

// display is typing message
const isTypingDisplay = () => {
  isTyping.value = true;
  setTimeout(() => {
    isTyping.value = false;
  }, 1000);
};

// display computer message 1
const onFocusName = () => {
  isTypingDisplay();
  setTimeout(() => (messagesComputer1.value = true), 1000);
};

// display computer message 2
const displayComputerMessage2 = () => {
  isTypingDisplay();
  setTimeout(() => (messagesComputer2.value = true), 1000);
};
// display computer message 3
const displayComputerMessage3 = () => {
  isTypingDisplay();
  setTimeout(() => (messagesComputer3.value = true), 1000);
};

// Check which fields are filled and display
const displayUserMessage = () => {
  // if (textEntryContact.value) {
  //   messagesUser[2].firstElementChild.firstElementChild.firstElementChild.innerText =
  //     textEntryContact.value;
  //   messagesUser[2].classList.remove("hide");
  //   textEntryButton.classList.add("hide");
  //   displayComputerMessage(4);
  //   formSubmitButton.click();
  //   scrollUp();
  // } else if (textEntryMessage.value) {
  //   messagesUser[1].firstElementChild.firstElementChild.firstElementChild.innerText =
  //     textEntryMessage.value;
  //   messagesUser[1].classList.remove("hide");
  //   textEntryContact.classList.remove("hide");
  //   textEntryContact.focus();
  //   textEntryMessage.classList.add("hide");
  //   displayComputerMessage(3);
  //   scrollUp();
  // } else
  if (textEntryName.value) {
    //   messagesUser[0].firstElementChild.firstElementChild.firstElementChild.innerText =
    //     textEntryName.value;
    //  -> DO WITH V-MODEL
    //   messagesUser[0].classList.remove("hide");
    messagesUser0.value = true;
    //   textEntryMessage.classList.remove("hide");
    textEntryMessage.value = true;
    //   textEntryMessage.focus();
    //   textEntryName.classList.add("hide");
    textEntryName.value = false;
    //   displayComputerMessage(2);
    displayComputerMessage2();
    //   scrollUp();
  }
};
</script>
