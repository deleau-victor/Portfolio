type Rgb = [number, number, number];

const hexToRgb = (hex: string): Rgb => {
  const value = parseInt(hex.slice(1), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
};

/**
 * Interpolates a colour along a gradient.
 * @param stops The gradient colours, as `#rrggbb`.
 * @param t The position on the gradient, from 0 to 1.
 * @returns The colour at that position, as `rgb()`.
 */
const rampColor = (stops: string[], t: number): string => {
  const segment = (stops.length - 1) * t;
  const index = Math.min(Math.floor(segment), stops.length - 2);
  const fraction = segment - index;
  const from = hexToRgb(stops[index]);
  const to = hexToRgb(stops[index + 1]);
  return `rgb(${from.map((channel, i) => Math.round(channel + (to[i] - channel) * fraction)).join(",")})`;
};

/**
 * Draws one orb as `count` discs, each smaller, darker and shifted toward the focus `(focusX, focusY)`.
 */
const drawBandedOrb = (
  context: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radius: number,
  stops: string[],
  focusX: number,
  focusY: number,
  count: number,
): void => {
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    context.beginPath();
    context.arc(centerX + focusX * radius * t, centerY + focusY * radius * t, radius * (1 - 0.97 * t), 0, Math.PI * 2);
    context.fillStyle = rampColor(stops, Math.pow(t, 0.85));
    context.fill();
  }
};

/**
 * Draws the orbs at the canvas' current CSS size, sharp on high-density screens.
 * @param canvas A square canvas.
 */
const drawOrbs = (canvas: HTMLCanvasElement): void => {
  const context = canvas.getContext("2d");
  const size = canvas.clientWidth;
  if (!context || !size) {
    return;
  }

  // The bitmap gets the physical pixels (capped at 2x), then drawing happens in CSS pixels.
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = canvas.height = Math.round(size * pixelRatio);
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, size, size);

  drawBandedOrb(
    context,
    size * 0.6,
    size * 0.43,
    size * 0.4,
    ["#3E8288", "#285157", "#152F32", "#02090A"],
    -0.55,
    0.52,
    30,
  );
  drawBandedOrb(
    context,
    size * 0.22,
    size * 0.86,
    size * 0.12,
    ["#4B978E", "#2D605A", "#163430", "#02090A"],
    0.52,
    0.55,
    18,
  );
};

export { drawOrbs };
