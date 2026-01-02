const API_BASE = "http://localhost:4000";

const form = document.getElementById("authForm");
const output = document.getElementById("output");
const registerBtn = document.getElementById("registerBtn");

// LOGIN (form submit)
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      output.textContent = data.message;
      return;
    }

    localStorage.setItem("token", data.token);
    output.textContent = "✅ Login successful";

  } catch (err) {
    output.textContent = "❌ Server not reachable";
  }
});

// REGISTER (button click)
registerBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${API_BASE}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      output.textContent = data.message;
      return;
    }

    output.textContent = "✅ Registration successful. You can now log in.";

  } catch (err) {
    output.textContent = "❌ Server not reachable";
  }
});
