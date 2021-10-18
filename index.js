$(document).ready(function () {
  function initButtonNext() {
    const button = $("#button-next");
    button.click(() => {
      const sectionId = button.data("section-id");
      $("html, body").animate(
        {
          scrollTop: $(`#${sectionId}`).offset().top,
        },
        2000
      );
    });
  }
  function initSliders() {
    $(".news__container-slider").slick({
      dots: true,
      infinite: true,
      arrows: true,
    });
  }

  function initMap() {
    const mymap = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      {
        maxZoom: 18,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(mymap);

    L.marker([51.5, -0.09]).addTo(mymap);
  }
  initMap();
  initSliders();
  initButtonNext();
});
