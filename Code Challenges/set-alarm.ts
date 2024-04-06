/**
 * Challenge description: Create a function which accepts an alarm parameter.
 * This parameter will be the time our alarm to wake up has been set.
 * The function should then calculate the difference between the current time and the alarm time.
 * Return that difference as a string format.
 */

const setAlarm = (alarm: string): string => {
    // Only input in "HH:MM" (24-hour clock) format is supported
    const timeFormat: RegExp = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    let remainingHours: number = 0;
    let remainingMinutes: number = 0;   

    // Validate time format
    if (!timeFormat.test(alarm)) {
        return 'Invalid input, please enter your time in "HH:MM" (24-hour clock) format';
    }
    // Get current time
    const currentDate: Date = new Date();
    const currenHours: number = currentDate.getHours();        
    const currentMinutes:number = currentDate.getMinutes();

    // Get time from input
    const [alarmHours, alarmMinutes]: number[] = alarm.split(':').map(Number);

    // Calculate difference between input time and current time
    const hourDifference:number = alarmHours - currenHours;
    const minuteDifference:number = alarmMinutes - currentMinutes;

    // Calculate the remainig time before set alarm based on time difference:
    // Calculate hours
    if (hourDifference >= 0) {
        remainingHours = hourDifference;
    } else {
        remainingHours = 24 + hourDifference;
    }
    
    // Calculate minutes
    if (minuteDifference >= 0) {
        remainingMinutes = minuteDifference;
    } else {
        remainingMinutes = 60 + minuteDifference;
        remainingHours--;
        if (remainingHours < 0) remainingHours = 23;
    }
    
    return `${remainingHours} hours and ${remainingMinutes} minutes of sleep left`;
}