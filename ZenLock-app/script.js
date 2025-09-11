// Cambiar entre pantallas
function goToConfig() {
  document.getElementById("welcome-screen").classList.remove("active");
  document.getElementById("config-screen").classList.add("active");
}

function saveConfig() {
  const limit = document.getElementById("daily-limit").value;
  localStorage.setItem("dailyLimit", limit);

  document.getElementById("config-screen").classList.remove("active");
  document.getElementById("main-screen").classList.add("active");

  initChart();
}

// Alternar tabs
function showTab(tab) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(t => t.classList.remove("active"));
  document.getElementById(tab + "-tab").classList.add("active");
}

// Gráfico con Chart.js
function initChart() {
  const ctx = document.getElementById("usageChart");
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Hoy", "Ayer"],
      datasets: [{
        label: "Uso (min)",
        data: [120, 90],
        backgroundColor: ["#6dbfa6", "#4a9e85"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#333"
          }
        }
      },
      scales: {
        x: { ticks: { color: "#333" } },
        y: { ticks: { color: "#333" } }
      }
    }
  });
}

// Activar/desactivar modo oscuro
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
