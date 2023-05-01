import { Application } from '@splinetool/runtime';

function loadScene() {
  const canvas = document.getElementById('PrisonMap') || document.getElementById('canvas3d') || document.getElementById('Memorial');
  const app = new Application(canvas);

  if (canvas.id === 'PrisonMap') {
    app.load('https://prod.spline.design/vofWFSaFayA4dGmw/scene.splinecode');
  } else if (canvas.id === 'Memorial') {
    app.load('https://prod.spline.design/jpU6DCkEjKpVyGvF/scene.splinecode');
  } else {
    app.load('https://prod.spline.design/2YRVkX8xQB16LEWt/scene.splinecode');
  }
}

