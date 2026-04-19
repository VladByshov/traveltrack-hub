import { Camper } from '@/types/camper';
import css from './CamperDetails.module.css';

interface CamperDetailsProps {
  camper: Camper;
}

const FORM_LABELS: Record<Camper['form'], string> = {
  alcove: 'Alcove',
  panel_van: 'Panel truck',
  integrated: 'Integrated',
  semi_integrated: 'Semi integrated',
};

function formatCamperValue(label: string, value: string) {
  if (label === 'Form') {
    return FORM_LABELS[value as Camper['form']] ?? value;
  }

  return value;
}

export default function CamperDetails({ camper }: CamperDetailsProps) {
  const specs = [
    { label: 'Form', value: camper.form },
    { label: 'Length', value: camper.length },
    { label: 'Width', value: camper.width },
    { label: 'Height', value: camper.height },
    { label: 'Tank', value: camper.tank },
    { label: 'Consumption', value: camper.consumption },
  ];

  const activeFeatures = [
    camper.transmission === 'automatic' ? 'Automatic' : 'Manual',
    camper.engine === 'petrol' ? 'Petrol' : null,
    camper.engine === 'diesel' ? 'Diesel' : null,
    camper.engine === 'hybrid' ? 'Hybrid' : null,
    camper.engine === 'electric' ? 'Electric' : null,
    camper.AC ? 'AC' : null,
    camper.kitchen ? 'Kitchen' : null,
    camper.radio ? 'Radio' : null,
    camper.bathroom ? 'Bathroom' : null,
    camper.form === 'alcove' ? 'Alcove' : null,
  ].filter(Boolean) as string[];

  return (
    <div className={css.camperPanel}>
      <h3 className={css.title}>Vehicle details</h3>

      <ul className={css.featureList}>
        {activeFeatures.map((feature) => (
          <li key={feature} className={css.featureItem}>
            {feature}
          </li>
        ))}
      </ul>

      <ul className={css.specList}>
        {specs.map((spec) => (
          <li key={spec.label} className={css.specRow}>
            <span className={css.specLabel}>{spec.label}</span>
            <span className={css.specValue}>{formatCamperValue(spec.label, spec.value)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

