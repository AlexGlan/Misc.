/**
 * Challenge description: Your function needs to return a string in MM:SS format
 * that tells us our average time (pace) to run a single kilometre
 * @param distance - Is the total distance we ran in kilometres
 * @param time - Is a string in MM:SS format that indicates how long we went for a run for
 */

const calculateAvgPace = (distance: number, time: string): string => {
    const [minutes, seconds]: number[] = time.split(':').map(Number);

    // calculate total running time in seconds
    const totalSeconds: number = seconds + minutes * 60;
    // calculate average running pace in seconds
    const avgPace: number = totalSeconds / distance;
    // convert average pace to full minutes
    const avgMinutes: number = Math.floor(avgPace / 60);
    // calculate the remaining seconds from average pace
    let remainingSeconds: number = Math.floor(avgPace % 60);

    return `${avgMinutes}:${String(remainingSeconds).padStart(2, '0')} per kilometer`;
}