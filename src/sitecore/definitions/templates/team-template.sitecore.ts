// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * This is the data template for an individual _item_ in the Styleguide's Content List field demo.
 */
export default function(manifest: Manifest) {
  manifest.addTemplate({
    name: 'Team-Template',
    fields: [{ name: 'name', type: CommonFieldTypes.SingleLineText },
    { name: 'location', type: CommonFieldTypes.SingleLineText },
    { name: 'teamPhoto', type: CommonFieldTypes.Image },    
    { name: 'scheduledate', type: CommonFieldTypes.SingleLineText },
    { name: 'teamMembers', type: CommonFieldTypes.RichText },
  ],
  });
}
