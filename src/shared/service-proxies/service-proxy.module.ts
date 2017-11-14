import { NgModule } from '@angular/core';

import * as ApiServiceProxies from './service-proxies';

@NgModule({
    providers: [
        ApiServiceProxies.ApplicantServiceProxy,
        ApiServiceProxies.ExperienceServiceProxy
    ]
})
export class ServiceProxyModule { }
