/**
 * A web in the top-right corner of a section.
 * level 1 = a few loose strands (hero), 2 = half built (projects), 3 = nearly complete (contact).
 * The web fills in as you scroll down the page, as a hint of what is coming.
 */
type Props = { level: 1 | 2 | 3; className?: string };

const SIZE = 240;
const R = 228;

const f = (n: number) => n.toFixed(1);

export function WebCorner({ level, className }: Props) {
  const strands = 2 + level * 2;
  const rings = level * 2 + 1;
  const ax = SIZE;
  const ay = 0;

  const dirs = Array.from({ length: strands }, (_, i) => {
    const a = ((90 + (90 * i) / (strands - 1)) * Math.PI) / 180;
    return [Math.cos(a), Math.sin(a)] as const;
  });
  const point = (i: number, r: number) => [ax + dirs[i][0] * r, ay + dirs[i][1] * r] as const;

  const strandPaths = dirs.map((_, i) => {
    const [x, y] = point(i, R);
    return `M${ax} ${ay} L${f(x)} ${f(y)}`;
  });

  const ringPaths: string[] = [];
  for (let k = 1; k <= rings; k++) {
    const r = (R * k) / (rings + 0.5);
    for (let i = 0; i < strands - 1; i++) {
      const [x1, y1] = point(i, r);
      const [x2, y2] = point(i + 1, r);
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2;
      const cx = ax + (mx - ax) * 0.8;
      const cy = ay + (my - ay) * 0.8;
      ringPaths.push(`M${f(x1)} ${f(y1)} Q${f(cx)} ${f(cy)} ${f(x2)} ${f(y2)}`);
    }
  }

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={className}
      aria-hidden="true"
      focusable="false"
      style={{
        maskImage: "radial-gradient(circle at 100% 0%, #000 35%, transparent 78%)",
        WebkitMaskImage: "radial-gradient(circle at 100% 0%, #000 35%, transparent 78%)",
      }}
    >
      <g fill="none" stroke="var(--muted)" strokeWidth="1" strokeLinecap="round" opacity="0.55">
        {strandPaths.map((d) => (
          <path key={d} d={d} />
        ))}
        {ringPaths.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
    </svg>
  );
}
