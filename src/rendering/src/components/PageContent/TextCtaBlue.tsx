import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TextCtaBlueProps = ComponentProps & {
  fields: {
    title: Field<string>;
    subTitle: Field<string>;
  };
};

const TextCtaBlue = (props: TextCtaBlueProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <section className={`text-cta-blue ${sxaStyles}`}>
      <div className="container cta-content">
        <Text tag="h2" className="cta-title" field={props.fields.title} />
        <Text tag="p" className="cta-subtitle" field={props.fields.subTitle} />
      </div>
    </section>
  );
};

export const Default = withDatasourceCheck()<TextCtaBlueProps>(TextCtaBlue);
