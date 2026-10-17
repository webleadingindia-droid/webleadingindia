'use client';

import ServicePage from './service-page';
import { buildService, type ServiceCfg } from './service-builder';

export default function ServiceRenderer({ cfg }: { cfg: ServiceCfg }) {
  return <ServicePage {...buildService(cfg)} />;
}
