import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the ContentBlock component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function(manifest: Manifest) {
  manifest.addComponent({
    name: 'ContentBlock',
    icon: SitecoreIcon.DocumentTag,
    placeholders: ['phContentBlock'],     
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'heroImage', type: CommonFieldTypes.Image },
      { name: 'content', type: CommonFieldTypes.RichText },
    ],
  });
}
