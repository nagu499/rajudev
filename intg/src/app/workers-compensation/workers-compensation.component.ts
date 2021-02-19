import { ChangeDetectorRef } from '@angular/core';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProgressComponent } from 'src/app/progress/progress.component';
declare var $: any;

@Component({
  selector: 'app-workers-compensation',
  templateUrl: './workers-compensation.component.html',
  styleUrls: ['./workers-compensation.component.scss']
})

export class WorkersCompensationComponent implements OnInit, AfterViewInit {
  constructor(private changeDetect: ChangeDetectorRef, private router: Router) { }
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  businessYears = [];
  classCodeAddingArray = [];
  classCodes = [];
  classCodeObj = [];
  ngOnInit() {
    localStorage.removeItem('classCodeObj');
    this.classCodeAddingArray.push({});
    $('#yearsInBusiness').select2({
      placeholder: "------Select------",
    });
    $('#businessStructure').select2({
      placeholder: "------Select------",

    });
    $('#classCodePrimary').select2({
      placeholder: "Select a state",

    });
    $('#claimsHaveWorkers').select2({
      placeholder: "Select a state",

    });
    $('#currentlyHaveWorkers').select2({
      placeholder: "Select a state",

    });
    $('#effectiveDate').datepicker({
      format: 'yyyy-m-d',
      autoclose: true,
    });
    $('#businessStructure').on('select2:select', (e) => {
      $('#businessStructure-error').css('display', 'none');
    });
    $('#yearsInBusiness').on('select2:select', (e) => {
      $('#yearsInBusiness-error').css('display', 'none');
    });
    this.businessYears = [
      {
        id: 1,
        years: 1
      },
      {
        id: 2,
        years: 2
      },
      {
        id: 3,
        years: 3
      },
      {
        id: 4,
        years: 4
      },
      {
        id: 5,
        years: 5
      },
      {
        id: 6,
        years: 6
      },
      {
        id: 7,
        years: 7
      },
      {
        id: 8,
        years: 8
      },
      {
        id: 9,
        years: 9
      },
      {
        id: 10,
        years: 10
      },
      {
        id: 11,
        years: 11
      },
      {
        id: 12,
        years: 12
      },
      {
        id: 13,
        years: 13
      },
      {
        id: 14,
        years: 14
      },
      {
        id: 15,
        years: 15
      },
      {
        id: 16,
        years: 16
      },
      {
        id: 17,
        years: 17
      },
      {
        id: 18,
        years: 18
      },
      {
        id: 19,
        years: 19
      },

    ];

    this.classCodes = [
      {
        id: 0,
        option: '1463 Asphalt works',
        classCode: 1463
      },
      {
        id: 1,
        option: '2812 Cabinet mgd -wood',
        classCode: 2812
      },
      {
        id: 2,
        option: '2814 example works',
        classCode: 2814
      },

    ];

    var $form = $("form[name='businessDetails']"),
      $successMsg = $(".alert");
    $.validator.addMethod("letters", function (value, element) {
      return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
    });
    $form.validate({
      rules: {
        businessName: {
          required: true,
          minlength: 3,
          letters: true
        },
        applicantName: {
          required: true,
          minlength: 3,
          letters: true
        },
        address: {
          required: true,
          minlength: 3,
          letters: true
        },
        city: {
          required: true,
          minlength: 3,
          letters: true
        },
        zipCode: {
          required: true,
          minlength: 3,
          letters: false
        },
        phone: {
          required: true,
          minlength: 3,
          letters: false
        },
        email: {
          required: true,
          email: true
        },
        contractorLicense: {
          required: true,
          minlength: 3
        },
        businessStructure: {
          required: true,
        },
        yearsInBusiness: {
          required: true,
        },
      },
      messages: {
        businessName: {
          required: 'Please enter name of business',
          minlength: 'Minimum 3 chars',
          letters: 'Enter valid name'

        },
        applicantName: {
          required: 'Please enter applicant name',
          minlength: 'Minimum 3 chars'

        },
        address: {
          required: 'Please enter address',
          minlength: 'Minimum 3 chars'

        },
        city: {
          required: 'Please enter city',
          minlength: 'Minimum 3 chars'

        },
        zipCode: {
          required: 'Please enter zip code',
          minlength: 'Minimum 3 chars'

        },
        phone: {
          required: 'Please enter phone',
          minlength: 'Minimum 3 chars'

        },
        contractorLicense: {
          required: 'please enter contractor license',
          minlength: 'Minimum 3 chars'
        },
        businessStructure: {
          required: 'please select an option',
        },
        yearsInBusiness: {
          required: 'please select an option',
        },
        email: "Please specify a valid email address"
      },
      submitHandler: function () {
        $successMsg.show();
      }
    });
    $(() => {
      $('input[name=performAction]').click(function () {
        if ($(this).val() === '1') {
          $('#errorModal').modal('show');
        }
      });
    });
  }

