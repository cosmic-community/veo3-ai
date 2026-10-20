export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}

export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    site_name?: string;
    hero_headline?: string;
    hero_subheadline?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    cta_text?: string;
    cta_url?: string;
    how_it_works_title?: string;
    how_it_works_steps?: HowItWorksStep[] | string;
    footer_text?: string;
    footer_link?: string;
    disclaimer?: string;
  };
}

export interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    icon?: string;
    description?: string;
    feature_image?: {
      url: string;
      imgix_url: string;
    };
    display_order?: number;
  };
}