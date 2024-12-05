const registroForm = document.getElementById("form-registro");

registroForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("confirmpassword").value;
  
  try {
    const res = await fetch("/auth/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, confirmpassword }),
    });
    const data = await res.json()
    if (!res.ok){
      return alert(data.msg)
    }
    history.pushState(null, "", "/");
    location.reload();
  } catch (error) {
    console.log(error);
  }
});
