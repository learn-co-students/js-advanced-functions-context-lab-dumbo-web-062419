/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 let allWagesFor = function(){
    let eligibleDates = this.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0)

    return payable
}

let createEmployeeRecord = function(array) {
  return Object = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

let createEmployees = function(arrayOfArrays) {
  return arrayOfArrays.map(function(array){
    return createEmployeeRecord(array);
  })
}

let createEmployeeRecords = function(arrayOfArrays) {
  return arrayOfArrays.map(function(array){
    return createEmployeeRecord(array);
  })
}

let createTimeInEvent = function(dateStamp) {
  let timeIn = {
    type: 'TimeIn',
    hour: Number(dateStamp.slice(11, 15)),
    date: dateStamp.slice(0, 10)
  }
  this.timeInEvents.push(timeIn);
  return this;
}

let createTimeOutEvent = function(dateStamp) {
  let timeIn = {
    type: 'TimeOut',
    hour: Number(dateStamp.slice(11, 15)),
    date: dateStamp.slice(0, 10)
  }
  this.timeOutEvents.push(timeIn);
  return this;
}

let hoursWorkedOnDate = function(dateStamp){
  let inTime
  this.timeInEvents.find(function(timeIn){
    if(timeIn.date == dateStamp){
      inTime = timeIn.hour
    }
  })
  let outTime
  this.timeOutEvents.find(function(timeOut){
    if(timeOut.date == dateStamp){
      outTime = timeOut.hour
    }
  })
  return (outTime - inTime)/100;
}

let wagesEarnedOnDate = function(dateStamp){
  return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour;
}


let findEmployeebyFirstName = function(srcArray, firstName){
  return srcArray.find(function(array){
    return array.firstName === firstName;
  })
}

let calculatePayroll = function(array){
  return array.reduce(function(memo, rec){
    return memo + allWagesFor.call(rec)
  }, 0)
}




















//
