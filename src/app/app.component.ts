import { Component } from '@angular/core';
import { CronOptions } from 'cron-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  public cronExpression = '0 12 1W 1/1 ?';
  public isCronDisabled = false;
  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',

    defaultTime: '10:00:00',
    use24HourTime: true,

    hideMinutesTab: true,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: true,

    hideSeconds: true,
    removeSeconds: true,
    removeYears: true
  };
}
