const equal = require("fast-deep-equal");

const cameras = [
  {
    id: "456",
    label: "camera2",
  },
  {
    id: "123",
    label: "camera1",
  },
];
const microfones = [
  {
    id: "789",
    label: "microfone1",
  },
  {
    id: "012",
    label: "mi crofone2",
  },
];

const camerasDiferente = cameras.push({ id: "nova", label: "novaCamera" });

const arr1 = { videoDevices: cameras, audioDevices: microfones };
const arrEqual1 = { videoDevices: cameras, audioDevices: microfones };
const arr2 = { videoDevices: camerasDiferente, audioDevices: microfones };

console.log("is equal", equal(arr1, arrEqual1));
console.log("is equal", equal(arr1, arr2));
