const root = document.getElementById('root'),
  point = document.getElementById('point'),
  pointCX = parseInt(point.getAttribute('cx')),
  pointCY = parseInt(point.getAttribute('cy'));

const a = 30;
const b = 30;
const c = 0.03145;
const d = 3.145;

const action = (e) => {

  const position = root.createSVGPoint();
  position.x = e.clientX;

  const matrix = root.getScreenCTM(),
    correctPosition = position.matrixTransform(matrix.inverse()),
    mouseX = correctPosition.x;

  const dx = mouseX,
    dy = sin(dx);

  point.setAttribute('transform', 'translate(' + (dx - pointCX) + ',' + dy + ')');
};

const sin = (x) => {

  //
  // sinusoidal formula
  //
  // y = a + b * sin(c * x + d)
  //
  // a - shift graph along Oy axis. as larger a, than higher graph rises
  // b - stretching graph along Oy axis. as b increases, than greater amplitude of oscillations
  // с - stretching graph along Ox axis. as c increases, than oscillation frequency rises
  // d - shift graph along Ox axis. as d increases, than graph moves in negative direction of abscissa
  //

  return a + b * Math.sin(c * x + d);
};

const trace = () => {

  for (let i = 0.5; i < 200; i += 0.25) {

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    circle.setAttributeNS(null, 'cx', i);
    circle.setAttributeNS(null, 'cy', (sin(i) + pointCY));
    circle.setAttributeNS(null, 'r', '0.25');
    circle.setAttributeNS(null, 'fill', '#A9927D');

    root.appendChild(circle);
  }
};

// trace();
