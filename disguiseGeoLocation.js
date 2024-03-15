var fakeLatitude = 35.4328032075059;
var fakeLongitude = 139.46736179369324;
var fakeSpeed = 200 * 0.277778;

navigator.geolocation.getCurrentPosition = function (
  successCallback,
  errorCallback,
  options
) {
  var fakePosition = {
    coords: {
      latitude: fakeLatitude,
      longitude: fakeLongitude,
      accuracy: 100,
      speed: fakeSpeed,
    },
    timestamp: new Date().getTime(),
  };

  successCallback(fakePosition);
};

navigator.geolocation.watchPosition = navigator.geolocation.getCurrentPosition;

navigator.geolocation.getCurrentPosition(function (position) {
  console.log("Latitude: " + position.coords.latitude);
  console.log("Longitude: " + position.coords.longitude);
  console.log("Speed: " + position.coords.speed + " m/s");
});
