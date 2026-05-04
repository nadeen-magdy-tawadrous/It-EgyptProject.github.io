/*function inputAvatar(input) {
  var reader = new FileReader();
  reader.onload = function (e) {
    var img = document.getElementById("avatar-img");
    var initials = document.getElementById("avatar-initials");
    img.src = e.target.result;
    img.style.display = "inline";
    initials.style.display = "none";
  };
  reader.readAsDataURL(input.files[0]);
}

function showEdit() {
  document.getElementById("view-info").classList.add("hidden");
  document.getElementById("edit-info").classList.remove("hidden");
}

function saveInfo() {
  document.getElementById("full-name").textContent =
    document.getElementById("e-name").value;
  document.getElementById("email").textContent =
    document.getElementById("e-email").value;
  document.getElementById("gender").textContent =
    document.getElementById("e-gender").value;
  document.getElementById("nationality").textContent =
    document.getElementById("e-nationality").value;
  document.getElementById("dob").textContent =
    document.getElementById("e-dob").value;
  document.getElementById("view-info").classList.remove("hidden");
  document.getElementById("edit-info").classList.add("hidden");
}





const searchInput = document.getElementById("tableSearch");

    searchInput.addEventListener("keyup", function () {
      const filter = searchInput.value.toLowerCase();
      const table = document.getElementById("ticketsTable");
      const cells = table.getElementsByTagName("td");

      if (filter === "") {
        for (let cell of cells) {
          cell.style.backgroundColor = "";
          cell.style.opacity = "1";
        }
        return;
      }

      for (let cell of cells) {
        const text = cell.textContent.toLowerCase();
        if (text.includes(filter)) {
          cell.style.backgroundColor = "rgba(234, 205, 118, 0.4)";
          cell.style.opacity = "1";
        } else {
          cell.style.backgroundColor = "";
          cell.style.opacity = "0.3";
        }
      }
    });
    function changeCount(button, amount) {
      const container = button.parentElement;
      const countSpan = container.querySelector(".count");

      let currentCount = parseInt(countSpan.innerText) || 0;
      currentCount += amount;

      if (currentCount < 0) {
        currentCount = 0;
      }

      countSpan.innerText = currentCount;
    }






     function doLogin() {
    document.getElementById('loginBox').style.display = 'flex';
}

function doSignup() {
    document.getElementById('signupBox').style.display = 'flex';
}

function closeAll() {
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('signupBox').style.display = 'none';
}

// إغلاق عند الضغط خارج الصندوق
window.onclick = function(event) {
    if (event.target.className === 'popup-overlay') {
        closeAll();
    }
}










/* ===== DARK / LIGHT MODE TOGGLE ===== 
(function () {
  // Inject the toggle button into every page
  function injectToggle() {
    var btn = document.createElement("button");
    btn.id = "theme-toggle";
    btn.title = "Toggle dark / light mode";
    btn.setAttribute("aria-label", "Toggle dark / light mode");

    var saved = localStorage.getItem("misr-theme") || "dark";
    applyTheme(saved, btn);

    btn.addEventListener("click", function () {
      var current = localStorage.getItem("misr-theme") || "dark";
      var next = current === "dark" ? "light" : "dark";
      localStorage.setItem("misr-theme", next);
      applyTheme(next, btn);
    });

    document.body.appendChild(btn);
  }

  function applyTheme(theme, btn) {
    if (theme === "light") {
      document.body.classList.add("light-mode");
      btn.textContent = "🌙"; // click to go dark
      btn.title = "Switch to dark mode";
    } else {
      document.body.classList.remove("light-mode");
      btn.textContent = "☀️"; // click to go light
      btn.title = "Switch to light mode";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectToggle);
  } else {
    injectToggle();
  }
})();
*/







/* =====================================================================
   egypt.js  –  MISR LEGACY  –  Single unified script
   Covers: Auth, Profile, Tickets, Search, Theme Toggle
   Storage: localStorage  (Read & Write)
   ===================================================================== */

/* ───────────────────────────────────────────────
   1. DARK / LIGHT MODE TOGGLE
─────────────────────────────────────────────── */
(function () {
  function injectToggle() {
    var btn = document.createElement("button");
    btn.id = "theme-toggle";
    btn.title = "Toggle dark / light mode";
    btn.setAttribute("aria-label", "Toggle dark / light mode");

    var saved = localStorage.getItem("misr-theme") || "dark";
    applyTheme(saved, btn);

    btn.addEventListener("click", function () {
      var current = localStorage.getItem("misr-theme") || "dark";
      var next = current === "dark" ? "light" : "dark";
      localStorage.setItem("misr-theme", next);   // WRITE to storage
      applyTheme(next, btn);
    });

    document.body.appendChild(btn);
  }

  function applyTheme(theme, btn) {
    if (theme === "light") {
      document.body.classList.add("light-mode");
      btn.textContent = "Light";
      btn.title = "Switch to dark mode";
    } else {
      document.body.classList.remove("light-mode");
      btn.textContent = "Dark";
      btn.title = "Switch to light mode";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectToggle);
  } else {
    injectToggle();
  }
})();



