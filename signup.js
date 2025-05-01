// Validáció a signup.html-hez

document.querySelector("form").addEventListener("submit", function (e) {
    // Mezők értékei 
    const fname = document.getElementById("fname").value;
    const gname = document.getElementById("gname").value;
    const email = document.getElementById("email").value;
    const adress = document.getElementById("adress").value;
    const age = parseInt(document.getElementById("age").value);


    // Ellenőrzés
    if (!fname || fname.length < 10) {
      alert("A vezetéknév kötelező, és legalább 10 karakter hosszú kell legyen.");
      e.preventDefault();
      return;
    }

    if (!gname || gname.length < 10) {
      alert("A keresztnév kötelező, és legalább 10 karakter hosszú kell legyen.");
      e.preventDefault();
      return;
    }

    if (!adress || adress.length < 10) {
      alert("A cím kötelező, és legalább 10 karakter hosszú kell legyen.");
      e.preventDefault();
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Kérem, érvényes e-mail címet adjon meg!");
      e.preventDefault();
      return;
    }

    if (isNaN(age) || age > 130) {
      alert("Kérem, adjon meg egy érvényes életkort (maximum 130)!");
      e.preventDefault();
      return;
    }

    // Ha minden mező megfelelően lett kitöltve
    alert("Sikeres feliratkozás! Köszönjük!");
  });
