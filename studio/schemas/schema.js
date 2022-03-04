// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import page from './documents/page';
import route from './documents/route';
import siteConfig from './documents/siteConfig';

// Object types
import cta from './objects/cta';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';

// Landing page sections
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import mailchimp from './objects/mailchimp';
import textSection from './objects/textSection';
import services from './objects/services';
import service from './objects/service';
import specialisations from './objects/specialisations';
import specialisation from './objects/specialisation';
import whoWeAre from './objects/whoWeAre';
import sponsors from './objects/sponsors';
import sponsor from './objects/sponsor';
import contactUs from './objects/contactUs';
import socialMedia from './objects/socialMedia';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    textSection,
    services,
    service,
    specialisations,
    specialisation,
    whoWeAre,
    sponsors,
    sponsor,
    contactUs,
    socialMedia,
  ]),
});
