import {
  Activity,
  Clock,
  Compass,
  Container,
  Drill,
  Factory,
  Flame,
  GraduationCap,
  HardHat,
  Layers,
  Leaf,
  ScanLine,
  ShieldCheck,
  Siren,
  TrendingUp,
  Users,
  Waves,
  Wrench,
  type LucideProps,
} from "lucide-react";

/**
 * Content modules store icons as plain strings so the data stays serialisable.
 * The map is explicit rather than dynamic so unused icons are tree-shaken.
 */
const icons = {
  Activity,
  Clock,
  Compass,
  Container,
  Drill,
  Factory,
  Flame,
  GraduationCap,
  HardHat,
  Layers,
  Leaf,
  ScanLine,
  ShieldCheck,
  Siren,
  TrendingUp,
  Users,
  Waves,
  Wrench,
} as const;

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component {...props} />;
}
