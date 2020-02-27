import './index.scss';
import { select, object, text, withKnobs } from '@storybook/addon-knobs';
import ContentBlockSegmented from '../ContentBlockSegmented';
import React from 'react';
import readme from '../README.md';
import { settings } from 'carbon-components';
import { storiesOf } from '@storybook/react';

const { prefix } = settings;

storiesOf('Patterns (Blocks)|ContentBlockSegmented', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: readme,
    },
  })
  .add('Default', () => {
    const heading = text('Heading', 'Lorem ipsum dolor sit amet.');

    const image = {
      images: [
        {
          src: 'https://dummyimage.com/320x180/ee5396/fff&text=16x9',
          minWidth: 320,
        },
        {
          src: 'https://dummyimage.com/400x225/ee5396/fff&text=16x9',
          minWidth: 400,
        },
        {
          src: 'https://dummyimage.com/672x378/ee5396/fff&text=16x9',
          minWidth: 672,
        },
      ],
      defaultImage: 'https://dummyimage.com/672x378/ee5396/fff&text=16x9',
      alt: 'Image alt text',
    };

    const copy = `   __Lorem__    ipsum *dolor* sit amet, consectetur adipiscing elit. Aenean et ultricies est.
      Mauris iaculis eget dolor nec hendrerit. __Phasellus__ at elit sollicitudin, sodales
      nulla quis, *consequat* libero. Here are
      some common categories:

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultricies est. Mauris iaculis eget dolor nec hendrerit. Phasellus at elit sollicitudin, sodales nulla quis, consequat libero.
      `;

    const ctaStyles = {
      text: 'text',
      card: 'card',
    };

    const ctaTypes = {
      external: 'external',
      jump: 'jump',
      local: 'local',
    };

    const cta = {
      cta: {
        href: 'https://www.example.com',
      },
      style: select('CTA style', ctaStyles, ctaStyles.card),
      type: select('CTA type', ctaTypes, ctaTypes.local),
      heading: 'Lorem ipsum dolor',
    };

    const items = [
      {
        heading: 'Lorem ipsum dolor sit amet.',
        image: {
          images: [
            {
              src: 'https://dummyimage.com/320x180/ee5396/fff&text=16x9',
              minWidth: 320,
            },
            {
              src: 'https://dummyimage.com/400x225/ee5396/fff&text=16x9',
              minWidth: 400,
            },
            {
              src: 'https://dummyimage.com/672x378/ee5396/fff&text=16x9',
              minWidth: 672,
            },
          ],
          defaultImage: 'https://dummyimage.com/672x378/ee5396/fff&text=16x9',
          alt: 'Image alt text',
        },
        copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.`,
      },
      {
        heading: 'Lorem ipsum dolor sit amet.',
        copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.`,
      },
      {
        heading: 'Lorem ipsum dolor sit amet.',
        image: {
          images: [
            {
              src: 'https://dummyimage.com/320x180/ee5396/fff&text=16x9',
              minWidth: 320,
            },
            {
              src: 'https://dummyimage.com/400x225/ee5396/fff&text=16x9',
              minWidth: 400,
            },
            {
              src: 'https://dummyimage.com/672x378/ee5396/fff&text=16x9',
              minWidth: 672,
            },
          ],
          defaultImage: 'https://dummyimage.com/672x378/ee5396/fff&text=16x9',
          alt: 'Image alt text',
        },
        copy:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.',
      },
      {
        heading: 'Lorem ipsum dolor sit amet.',
        copy:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed interdum tortor. Sed id pellentesque diam. In ut quam id mauris finibus efficitur quis ut arcu. Praesent purus turpis, venenatis eget odio et, tincidunt bibendum sem. Curabitur pretium elit non blandit lobortis. Donec quis pretium odio, in dignissim sapien.',
      },
    ];

    return (
      <div className={`${prefix}--grid`}>
        <div className="bx--row">
          <div className="bx--col-lg-8 bx--col-sm-4 bx--offset-lg-4">
            <ContentBlockSegmented
              copy={copy}
              cta={cta}
              heading={heading}
              image={image}
              items={object('Conent items', items)}
            />
          </div>
        </div>
      </div>
    );
  });