  goNext(progress: ProgressComponent) {
    if ($("form[name='businessDetails']").valid()) {
      let obj = {
        nameOfBusiness: $('#businessName').val(),
        applicantName: $('#applicantName').val(),
        address: $('#address').val(),
        city: $('#city').val(),
        zipCode: $('#zipCode').val(),
        phone: $('#phone').val(),
        email: $('#email').val(),
        yearsOfBusiness: $('#yearsInBusiness').val(),
        businessStructure: $('#businessStructure').val(),
        contractorLicense: $('#contractorLicense').val()
      };
      localStorage.setItem('businessDetails', JSON.stringify(obj));
      progress.next();
    }
  }

  public coverageDetails(progress: ProgressComponent) {
    if ($("input[name=performAction]:checked").val() === '2') {
      progress.next();
    }
    else if ($("input[name=performAction]:checked").val() === '1') {
      $('#errorModal').modal('show');
    }
    else {
      alert('please select an option');
    }
    $('.classCode').select2({
      placeholder: "Select a state",
    });
  }
  public suplementalQuestions(progress: ProgressComponent) {

    let lastIndexObj = {
      classCode: $('#classCode_' + (this.classCodeAddingArray.length - 1)).val(),
      payroll: $('#payroll_' + (this.classCodeAddingArray.length - 1)).val()
    };

    if (localStorage.getItem('classCodeObj')) {
      this.classCodeObj = JSON.parse(localStorage.getItem('classCodeObj'));
    }
    this.classCodeObj.push(lastIndexObj);
    localStorage.setItem('classCodeObj', JSON.stringify(this.classCodeObj));
    progress.next();
  }
  lastStep(progress: ProgressComponent) {
    $('.activeStep').css('display', 'none');
    $('.step-progress').css('display', 'none');
    this.router.navigateByUrl('/summary')
  }
  onStateChange(event) { }

  public removeClassCode(index) {
    if (this.classCodeAddingArray.length > 0) {
      this.classCodeAddingArray.splice(index, 1);
      let classCodeObj: any[] = [];
      if (localStorage.getItem('classCodeObj')) {
        classCodeObj = JSON.parse(localStorage.getItem('classCodeObj'));
        classCodeObj.splice(index, 1);
        localStorage.setItem('classCodeObj', JSON.stringify(classCodeObj));
      }
      this.triggerChange();
    }
  }

  public addClassCode(i) {
    const self = this;
    if (self.classCodeAddingArray.length < 10) {
      self.classCodeAddingArray.push(self.classCodeAddingArray.length + 1);
      self.triggerChange();
    }
    let obj = {
      classCode: $('#classCode_' + i).val(),
      payroll: $('#payroll_' + i).val()
    };
    if (localStorage.getItem('classCodeObj')) {
      this.classCodeObj = JSON.parse(localStorage.getItem('classCodeObj'));
    }
    this.classCodeObj.push(obj);
    localStorage.setItem('classCodeObj', JSON.stringify(this.classCodeObj));

    $('.classCode').select2({
      placeholder: "Select a state",
    });
  }

  ngAfterViewInit() { }
  public triggerChange() {
    if (!this.changeDetect['destroyed']) {
      this.changeDetect.detectChanges();
    }
  }
}