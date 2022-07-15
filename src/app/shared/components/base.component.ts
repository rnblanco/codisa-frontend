import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppInjector } from 'src/app/app-injector.service';
import { CatalogService } from '../services/catalog.service';
import { environment } from 'src/environments/environment';
import { Params, Router } from '@angular/router';
import packageJson from 'package.json';
import { trigger } from '@angular/animations';
import { definitions } from 'src/app/shared/utils/animations/animate';

const { InAndOut, InAndOutFast, InAndOutFaster } = definitions;

@Component({
  selector: 'root',
  template: '',
  animations: [
    trigger('InAndOut', InAndOut),
    trigger('InAndOutFast', InAndOutFast),
    trigger('InAndOutFaster', InAndOutFaster),
  ],
})
export abstract class BaseComponent implements OnInit, OnDestroy {
  // App info
  appName = 'Codisa Frontend';
  currentDate = new Date();
  year = this.currentDate.getFullYear();
  // Basic needs
  env: any;
  version: any;
  router: Router;
  routeParams: Params;
  
  // Requests
  loading = false;
  catalogService: CatalogService;
  subscription: Subscription;
  
  protected constructor() {
    this.catalogService = AppInjector.injector.get(CatalogService);
    this.router = AppInjector.injector.get(Router);
    this.subscription = new Subscription();
    this.version = packageJson.version;
    this.env = environment;
  }

  capitalize(text: string): string {
    text = text.toLowerCase();
    return `${text.charAt(0).toUpperCase()}${text.slice(1, text.length)}`;
  }
  
  loadFileUrl(fileName: string) {
    window.open(`${this.env.api_url.replace('api', 'documents')}/${fileName}`, '_blank');
  }

  ngOnDestroy(): void {
    if (!this.subscription) return;
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = new Subscription();
  }
}
