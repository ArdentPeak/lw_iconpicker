/*!
 * lw2_iconpicker v2.0.9
 * (c) 2023 Jeff Galbraith <jeff@quasar.dev>
 * Released under the MIT License.
 */
(function(a,e){"object"===typeof exports&&"undefined"!==typeof module?module.exports=e():"function"===typeof define&&define.amd?define(e):(a="undefined"!==typeof globalThis?globalThis:a||self,a.QIconPicker=a.QIconPicker||{},a.QIconPicker.iconSet=a.QIconPicker.iconSet||{},a.QIconPicker.iconSet.evaIcons=e())})(this,function(){"use strict";var a={name:"eva-icons",icons:[{name:"eva-activity",tags:[]},{name:"eva-activity-outline",tags:[]},{name:"eva-alert-circle",tags:[]},{name:"eva-alert-circle-outline",tags:[]},{name:"eva-alert-triangle",tags:[]},{name:"eva-alert-triangle-outline",tags:[]},{name:"eva-archive",tags:[]},{name:"eva-archive-outline",tags:[]},{name:"eva-arrow-back",tags:[]},{name:"eva-arrow-back-outline",tags:[]},{name:"eva-arrow-circle-down",tags:[]},{name:"eva-arrow-circle-down-outline",tags:[]},{name:"eva-arrow-circle-left",tags:[]},{name:"eva-arrow-circle-left-outline",tags:[]},{name:"eva-arrow-circle-right",tags:[]},{name:"eva-arrow-circle-right-outline",tags:[]},{name:"eva-arrow-circle-up",tags:[]},{name:"eva-arrow-circle-up-outline",tags:[]},{name:"eva-arrow-down",tags:[]},{name:"eva-arrow-down-outline",tags:[]},{name:"eva-arrow-downward",tags:[]},{name:"eva-arrow-downward-outline",tags:[]},{name:"eva-arrow-forward",tags:[]},{name:"eva-arrow-forward-outline",tags:[]},{name:"eva-arrow-ios-back",tags:[]},{name:"eva-arrow-ios-back-outline",tags:[]},{name:"eva-arrow-ios-downward",tags:[]},{name:"eva-arrow-ios-downward-outline",tags:[]},{name:"eva-arrow-ios-forward",tags:[]},{name:"eva-arrow-ios-forward-outline",tags:[]},{name:"eva-arrow-ios-upward",tags:[]},{name:"eva-arrow-ios-upward-outline",tags:[]},{name:"eva-arrow-left",tags:[]},{name:"eva-arrow-left-outline",tags:[]},{name:"eva-arrow-right",tags:[]},{name:"eva-arrow-right-outline",tags:[]},{name:"eva-arrow-up",tags:[]},{name:"eva-arrow-up-outline",tags:[]},{name:"eva-arrow-upward",tags:[]},{name:"eva-arrow-upward-outline",tags:[]},{name:"eva-arrowhead-down",tags:[]},{name:"eva-arrowhead-down-outline",tags:[]},{name:"eva-arrowhead-left",tags:[]},{name:"eva-arrowhead-left-outline",tags:[]},{name:"eva-arrowhead-right",tags:[]},{name:"eva-arrowhead-right-outline",tags:[]},{name:"eva-arrowhead-up",tags:[]},{name:"eva-arrowhead-up-outline",tags:[]},{name:"eva-at",tags:[]},{name:"eva-at-outline",tags:[]},{name:"eva-attach",tags:[]},{name:"eva-attach-2",tags:[]},{name:"eva-attach-2-outline",tags:[]},{name:"eva-attach-outline",tags:[]},{name:"eva-award",tags:[]},{name:"eva-award-outline",tags:[]},{name:"eva-backspace",tags:[]},{name:"eva-backspace-outline",tags:[]},{name:"eva-bar-chart",tags:[]},{name:"eva-bar-chart-2",tags:[]},{name:"eva-bar-chart-2-outline",tags:[]},{name:"eva-bar-chart-outline",tags:[]},{name:"eva-battery",tags:[]},{name:"eva-battery-outline",tags:[]},{name:"eva-behance",tags:[]},{name:"eva-behance-outline",tags:[]},{name:"eva-bell",tags:[]},{name:"eva-bell-off",tags:[]},{name:"eva-bell-off-outline",tags:[]},{name:"eva-bell-outline",tags:[]},{name:"eva-bluetooth",tags:[]},{name:"eva-bluetooth-outline",tags:[]},{name:"eva-book",tags:[]},{name:"eva-book-open",tags:[]},{name:"eva-book-open-outline",tags:[]},{name:"eva-book-outline",tags:[]},{name:"eva-bookmark",tags:[]},{name:"eva-bookmark-outline",tags:[]},{name:"eva-briefcase",tags:[]},{name:"eva-briefcase-outline",tags:[]},{name:"eva-browser",tags:[]},{name:"eva-browser-outline",tags:[]},{name:"eva-brush",tags:[]},{name:"eva-brush-outline",tags:[]},{name:"eva-bulb",tags:[]},{name:"eva-bulb-outline",tags:[]},{name:"eva-calendar",tags:[]},{name:"eva-calendar-outline",tags:[]},{name:"eva-camera",tags:[]},{name:"eva-camera-outline",tags:[]},{name:"eva-car",tags:[]},{name:"eva-car-outline",tags:[]},{name:"eva-cast",tags:[]},{name:"eva-cast-outline",tags:[]},{name:"eva-charging",tags:[]},{name:"eva-charging-outline",tags:[]},{name:"eva-checkmark",tags:[]},{name:"eva-checkmark-circle",tags:[]},{name:"eva-checkmark-circle-2",tags:[]},{name:"eva-checkmark-circle-2-outline",tags:[]},{name:"eva-checkmark-circle-outline",tags:[]},{name:"eva-checkmark-outline",tags:[]},{name:"eva-checkmark-square",tags:[]},{name:"eva-checkmark-square-2",tags:[]},{name:"eva-checkmark-square-2-outline",tags:[]},{name:"eva-checkmark-square-outline",tags:[]},{name:"eva-chevron-down",tags:[]},{name:"eva-chevron-down-outline",tags:[]},{name:"eva-chevron-left",tags:[]},{name:"eva-chevron-left-outline",tags:[]},{name:"eva-chevron-right",tags:[]},{name:"eva-chevron-right-outline",tags:[]},{name:"eva-chevron-up",tags:[]},{name:"eva-chevron-up-outline",tags:[]},{name:"eva-clipboard",tags:[]},{name:"eva-clipboard-outline",tags:[]},{name:"eva-clock",tags:[]},{name:"eva-clock-outline",tags:[]},{name:"eva-close",tags:[]},{name:"eva-close-circle",tags:[]},{name:"eva-close-circle-outline",tags:[]},{name:"eva-close-outline",tags:[]},{name:"eva-close-square",tags:[]},{name:"eva-close-square-outline",tags:[]},{name:"eva-cloud-download",tags:[]},{name:"eva-cloud-download-outline",tags:[]},{name:"eva-cloud-upload",tags:[]},{name:"eva-cloud-upload-outline",tags:[]},{name:"eva-code",tags:[]},{name:"eva-code-download",tags:[]},{name:"eva-code-download-outline",tags:[]},{name:"eva-code-outline",tags:[]},{name:"eva-collapse",tags:[]},{name:"eva-collapse-outline",tags:[]},{name:"eva-color-palette",tags:[]},{name:"eva-color-palette-outline",tags:[]},{name:"eva-color-picker",tags:[]},{name:"eva-color-picker-outline",tags:[]},{name:"eva-compass",tags:[]},{name:"eva-compass-outline",tags:[]},{name:"eva-copy",tags:[]},{name:"eva-copy-outline",tags:[]},{name:"eva-corner-down-left",tags:[]},{name:"eva-corner-down-left-outline",tags:[]},{name:"eva-corner-down-right",tags:[]},{name:"eva-corner-down-right-outline",tags:[]},{name:"eva-corner-left-down",tags:[]},{name:"eva-corner-left-down-outline",tags:[]},{name:"eva-corner-left-up",tags:[]},{name:"eva-corner-left-up-outline",tags:[]},{name:"eva-corner-right-down",tags:[]},{name:"eva-corner-right-down-outline",tags:[]},{name:"eva-corner-right-up",tags:[]},{name:"eva-corner-right-up-outline",tags:[]},{name:"eva-corner-up-left",tags:[]},{name:"eva-corner-up-left-outline",tags:[]},{name:"eva-corner-up-right",tags:[]},{name:"eva-corner-up-right-outline",tags:[]},{name:"eva-credit-card",tags:[]},{name:"eva-credit-card-outline",tags:[]},{name:"eva-crop",tags:[]},{name:"eva-crop-outline",tags:[]},{name:"eva-cube",tags:[]},{name:"eva-cube-outline",tags:[]},{name:"eva-diagonal-arrow-left-down",tags:[]},{name:"eva-diagonal-arrow-left-down-outline",tags:[]},{name:"eva-diagonal-arrow-left-up",tags:[]},{name:"eva-diagonal-arrow-left-up-outline",tags:[]},{name:"eva-diagonal-arrow-right-down",tags:[]},{name:"eva-diagonal-arrow-right-down-outline",tags:[]},{name:"eva-diagonal-arrow-right-up",tags:[]},{name:"eva-diagonal-arrow-right-up-outline",tags:[]},{name:"eva-done-all",tags:[]},{name:"eva-done-all-outline",tags:[]},{name:"eva-download",tags:[]},{name:"eva-download-outline",tags:[]},{name:"eva-droplet",tags:[]},{name:"eva-droplet-off",tags:[]},{name:"eva-droplet-off-outline",tags:[]},{name:"eva-droplet-outline",tags:[]},{name:"eva-edit",tags:[]},{name:"eva-edit-2",tags:[]},{name:"eva-edit-2-outline",tags:[]},{name:"eva-edit-outline",tags:[]},{name:"eva-email",tags:[]},{name:"eva-email-outline",tags:[]},{name:"eva-expand",tags:[]},{name:"eva-expand-outline",tags:[]},{name:"eva-external-link",tags:[]},{name:"eva-external-link-outline",tags:[]},{name:"eva-eye",tags:[]},{name:"eva-eye-off",tags:[]},{name:"eva-eye-off-2",tags:[]},{name:"eva-eye-off-2-outline",tags:[]},{name:"eva-eye-off-outline",tags:[]},{name:"eva-eye-outline",tags:[]},{name:"eva-facebook",tags:[]},{name:"eva-facebook-outline",tags:[]},{name:"eva-file",tags:[]},{name:"eva-file-add",tags:[]},{name:"eva-file-add-outline",tags:[]},{name:"eva-file-outline",tags:[]},{name:"eva-file-remove",tags:[]},{name:"eva-file-remove-outline",tags:[]},{name:"eva-file-text",tags:[]},{name:"eva-file-text-outline",tags:[]},{name:"eva-film",tags:[]},{name:"eva-film-outline",tags:[]},{name:"eva-flag",tags:[]},{name:"eva-flag-outline",tags:[]},{name:"eva-flash",tags:[]},{name:"eva-flash-off",tags:[]},{name:"eva-flash-off-outline",tags:[]},{name:"eva-flash-outline",tags:[]},{name:"eva-flip",tags:[]},{name:"eva-flip-2",tags:[]},{name:"eva-flip-2-outline",tags:[]},{name:"eva-flip-outline",tags:[]},{name:"eva-folder",tags:[]},{name:"eva-folder-add",tags:[]},{name:"eva-folder-add-outline",tags:[]},{name:"eva-folder-outline",tags:[]},{name:"eva-folder-remove",tags:[]},{name:"eva-folder-remove-outline",tags:[]},{name:"eva-funnel",tags:[]},{name:"eva-funnel-outline",tags:[]},{name:"eva-gift",tags:[]},{name:"eva-gift-outline",tags:[]},{name:"eva-github",tags:[]},{name:"eva-github-outline",tags:[]},{name:"eva-globe",tags:[]},{name:"eva-globe-2",tags:[]},{name:"eva-globe-2-outline",tags:[]},{name:"eva-globe-3",tags:[]},{name:"eva-globe-outline",tags:[]},{name:"eva-google",tags:[]},{name:"eva-google-outline",tags:[]},{name:"eva-grid",tags:[]},{name:"eva-grid-outline",tags:[]},{name:"eva-hard-drive",tags:[]},{name:"eva-hard-drive-outline",tags:[]},{name:"eva-hash",tags:[]},{name:"eva-hash-outline",tags:[]},{name:"eva-headphones",tags:[]},{name:"eva-headphones-outline",tags:[]},{name:"eva-heart",tags:[]},{name:"eva-heart-outline",tags:[]},{name:"eva-home",tags:[]},{name:"eva-home-outline",tags:[]},{name:"eva-image",tags:[]},{name:"eva-image-2",tags:[]},{name:"eva-image-outline",tags:[]},{name:"eva-inbox",tags:[]},{name:"eva-inbox-outline",tags:[]},{name:"eva-info",tags:[]},{name:"eva-info-outline",tags:[]},{name:"eva-keypad",tags:[]},{name:"eva-keypad-outline",tags:[]},{name:"eva-layers",tags:[]},{name:"eva-layers-outline",tags:[]},{name:"eva-layout",tags:[]},{name:"eva-layout-outline",tags:[]},{name:"eva-link",tags:[]},{name:"eva-link-2",tags:[]},{name:"eva-link-2-outline",tags:[]},{name:"eva-link-outline",tags:[]},{name:"eva-linkedin",tags:[]},{name:"eva-linkedin-outline",tags:[]},{name:"eva-list",tags:[]},{name:"eva-list-outline",tags:[]},{name:"eva-loader-outline",tags:[]},{name:"eva-lock",tags:[]},{name:"eva-lock-outline",tags:[]},{name:"eva-log-in",tags:[]},{name:"eva-log-in-outline",tags:[]},{name:"eva-log-out",tags:[]},{name:"eva-log-out-outline",tags:[]},{name:"eva-map",tags:[]},{name:"eva-map-outline",tags:[]},{name:"eva-maximize",tags:[]},{name:"eva-maximize-outline",tags:[]},{name:"eva-menu",tags:[]},{name:"eva-menu-2",tags:[]},{name:"eva-menu-2-outline",tags:[]},{name:"eva-menu-arrow",tags:[]},{name:"eva-menu-arrow-outline",tags:[]},{name:"eva-menu-outline",tags:[]},{name:"eva-message-circle",tags:[]},{name:"eva-message-circle-outline",tags:[]},{name:"eva-message-square",tags:[]},{name:"eva-message-square-outline",tags:[]},{name:"eva-mic",tags:[]},{name:"eva-mic-off",tags:[]},{name:"eva-mic-off-outline",tags:[]},{name:"eva-mic-outline",tags:[]},{name:"eva-minimize",tags:[]},{name:"eva-minimize-outline",tags:[]},{name:"eva-minus",tags:[]},{name:"eva-minus-circle",tags:[]},{name:"eva-minus-circle-outline",tags:[]},{name:"eva-minus-outline",tags:[]},{name:"eva-minus-square",tags:[]},{name:"eva-minus-square-outline",tags:[]},{name:"eva-monitor",tags:[]},{name:"eva-monitor-outline",tags:[]},{name:"eva-moon",tags:[]},{name:"eva-moon-outline",tags:[]},{name:"eva-more-horizontal",tags:[]},{name:"eva-more-horizontal-outline",tags:[]},{name:"eva-more-vertical",tags:[]},{name:"eva-more-vertical-outline",tags:[]},{name:"eva-move",tags:[]},{name:"eva-move-outline",tags:[]},{name:"eva-music",tags:[]},{name:"eva-music-outline",tags:[]},{name:"eva-navigation",tags:[]},{name:"eva-navigation-2",tags:[]},{name:"eva-navigation-2-outline",tags:[]},{name:"eva-navigation-outline",tags:[]},{name:"eva-npm",tags:[]},{name:"eva-npm-outline",tags:[]},{name:"eva-options",tags:[]},{name:"eva-options-2",tags:[]},{name:"eva-options-2-outline",tags:[]},{name:"eva-options-outline",tags:[]},{name:"eva-pantone",tags:[]},{name:"eva-pantone-outline",tags:[]},{name:"eva-paper-plane",tags:[]},{name:"eva-paper-plane-outline",tags:[]},{name:"eva-pause-circle",tags:[]},{name:"eva-pause-circle-outline",tags:[]},{name:"eva-people",tags:[]},{name:"eva-people-outline",tags:[]},{name:"eva-percent",tags:[]},{name:"eva-percent-outline",tags:[]},{name:"eva-person",tags:[]},{name:"eva-person-add",tags:[]},{name:"eva-person-add-outline",tags:[]},{name:"eva-person-delete",tags:[]},{name:"eva-person-delete-outline",tags:[]},{name:"eva-person-done",tags:[]},{name:"eva-person-done-outline",tags:[]},{name:"eva-person-outline",tags:[]},{name:"eva-person-remove",tags:[]},{name:"eva-person-remove-outline",tags:[]},{name:"eva-phone",tags:[]},{name:"eva-phone-call",tags:[]},{name:"eva-phone-call-outline",tags:[]},{name:"eva-phone-missed",tags:[]},{name:"eva-phone-missed-outline",tags:[]},{name:"eva-phone-off",tags:[]},{name:"eva-phone-off-outline",tags:[]},{name:"eva-phone-outline",tags:[]},{name:"eva-pie-chart",tags:[]},{name:"eva-pie-chart-2",tags:[]},{name:"eva-pie-chart-outline",tags:[]},{name:"eva-pin",tags:[]},{name:"eva-pin-outline",tags:[]},{name:"eva-play-circle",tags:[]},{name:"eva-play-circle-outline",tags:[]},{name:"eva-plus",tags:[]},{name:"eva-plus-circle",tags:[]},{name:"eva-plus-circle-outline",tags:[]},{name:"eva-plus-outline",tags:[]},{name:"eva-plus-square",tags:[]},{name:"eva-plus-square-outline",tags:[]},{name:"eva-power",tags:[]},{name:"eva-power-outline",tags:[]},{name:"eva-pricetags",tags:[]},{name:"eva-pricetags-outline",tags:[]},{name:"eva-printer",tags:[]},{name:"eva-printer-outline",tags:[]},{name:"eva-question-mark",tags:[]},{name:"eva-question-mark-circle",tags:[]},{name:"eva-question-mark-circle-outline",tags:[]},{name:"eva-question-mark-outline",tags:[]},{name:"eva-radio",tags:[]},{name:"eva-radio-button-off",tags:[]},{name:"eva-radio-button-off-outline",tags:[]},{name:"eva-radio-button-on",tags:[]},{name:"eva-radio-button-on-outline",tags:[]},{name:"eva-radio-outline",tags:[]},{name:"eva-recording",tags:[]},{name:"eva-recording-outline",tags:[]},{name:"eva-refresh",tags:[]},{name:"eva-refresh-outline",tags:[]},{name:"eva-repeat",tags:[]},{name:"eva-repeat-outline",tags:[]},{name:"eva-rewind-left",tags:[]},{name:"eva-rewind-left-outline",tags:[]},{name:"eva-rewind-right",tags:[]},{name:"eva-rewind-right-outline",tags:[]},{name:"eva-save",tags:[]},{name:"eva-save-outline",tags:[]},{name:"eva-scissors",tags:[]},{name:"eva-scissors-outline",tags:[]},{name:"eva-search",tags:[]},{name:"eva-search-outline",tags:[]},{name:"eva-settings",tags:[]},{name:"eva-settings-2",tags:[]},{name:"eva-settings-2-outline",tags:[]},{name:"eva-settings-outline",tags:[]},{name:"eva-shake",tags:[]},{name:"eva-shake-outline",tags:[]},{name:"eva-share",tags:[]},{name:"eva-share-outline",tags:[]},{name:"eva-shield",tags:[]},{name:"eva-shield-off",tags:[]},{name:"eva-shield-off-outline",tags:[]},{name:"eva-shield-outline",tags:[]},{name:"eva-shopping-bag",tags:[]},{name:"eva-shopping-bag-outline",tags:[]},{name:"eva-shopping-cart",tags:[]},{name:"eva-shopping-cart-outline",tags:[]},{name:"eva-shuffle",tags:[]},{name:"eva-shuffle-2",tags:[]},{name:"eva-shuffle-2-outline",tags:[]},{name:"eva-shuffle-outline",tags:[]},{name:"eva-skip-back",tags:[]},{name:"eva-skip-back-outline",tags:[]},{name:"eva-skip-forward",tags:[]},{name:"eva-skip-forward-outline",tags:[]},{name:"eva-slash",tags:[]},{name:"eva-slash-outline",tags:[]},{name:"eva-smartphone",tags:[]},{name:"eva-smartphone-outline",tags:[]},{name:"eva-smiling-face",tags:[]},{name:"eva-smiling-face-outline",tags:[]},{name:"eva-speaker",tags:[]},{name:"eva-speaker-outline",tags:[]},{name:"eva-square",tags:[]},{name:"eva-square-outline",tags:[]},{name:"eva-star",tags:[]},{name:"eva-star-outline",tags:[]},{name:"eva-stop-circle",tags:[]},{name:"eva-stop-circle-outline",tags:[]},{name:"eva-sun",tags:[]},{name:"eva-sun-outline",tags:[]},{name:"eva-swap",tags:[]},{name:"eva-swap-outline",tags:[]},{name:"eva-sync",tags:[]},{name:"eva-sync-outline",tags:[]},{name:"eva-text",tags:[]},{name:"eva-text-outline",tags:[]},{name:"eva-thermometer",tags:[]},{name:"eva-thermometer-minus",tags:[]},{name:"eva-thermometer-minus-outline",tags:[]},{name:"eva-thermometer-outline",tags:[]},{name:"eva-thermometer-plus",tags:[]},{name:"eva-thermometer-plus-outline",tags:[]},{name:"eva-toggle-left",tags:[]},{name:"eva-toggle-left-outline",tags:[]},{name:"eva-toggle-right",tags:[]},{name:"eva-toggle-right-outline",tags:[]},{name:"eva-trash",tags:[]},{name:"eva-trash-2",tags:[]},{name:"eva-trash-2-outline",tags:[]},{name:"eva-trash-outline",tags:[]},{name:"eva-trending-down",tags:[]},{name:"eva-trending-down-outline",tags:[]},{name:"eva-trending-up",tags:[]},{name:"eva-trending-up-outline",tags:[]},{name:"eva-tv",tags:[]},{name:"eva-tv-outline",tags:[]},{name:"eva-twitter",tags:[]},{name:"eva-twitter-outline",tags:[]},{name:"eva-umbrella",tags:[]},{name:"eva-umbrella-outline",tags:[]},{name:"eva-undo",tags:[]},{name:"eva-undo-outline",tags:[]},{name:"eva-unlock",tags:[]},{name:"eva-unlock-outline",tags:[]},{name:"eva-upload",tags:[]},{name:"eva-upload-outline",tags:[]},{name:"eva-video",tags:[]},{name:"eva-video-off",tags:[]},{name:"eva-video-off-outline",tags:[]},{name:"eva-video-outline",tags:[]},{name:"eva-volume-down",tags:[]},{name:"eva-volume-down-outline",tags:[]},{name:"eva-volume-mute",tags:[]},{name:"eva-volume-mute-outline",tags:[]},{name:"eva-volume-off",tags:[]},{name:"eva-volume-off-outline",tags:[]},{name:"eva-volume-up",tags:[]},{name:"eva-volume-up-outline",tags:[]},{name:"eva-wifi",tags:[]},{name:"eva-wifi-off",tags:[]},{name:"eva-wifi-off-outline",tags:[]},{name:"eva-wifi-outline",tags:[]}]};return a});