/*(function () {
  function injectToggle() {
    var btn = document.createElement("button");
    btn.id = "theme-toggle";
    btn.title = "Toggle dark / light mode";
    btn.setAttribute("aria-label", "Toggle dark / light mode");
    
    // إضافة الدائرة اللي هتتحرك جوه الزرار
    btn.innerHTML = '<span class="toggle-thumb"></span>';

    var saved = localStorage.getItem("misr-theme") || "dark";
    applyTheme(saved, btn);

    btn.addEventListener("click", function () {
      var current = localStorage.getItem("misr-theme") || "dark";
      var next = current === "dark" ? "light" : "dark";
      localStorage.setItem("misr-theme", next);
      applyTheme(next, btn);
    });

    document.body.appendChild(btn);
  }

  function applyTheme(theme, btn) {
    if (theme === "light") {
      document.body.classList.add("light-mode");
      btn.classList.add("active"); // عشان يحرك الدائرة لليمين
      btn.title = "Switch to dark mode";
    } else {
      document.body.classList.remove("light-mode");
      btn.classList.remove("active"); // يرجع الدائرة للشمال
      btn.title = "Switch to light mode";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectToggle);
  } else {
    injectToggle();
  }
})();*/






/* ───────────────────────────────────────────────
   2. AUTH  –  Sign Up / Login / Logout
   Storage keys:
     misr-users  → JSON array of {username, password, name}
     misr-current → username of logged-in user
─────────────────────────────────────────────── */

// ── helpers ──────────────────────────────────
function getUsers() {
  return JSON.parse(localStorage.getItem("misr-users") || "[]");  // READ
}
function saveUsers(arr) {
  localStorage.setItem("misr-users", JSON.stringify(arr));        // WRITE
}
function getCurrentUser() {
  var u = localStorage.getItem("misr-current");                   // READ
  if (!u) return null;
  return getUsers().find(function (x) { return x.username === u; }) || null;
}
function setCurrentUser(username) {
  localStorage.setItem("misr-current", username);                 // WRITE
}
function logoutUser() {
  localStorage.removeItem("misr-current");                        // DELETE
  updateNavForAuth();
}

