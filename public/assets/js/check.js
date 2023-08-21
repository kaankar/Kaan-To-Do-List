for(let i = 0; i < document.querySelectorAll('.check').length; i++) {
    document.getElementById(`check${i}`).addEventListener('click', () => {
        if (document.querySelector(`#check${i}`).checked) {
            document.getElementById(`p${i}`).classList.add('text-decoration-line-through');
          } else {
            document.getElementById(`p${i}`).classList.remove('text-decoration-line-through');
          }
    });
} 

for(let i = 0; i < document.querySelectorAll('.check').length; i++) {
  document.getElementById(`check${i}`).addEventListener('click', async () => {
      try {
        const data = {
          value: document.querySelector(`#check${i}`).checked,
          index: i,
          day: document.querySelector("h1").innerHTML
        };
        const response = await fetch("/checkCtrl", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        });
      } catch (error) {
        console.log("Error: " + error.message);
      }
  });
}