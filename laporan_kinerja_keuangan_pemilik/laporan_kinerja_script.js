
const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener('click', function() {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick){
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });
  })
});

// Halaman yang ditampilkan saat salah satu dropbox ditekan
document.getElementById('jenis_laporan').addEventListener('change', function () {
  var selectedValue = this.value;

  // Menyembunyikan semua div di dalam .laporan-pilihan
  var laporanPilihanDivs = document.querySelectorAll('.laporan-pilihan div');
  laporanPilihanDivs.forEach(function (div) {
      div.classList.remove('active');
  });

  // Menampilkan div yang sesuai dengan opsi yang dipilih
  var selectedDiv = document.getElementById(selectedValue);
  if (selectedDiv) {
      selectedDiv.classList.add('active');
  }
});

// grafik
/* Get CSS Variables */
const colorPrimary = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-primary")
  .trim();

const colorDefault = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-default")
  .trim();

const colorLabel = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-label")
  .trim();

const fontFamily = getComputedStyle(document.documentElement)
  .getPropertyValue("--font-family")
  .trim();

/* Declare Default Chart Options */

const defaultOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    selection: {
      enabled: false,
    },
    zoom: {
      enabled: false,
    },
    width: "100%",
    height: 150,
    offsetY: 8,
  },
  stroke: {
    lineCap: "round",
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
};

// Bar Chart

var barOptions = {
  ...defaultOptions,
  chart: {
    ...defaultOptions.chart,
    type: "bar",
  },
  tooltip: {
    enabled: true,
    fillSeriesColor: false,
    style: {
      fontFamily: fontFamily,
    },
    y: {
      formatter: (value) => {
        return `${value}K`;
      },
    },
  },
  series: [
    {
      name: "This Year",
      data: [23, 55, 41, 37, 22, 43],
    },
    {
      name: "Last Year",
      data: [34, 32, 33, 52, 13, 54],
    },
  ],
  colors: [colorPrimary, colorDefault],
  stroke: { show: false },
  grid: {
    borderColor: "rgba(0, 0, 0, 0)",
    padding: { left: 0, right: 0, top: -16, bottom: -8 },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
      borderRadius: 6,
    },
  },
  yaxis: {
    show: false,
  },
  xaxis: {
    labels: {
      floating: true,
      show: true,
      style: {
        fontFamily: fontFamily,
        colors: colorLabel,
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  },
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barOptions);

barChart.render();
