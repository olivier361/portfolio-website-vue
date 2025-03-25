<script setup>

// The use of these icons is subject to the license below.
// https://github.com/Templarian/MaterialDesign/blob/master/LICENSE

defineProps({
  iconId: {
    type: String,
    required: true,
  },
});

</script>

<template>
  <div class="svg-icon-wrapper">
    <!-- iconId: account-box-outline -->
    <svg v-if="iconId === 'account-box-outline'" xmlns="http://www.w3.org/2000/svg" id="mdi-account-box-outline" viewBox="0 0 24 24"><path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M16.5,16.25C16.5,14.75 13.5,14 12,14C10.5,14 7.5,14.75 7.5,16.25V17H16.5M12,12.25A2.25,2.25 0 0,0 14.25,10A2.25,2.25 0 0,0 12,7.75A2.25,2.25 0 0,0 9.75,10A2.25,2.25 0 0,0 12,12.25Z" /></svg>
    <!-- iconId: application-brackets-outline -->
    <svg v-else-if="iconId === 'application-brackets-outline'" xmlns="http://www.w3.org/2000/svg" id="mdi-application-brackets-outline" viewBox="0 0 24 24"><path d="M9.5,8.5L11,10L8,13L11,16L9.5,17.5L5,13L9.5,8.5M14.5,17.5L13,16L16,13L13,10L14.5,8.5L19,13L14.5,17.5M21,2H3A2,2 0 0,0 1,4V20A2,2 0 0,0 3,22H21A2,2 0 0,0 23,20V4A2,2 0 0,0 21,2M21,20H3V6H21V20Z" /></svg>
    <!-- iconId: contacts-outline -->
    <svg v-else-if="iconId === 'contacts-outline'" xmlns="http://www.w3.org/2000/svg" id="mdi-contacts-outline" viewBox="0 0 24 24"><path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M20 18H4V6H20V18M4 0H20V2H4M4 22H20V24H4M12 12C13.38 12 14.5 10.88 14.5 9.5S13.38 7 12 7 9.5 8.12 9.5 9.5 10.62 12 12 12M12 8.5C12.55 8.5 13 8.95 13 9.5S12.55 10.5 12 10.5 11 10.05 11 9.5 11.45 8.5 12 8.5M17 16C17 13.9 13.69 13 12 13S7 13.9 7 16V17H17V16M8.81 15.5C9.42 15 10.84 14.5 12 14.5C13.17 14.5 14.59 15 15.2 15.5H8.81Z" /></svg>
    <!-- iconId: file-code-outline -->
    <svg v-else-if="iconId === 'file-code-outline'" xmlns="http://www.w3.org/2000/svg" id="mdi-file-code-outline" viewBox="0 0 24 24"><path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M9.54 15.65L11.63 17.74L10.35 19L7 15.65L10.35 12.3L11.63 13.56L9.54 15.65M17 15.65L13.65 19L12.38 17.74L14.47 15.65L12.38 13.56L13.65 12.3L17 15.65Z" /></svg>
    <!-- iconId: file-document-outline -->
    <svg v-else-if="iconId === 'file-document-outline'" xmlns="http://www.w3.org/2000/svg" id="mdi-file-document-outline" viewBox="0 0 24 24"><path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" /></svg>
    <!-- iconId: gamepad-variant-outline -->
    <svg v-else-if="iconId === 'gamepad-variant-outline'" xmlns="http://www.w3.org/2000/svg" id="mdi-gamepad-variant-outline" viewBox="0 0 24 24"><path d="M6,9H8V11H10V13H8V15H6V13H4V11H6V9M18.5,9A1.5,1.5 0 0,1 20,10.5A1.5,1.5 0 0,1 18.5,12A1.5,1.5 0 0,1 17,10.5A1.5,1.5 0 0,1 18.5,9M15.5,12A1.5,1.5 0 0,1 17,13.5A1.5,1.5 0 0,1 15.5,15A1.5,1.5 0 0,1 14,13.5A1.5,1.5 0 0,1 15.5,12M17,5A7,7 0 0,1 24,12A7,7 0 0,1 17,19C15.04,19 13.27,18.2 12,16.9C10.73,18.2 8.96,19 7,19A7,7 0 0,1 0,12A7,7 0 0,1 7,5H17M7,7A5,5 0 0,0 2,12A5,5 0 0,0 7,17C8.64,17 10.09,16.21 11,15H13C13.91,16.21 15.36,17 17,17A5,5 0 0,0 22,12A5,5 0 0,0 17,7H7Z" /></svg>
    <!-- iconId: image-edit-outline -->
    <svg v-else-if="iconId === 'image-edit-outline'" xmlns="http://www.w3.org/2000/svg" id="mdi-image-edit-outline" viewBox="0 0 24 24"><path d="M22.7 14.3L21.7 15.3L19.7 13.3L20.7 12.3C20.8 12.2 20.9 12.1 21.1 12.1C21.2 12.1 21.4 12.2 21.5 12.3L22.8 13.6C22.9 13.8 22.9 14.1 22.7 14.3M13 19.9V22H15.1L21.2 15.9L19.2 13.9L13 19.9M11.21 15.83L9.25 13.47L6.5 17H13.12L15.66 14.55L13.96 12.29L11.21 15.83M11 19.9V19.05L11.05 19H5V5H19V11.31L21 9.38V5C21 3.9 20.11 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11V19.9Z" /></svg>
    <!-- iconId: video-outline -->
    <svg v-else-if="iconId === 'video-outline'" xmlns="http://www.w3.org/2000/svg" id="mdi-video-outline" viewBox="0 0 24 24"><path d="M15,8V16H5V8H15M16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5V7A1,1 0 0,0 16,6Z" /></svg>
  </div>
</template>