// ── show / hide popups ────────────────────────
function doLogin() {
  document.getElementById("loginBox").style.display = "flex";
  clearAuthMsg("login-msg");
}
function doSignup() {
  document.getElementById("signupBox").style.display = "flex";
  clearAuthMsg("signup-msg");
}
function closeAll() {
  ["loginBox", "signupBox"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
}
window.onclick = function (event) {
  if (event.target.classList.contains("popup-overlay")) closeAll();
};

// ── message helpers ───────────────────────────
function showMsg(id, text, ok) {
  var el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  el.style.color = ok ? "#4caf50" : "#e57373";
}
function clearAuthMsg(id) {
  var el = document.getElementById(id);
  if (el) el.textContent = "";
}

// ── SIGN-UP with custom JS validation ─────────
function doSignupSubmit() {
  var username = (document.getElementById("su-username").value || "").trim();
  var name = (document.getElementById("su-name").value || "").trim();
  var email = (document.getElementById("su-email").value || "").trim();
  var password = (document.getElementById("su-password").value || "");
  var confirm = (document.getElementById("su-confirm").value || "");

  // ── Custom JS validation (no HTML5) ──────────
  if (!username) { showMsg("signup-msg", "Username is required."); return; }
  if (username.length < 3) { showMsg("signup-msg", "Username must be at least 3 characters."); return; }
  if (!name) { showMsg("signup-msg", "Full name is required."); return; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showMsg("signup-msg", "Enter a valid email address."); return;
  }
  if (!password) { showMsg("signup-msg", "Password is required."); return; }
  if (password.length < 6) { showMsg("signup-msg", "Password must be at least 6 characters."); return; }
  if (password !== confirm) { showMsg("signup-msg", "Passwords do not match."); return; }

  var users = getUsers();
  if (users.find(function (u) { return u.username === username; })) {
    showMsg("signup-msg", "Username already taken."); return;
  }

  users.push({ username: username, password: password, name: name, email: email });
  saveUsers(users);        // WRITE
  setCurrentUser(username); // WRITE
  showMsg("signup-msg", "Account created! Redirecting…", true);
  setTimeout(function () { closeAll(); updateNavForAuth(); }, 1200);
}

// ── LOGIN with custom JS validation ───────────
function doLoginSubmit() {
  var username = (document.getElementById("li-username").value || "").trim();
  var password = (document.getElementById("li-password").value || "");

  // ── Custom JS validation ──────────────────────
  if (!username) { showMsg("login-msg", "Username is required."); return; }
  if (!password) { showMsg("login-msg", "Password is required."); return; }

  var users = getUsers();
  var found = users.find(function (u) {
    return u.username === username && u.password === password;
  });

  if (!found) { showMsg("login-msg", "Incorrect username or password."); return; }

  setCurrentUser(username);  // WRITE
  showMsg("login-msg", "Welcome back, " + found.name + "!", true);
  setTimeout(function () { closeAll(); updateNavForAuth(); }, 1000);
}

// ── update nav (show username / logout) ───────
function updateNavForAuth() {
  var user = getCurrentUser();
  var authDiv = document.querySelector(".auth-buttons");
  if (!authDiv) return;

  if (user) {
    authDiv.innerHTML =
      '<span style="color:#D4AF37;font-family:Cinzel,serif;font-size:14px;margin-right:10px;">👤 ' +
      user.name + '</span>' +
      '<button class="login-btn" onclick="logoutUser()">LOGOUT</button>';
  } else {
    authDiv.innerHTML =
      '<button class="login-btn" onclick="doLogin()">LOGIN</button>' +
      '<button class="signup-btn" onclick="doSignup()">SIGN UP</button>';
  }
}

// run on every page
document.addEventListener("DOMContentLoaded", updateNavForAuth);


/* ───────────────────────────────────────────────
   3. PROFILE  –  avatar, info view/edit
   Storage key: misr-profile-<username>
─────────────────────────────────────────────── */

function inputAvatar(input) {
  var reader = new FileReader();
  reader.onload = function (e) {
    var img = document.getElementById("avatar-img");
    var initials = document.getElementById("avatar-initials");
    if (!img) return;
    img.src = e.target.result;
    img.style.display = "inline";
    if (initials) initials.style.display = "none";

    // WRITE avatar to storage
    var key = getProfileKey();
    var data = loadProfile(key);
    data.avatar = e.target.result;
    saveProfile(key, data);
  };
  reader.readAsDataURL(input.files[0]);
}

function getProfileKey() {
  var u = localStorage.getItem("misr-current") || "guest";
  return "misr-profile-" + u;
}

function loadProfile(key) {
  return JSON.parse(localStorage.getItem(key) || "{}");  // READ
}

function saveProfile(key, data) {
  localStorage.setItem(key, JSON.stringify(data));        // WRITE
}

function showEdit() {
  document.getElementById("view-info").classList.add("hidden");
  document.getElementById("edit-info").classList.remove("hidden");
  // pre-fill from storage
  var data = loadProfile(getProfileKey());
  ["name", "email", "gender", "nationality", "dob"].forEach(function (f) {
    var el = document.getElementById("e-" + f);
    if (el && data[f]) el.value = data[f];
  });
}

function saveInfo() {
  // ── Custom JS validation for profile form ────
  var name = (document.getElementById("e-name").value || "").trim();
  var email = (document.getElementById("e-email").value || "").trim();
  if (!name) { alert("Name cannot be empty."); return; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Enter a valid email."); return;
  }

  var data = {
    name: name,
    email: email,
    gender: document.getElementById("e-gender").value,
    nationality: document.getElementById("e-nationality").value,
    dob: document.getElementById("e-dob").value
  };

  saveProfile(getProfileKey(), data);  // WRITE

  // update view cells
  document.getElementById("full-name").textContent = data.name;
  document.getElementById("email").textContent = data.email;
  document.getElementById("gender").textContent = data.gender;
  document.getElementById("nationality").textContent = data.nationality;
  document.getElementById("dob").textContent = data.dob;

  document.getElementById("view-info").classList.remove("hidden");
  document.getElementById("edit-info").classList.add("hidden");
}

// load profile data on page load
document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("view-info")) return;  // not on profile page

  var key = getProfileKey();
  var data = loadProfile(key);  // READ

  // auto-fill from user account
  var user = getCurrentUser();
  if (user && !data.name) data.name = user.name;
  if (user && !data.email) data.email = user.email;

  if (data.name) document.getElementById("full-name").textContent = data.name;
  if (data.email) document.getElementById("email").textContent = data.email;
  if (data.gender) document.getElementById("gender").textContent = data.gender;
  if (data.nationality) document.getElementById("nationality").textContent = data.nationality;
  if (data.dob) document.getElementById("dob").textContent = data.dob;

  if (data.avatar) {
    var img = document.getElementById("avatar-img");
    var ini = document.getElementById("avatar-initials");
    img.src = data.avatar;
    img.style.display = "inline";
    if (ini) ini.style.display = "none";
  }

  // show booked tickets
  renderBookedTickets();
});


