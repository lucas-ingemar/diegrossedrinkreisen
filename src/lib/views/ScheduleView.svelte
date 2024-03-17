<script lang="ts">
function getWeekNumber(date: Date): number {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date.getTime() - oneJan.getTime()) / 86400000 + oneJan.getDay() + 1) / 7);
}

function generateFirstOddWeekThursday(offset: Int): Date {
    const currentDate = new Date();
    const stockholmOffset = 2; // Stockholm is UTC+2 in standard time (adjust for daylight saving time if applicable)
    
    // Adjust to Stockholm time
    const currentYear = currentDate.getUTCFullYear();
    const currentMonth = currentDate.getUTCMonth() + offset;
    const currentDay = currentDate.getUTCDate();
    const currentHour = currentDate.getUTCHours() + stockholmOffset;
    
    // Start from the first day of the current month
    let firstDayOfMonth = new Date(Date.UTC(currentYear, currentMonth, 1, currentHour));

    // Find the first Thursday in the month
    while (firstDayOfMonth.getUTCDay() !== 4 /* Thursday */) {
        firstDayOfMonth.setUTCDate(firstDayOfMonth.getUTCDate() + 1);
    }

    // Find the odd week
    while (getWeekNumber(firstDayOfMonth) % 2 !== 1) {
        firstDayOfMonth.setUTCDate(firstDayOfMonth.getUTCDate() + 7);
    }

    // Set time to midnight (00:00:00)
    firstDayOfMonth.setUTCHours(0, 0, 0, 0);

    return firstDayOfMonth;
}

function generateDatesForEntries(entries: Record<string, number>[]): Date[] {
    const result: Date[] = [];

    entries.forEach((entry, index) => {
        const date = generateFirstOddWeekThursday(index);
        result.push(date);
    });
    return result;
}

// Example usage
const entries = [{ aa: 11 }, { bb: 22 }, { cc: 33 }]; // Your array with entries
const dates = generateDatesForEntries(entries);
console.log(dates);
</script>
