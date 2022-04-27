# AngularCronEditor

This project is a cron generator for angular app. This component use Bootstrap 5 classes and is up for Angular 13+.
[npm package](https://www.npmjs.com/package/ngx-cron-gen)

## Use

A code example is ready for you in (/src/app).

## Install

Use ```npm i ngx-cron-gen```

Import ```CronEditorModule``` in your ```app.module```.

In your template
```HTML
<cron-editor [(cron)]="cronExpression" [disabled]="isCronDisabled" [options]="cronOptions"></cron-editor>
```

In your component
```ts
import { Component } from '@angular/core';
import { CronOptions } from 'cron-editor';

@Component({
  selector: '...',
  templateUrl: '...'
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
```

Use your equivalent of ```cronExpression``` for retreiving the value.

If some display issues try to use bootstrap 5.