/* ───────────────────────────────────────────────
   4. TICKETS  –  add/cancel counts + save bookings
   Storage key: misr-tickets
─────────────────────────────────────────────── */

function changeCount(button, amount) {
  var container = button.parentElement;
  var countSpan = container.querySelector(".count");
  var current = parseInt(countSpan.innerText) || 0;
  current += amount;
  if (current < 0) current = 0;
  countSpan.innerText = current;
}

function bookTickets() {
  // Collect all rows with counts > 0
  var rows = document.querySelectorAll(".tickets-table td[rowspan='3']:last-child, td[rowspan='3']:last-of-type");
  var booked = [];
  var total = 0;

  // Easier: scan all .count spans
  document.querySelectorAll(".count").forEach(function (span, i) {
    var qty = parseInt(span.innerText) || 0;
    if (qty === 0) return;

    // walk up to find museum name
    var td = span.closest("td");
    var row = td ? td.closest("tr") : null;
    var table = td ? td.closest("table") : null;
    if (!table) return;

    // find all museum name cells (first td in rowspan rows)
    var nameCells = table.querySelectorAll("td[rowspan='3']:first-child");
    var museum = nameCells[i] ? nameCells[i].innerText.replace(/\n/g, " ").trim() : "Museum " + (i + 1);

    // price label: sibling td before count td
    var priceTd = td.previousElementSibling;
    var priceLabel = priceTd ? priceTd.innerText.trim() : "";

    booked.push({ museum: museum, ticket: priceLabel, qty: qty });
  });

  if (booked.length === 0) {
    alert("Please add at least one ticket before booking.");
    return;
  }

  // WRITE bookings to storage
  var existing = JSON.parse(localStorage.getItem("misr-tickets") || "[]");
  booked.forEach(function (b) { existing.push(b); });
  localStorage.setItem("misr-tickets", JSON.stringify(existing));

  alert("✅ Tickets booked successfully! You can view them in your Profile.");

  // reset counts
  document.querySelectorAll(".count").forEach(function (s) { s.innerText = "0"; });
}

// inject "Book All" button on tickets page
document.addEventListener("DOMContentLoaded", function () {
  var table = document.getElementById("ticketsTable");
  if (!table) return;
  var btn = document.createElement("button");
  btn.textContent = "🎟️ Book Selected Tickets";
  btn.className = "btn-profile";
  btn.style.cssText = "display:block;margin:20px auto;padding:12px 30px;font-size:16px;background:linear-gradient(135deg,#D4AF37,#B8860B);color:#000;border:none;border-radius:8px;cursor:pointer;font-family:Cinzel,serif;";
  btn.onclick = bookTickets;
  table.parentNode.insertBefore(btn, table.nextSibling);
});


/* ───────────────────────────────────────────────
   5. BOOKED TICKETS on Profile page
─────────────────────────────────────────────── */
function renderBookedTickets() {
  var tickets = JSON.parse(localStorage.getItem("misr-tickets") || "[]");  // READ
  var container = document.getElementById("booked-tickets-section");
  if (!container) return;

  if (tickets.length === 0) {
    container.innerHTML = "<p style='color:#aaa;text-align:center;'>No tickets booked yet.</p>";
    return;
  }

  var html = "<table class='info-table' style='width:80%;max-width:600px;'>" +
    "<tr><th style='padding:8px;background:#c8a84b22;'>Museum / Site</th>" +
    "<th style='padding:8px;background:#c8a84b22;'>Ticket Type</th>" +
    "<th style='padding:8px;background:#c8a84b22;'>Qty</th>" +
    "<th style='padding:8px;background:#c8a84b22;'>Action</th></tr>";

  tickets.forEach(function (t, i) {
    html += "<tr>" +
      "<td style='padding:8px;'>" + t.museum + "</td>" +
      "<td style='padding:8px;'>" + t.ticket + "</td>" +
      "<td style='padding:8px;text-align:center;'>" + t.qty + "</td>" +
      "<td style='padding:8px;text-align:center;'>" +
      "<button onclick='cancelTicket(" + i + ")' style='background:#b22;color:#fff;border:none;padding:4px 10px;cursor:pointer;border-radius:4px;'>Cancel</button>" +
      "</td></tr>";
  });
  html += "</table>";
  container.innerHTML = html;
}

