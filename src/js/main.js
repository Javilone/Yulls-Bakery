import "../scss/styles.scss";

import * as bootstrap from "bootstrap";

import "./productsButtons.js";
import "./formHandles.js";
import "./whatsapp.js";
import "./goUpButton.js";
import "./carrousel.js";

// BOOTSTRAP DEPENDENCIES FOR POPOVER (EMERGENT POPUPS INFO)
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
