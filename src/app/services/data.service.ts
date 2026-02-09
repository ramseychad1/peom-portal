import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PageConfig } from '../models/page-config.model';
import { TabSection } from '../models/tab-section.model';
import { ComparisonItem } from '../models/comparison-item.model';
import { ChartData } from '../models/chart-data.model';
import { RoleCard } from '../models/role-card.model';
import { LifecycleStep } from '../models/lifecycle-step.model';
import { MSPPoint } from '../models/msp-point.model';
import { MSPOversightItem } from '../models/msp-oversight-item.model';

import { PAGE_CONFIG } from '../data/page-config.data';
import { TABS } from '../data/tabs.data';
import { COMPARISON_ITEMS } from '../data/comparison-items.data';
import { CHART_DATA } from '../data/chart-data.data';
import { ROLE_CARDS } from '../data/role-cards.data';
import { LIFECYCLE_STEPS } from '../data/lifecycle-steps.data';
import { MSP_POINTS } from '../data/msp-points.data';
import { MSP_OVERSIGHT_ITEMS } from '../data/msp-oversight-items.data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getPageConfig(): Observable<PageConfig> {
    return of(PAGE_CONFIG);
  }

  getAllTabs(): Observable<TabSection[]> {
    return of(TABS.sort((a, b) => a.order - b.order));
  }

  getComparisonItems(tabId: string): Observable<ComparisonItem[]> {
    return of(COMPARISON_ITEMS.filter(item => item.parentTabId === tabId)
      .sort((a, b) => a.order - b.order));
  }

  getChartData(tabId: string): Observable<ChartData | null> {
    const data = CHART_DATA.find(item => item.parentTabId === tabId);
    return of(data || null);
  }

  getRoleCards(tabId: string): Observable<RoleCard[]> {
    return of(ROLE_CARDS.filter(item => item.parentTabId === tabId)
      .sort((a, b) => a.order - b.order));
  }

  getLifecycleSteps(tabId: string): Observable<LifecycleStep[]> {
    return of(LIFECYCLE_STEPS.filter(item => item.parentTabId === tabId)
      .sort((a, b) => a.order - b.order));
  }

  getMSPPoints(tabId: string): Observable<MSPPoint[]> {
    return of(MSP_POINTS.filter(item => item.parentTabId === tabId)
      .sort((a, b) => a.order - b.order));
  }

  getMSPOversightItems(tabId: string): Observable<MSPOversightItem[]> {
    return of(MSP_OVERSIGHT_ITEMS.filter(item => item.parentTabId === tabId)
      .sort((a, b) => a.order - b.order));
  }
}