function cancelTicket(index) {
  var tickets = JSON.parse(localStorage.getItem("misr-tickets") || "[]");
  tickets.splice(index, 1);
  localStorage.setItem("misr-tickets", JSON.stringify(tickets));  // WRITE
  renderBookedTickets();
}

function clearAllTickets() {
  if (confirm("Clear all booked tickets?")) {
    localStorage.removeItem("misr-tickets");  // DELETE
    renderBookedTickets();
  }
}


/* ───────────────────────────────────────────────
   6. SEARCH  –  highlight matched cell in tickets table
─────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("tableSearch");
  if (!searchInput) return;

  searchInput.addEventListener("keyup", function () {
    var filter = searchInput.value.toLowerCase();
    var table = document.getElementById("ticketsTable");
    var cells = table.getElementsByTagName("td");

    if (filter === "") {
      for (var i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = "";
        cells[i].style.opacity = "1";
      }
      return;
    }
    for (var i = 0; i < cells.length; i++) {
      var text = cells[i].textContent.toLowerCase();
      if (text.includes(filter)) {
        cells[i].style.backgroundColor = "rgba(234,205,118,0.4)";
        cells[i].style.opacity = "1";
      } else {
        cells[i].style.backgroundColor = "";
        cells[i].style.opacity = "0.3";
      }
    }
  });
});


/* ───────────────────────────────────────────────
   7. CONTACT FORM  –  custom JS validation
─────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = (form.querySelector("#name").value || "").trim();
    var email = (form.querySelector("#email").value || "").trim();
    var subject = (form.querySelector("#subject").value || "").trim();
    var comment = (form.querySelector("#comment").value || "").trim();

    // ── Custom JS validation ──────────────────────
    if (!name) { showFormError("Please enter your full name."); return; }
    if (name.length < 2) { showFormError("Name must be at least 2 characters."); return; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFormError("Please enter a valid email address."); return;
    }
    if (!subject) { showFormError("Please enter a subject."); return; }
    if (!comment || comment.length < 10) {
      showFormError("Comment must be at least 10 characters."); return;
    }

    // WRITE message to storage
    var msgs = JSON.parse(localStorage.getItem("misr-messages") || "[]");
    msgs.push({ name: name, email: email, subject: subject, comment: comment, date: new Date().toLocaleDateString() });
    localStorage.setItem("misr-messages", JSON.stringify(msgs));

    showFormError("✅ Message sent successfully! We'll get back to you soon.", true);
    form.reset();
  });

  function showFormError(msg, ok) {
    var err = document.getElementById("form-feedback");
    if (!err) {
      err = document.createElement("p");
      err.id = "form-feedback";
      err.style.cssText = "margin-top:10px;font-size:14px;text-align:center;";
      form.appendChild(err);
    }
    err.textContent = msg;
    err.style.color = ok ? "#4caf50" : "#e57373";
  }
});


/* ───────────────────────────────────────────────
   8. ARTIFACT PAGE  –  filter by search query
─────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  var urlParams = new URLSearchParams(window.location.search);
  var searchQuery = urlParams.get("search");
  if (!searchQuery) return;

  var term = searchQuery.toLowerCase().trim();
  var groups = document.querySelectorAll(".artifact-group");
  var found = false;

  groups.forEach(function (group) {
    var name = (group.getAttribute("data-name") || "").toLowerCase();
    if (name.includes(term)) {
      group.style.display = "block";
      found = true;
      // scroll to the first match
      if (!window._scrolledToResult) {
        window._scrolledToResult = true;
        setTimeout(function () { group.scrollIntoView({ behavior: "smooth" }); }, 300);
      }
    } else {
      group.style.display = "none";
    }
  });

  if (!found) {
    var noRes = document.getElementById("noResults");
    if (noRes) {
      noRes.style.display = "block";
    } else {
      // create a message if element doesn't exist
      var msg = document.createElement("p");
      msg.style.cssText = "text-align:center;color:#D4AF37;padding:40px;font-family:Cinzel,serif;font-size:18px;";
      msg.textContent = 'No results found for "' + searchQuery + '". Try: pyramids, sphinx, luxor, tutankhamun…';
      document.body.appendChild(msg);
    }
  }
});


window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("figure img");

  images.forEach(function (img) {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      document.getElementById("lightbox-img").src = this.src;
      document.getElementById("lightbox").style.display = "flex";
    });
  });
});
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
