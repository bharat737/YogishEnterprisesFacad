
        $(function () {
            $('#date').datetimepicker({
                format: 'L',
                icons: {
                    time: 'fa fa-clock',
                    date: 'fa fa-calendar',
                    up: 'fa fa-arrow-up',
                    down: 'fa fa-arrow-down',
                    previous: 'fa fa-chevron-left',
                    next: 'fa fa-chevron-right',
                    today: 'fa fa-calendar-check',
                    clear: 'fa fa-trash',
                    close: 'fa fa-times'
                }
            });

            $('#time').datetimepicker({
                format: 'LT',
                icons: {
                    time: 'fa fa-clock',
                    date: 'fa fa-calendar',
                    up: 'fa fa-arrow-up',
                    down: 'fa fa-arrow-down',
                    previous: 'fa fa-chevron-left',
                    next: 'fa fa-chevron-right',
                    today: 'fa fa-calendar-check',
                    clear: 'fa fa-trash',
                    close: 'fa fa-times'
                }
            });
        });



        document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  // Optional: build object for easier access
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    mobile: formData.get("mobile"),
    service: formData.get("service"),
    date: formData.get("date"),
    time: formData.get("time"),
    message: formData.get("message")
  };

  fetch("YOUR_WEB_APP_URL_HERE", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.text())
    .then((res) => {
      alert("Appointment submitted successfully!");
      form.reset();
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("Error sending appointment. Please try again.");
    });
});